import { createAsyncThunk } from '@reduxjs/toolkit';

// Action types
const JOIN_MISSION = 'spaceTravellers/missions/JOIN_MISSION/';
const LEAVE_MISSION = 'spaceTravellers/missions/LEAVE_MISSION/';
const GET_MISSIONS = 'spaceTravellers/missions/GET_MISSIONS/';

// Initial State
const initialState = {
  missions: [],
  status: null,
};

const switchReserved = (state, id) => state.map((mission) => {
  if (mission.id !== id) { return mission; }
  return { ...state, reserved: !mission.reserved };
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
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

const fetchMission = async () => {
  const BASE_URL = 'https://api.spacexdata.com/v3/missions';
  let data = await fetch(BASE_URL);
  data = await data.json();
  const missionArray = [];
  data.map((item) => missionArray.push({
    mission_id: item.mission_id,
    mission_name: item.mission_name,
    description: item.description,
  }));
  return missionArray || [];
};

export const getMissionsAction = createAsyncThunk(GET_MISSIONS, async () => fetchMission());

export const joinMissionAction = (id) => ({ type: JOIN_MISSION, payload: id });

export const leaveMissionAction = (id) => ({ type: LEAVE_MISSION, payload: id });

export default missionsReducer;
