const url = 'https://api.spacexdata.com/v3/rockets';

const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_REVERATION = 'CANCEL_REVERATION';
const FETCHING_ROCKETS_FAILED = 'FETCHING_ROCKETS_FAILED';

const initialState = {
    rockets: []
};

const loadRockets = (rockets) => ({
    type: GET_ROCKETS,
    payload: rockets,
})

export const reserve = (id) => ({
    type: RESERVE_ROCKET,
    payload: id,
})

export const cancelResevertion = (id) => ({
    type: CANCEL_REVERATION,
    payload: id,
})

const reserveFailed = (id) => ({
    type: FETCHING_ROCKETS_FAILED,
    payload: id,
})

export const fetchRockets = () => async (dispatch) => {
    try{
        const response = await fetch(url)
        const rockets = await response.json()

        dispatch(loadRockets(
            rockets.map(rocket => {
                const {
                    flickr_images: images,
                    rocket_id: id,
                    rocket_name: name,
                    description,
                    reserved = false,
                } = rocket
                return {
                    id,
                    images,
                    name,
                    description,
                    reserved,
                }
            })
        ))
    } catch(err) {
dispatch(reserveFailed(err.message));
    }
}

const rocketReducer = (state= initialState, action) => {
    switch(action.type){
        case  GET_ROCKETS:
            return {
                ...state, rockets: action.payload
            }
        case FETCHING_ROCKETS_FAILED:
            return {
                ...state, error: action.payload
            }
        case RESERVE_ROCKET:
            const currentState = state.rockets.map(rocket => {
                if(rocket.id === action.payload){
                    return {...rocket, reserved: !rocket.reserved}
                }
                return rocket
            })
            return {...state, rockets: currentState}
        case CANCEL_REVERATION:
            const cancelState = state.reserved.map(rocket => {
                if(rocket.id === action.payload){
                    return {...rocket, reserved: !rocket.reserved}
                }
                return rocket
            })
            return {...state, rocket: cancelState}
        default:
            return state
    }
        
}

export default rocketReducer;