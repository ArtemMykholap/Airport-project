import { FLIGHT_CHECK } from './transit.actions'
const initialState = {
    flight: ''
};

export const flightsReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case FLIGHT_CHECK:
            return {
                ...state,
                flight: action.payload
            }


        default:
            return state;
    }
};