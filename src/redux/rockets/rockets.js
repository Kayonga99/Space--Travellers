const url = 'https://api.spacexdata.com/v3/rockets';

const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_REVERATION = 'CANCEL_REVERATION';
const FETCHING_ROCKETS_FAILED = 'FETCHING_ROCKETS_FAILED';

const initialState = {
    rockets: []
};

const loadRockets = (rockets) => ({
    type: GET_ROCKETS
})
