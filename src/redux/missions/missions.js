// Action types
const JOIN = 'spaceTravellers/missions/JOIN/';
const LEAVE = 'spaceTravellers/missions/LEAVE/';

// Initial State
const initialState = {
  missions: [],
  status: null,
};

// const BASE_URL = 'https://api.spacexdata.com/v3/missions';

/*
Missions:
mission_id
mission_name
description
*/

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${JOIN}fulfilled`:
      return {
        missions: action.payload,
        status: 'Mission joined successfully',
      };
    case `${LEAVE}fulfilled`:
      return {
        missions: action.payload,
        status: 'Mission left successfully',
      };
    default:
      return state;
  }
};

export default missionsReducer;
