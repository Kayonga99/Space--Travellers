import { createAsyncThunk } from '@reduxjs/toolkit';

// Action types
const JOIN_MISSION = 'missions/JOIN_MISSION/';
const LEAVE_MISSION = 'missions/LEAVE_MISSION/';
const GET_MISSIONS = 'missions/GET_MISSIONS';

// Initial State
const initialState = {
  missions: [],
  status: null,
};

const switchReserved = (state, id) => state.map((mission) => {
  if (mission.id !== id) { return mission; }
  return { ...state, joined: !mission.reserved };
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MISSIONS}/pending`:
      return {
        missions: [],
        status: 'Missions loading',
      };
    case `${GET_MISSIONS}/fulfilled`:
      return {
        missions: action.payload,
        status: 'Missions fetched successfully',
      };
    case `${JOIN_MISSION}fulfilled`:
      return {
        missions: switchReserved(state, action.payload.id),
        status: 'Mission joined successfully',
      };
    case `${LEAVE_MISSION}fulfilled`:
      return {
        missions: switchReserved(state, action.payload.id),
        status: 'Mission left successfully',
      };
    default:
      return state;
  }
};

export const getMissionsAction = createAsyncThunk(GET_MISSIONS, async () => {
  const BASE_URL = 'https://api.spacexdata.com/v3/missions';
  let data = await fetch(BASE_URL);
  data = await data.json();
  const missionArray = [];
  data.map((item) => {
    const mission = {
      missionId: item.mission_id,
      missionName: item.mission_name,
      description: item.description,
      joined: false,
    };
    missionArray.push(mission);
    return missionArray;
  });
  return missionArray;
});

export const joinMissionAction = (id) => ({ type: JOIN_MISSION, payload: id });

export const leaveMissionAction = (id) => ({ type: LEAVE_MISSION, payload: id });

export default missionsReducer;
