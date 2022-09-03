import { createAsyncThunk } from '@reduxjs/toolkit';

// Action types
const GET_MISSIONS = 'missions/GET_MISSIONS';
const SWITCH_JOIN = 'missions/SWITCH_JOIN';
const DISPLAY_JOINED = 'missions/DISPLAY_JOINED';

// Initial State
const initialState = {
  missions: [],
  status: null,
};

const switchReserved = (state, id) => state.missions.map((mission) => {
  if (mission.missionId !== id) { return mission; }
  return { ...mission, joined: !mission.joined };
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
    case `${SWITCH_JOIN}`:
      return {
        missions: switchReserved(state, action.payload),
        status: 'Mission join switched successfully',
      };
    case DISPLAY_JOINED:
      return {
        missions: [...state.missions],
        status: 'Mission join switched successfully',
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

export const switchMissionAction = (id) => ({ type: SWITCH_JOIN, payload: id });

export const displayJoinedMissionsAction = () => ({ type: DISPLAY_JOINED });

export default missionsReducer;
