import { SHOW_SPINNER, FLIGHT_DATA_RECIEVED } from './transit.actions'

const initialState = {
    isFetching: false,
    flightData: null,
};

const flightsReducer = (state = initialState, action) => {
    // console.log(state)
    switch (action.type) {
        case SHOW_SPINNER:
            return {
                ...state,
                isFetching: true
            }
        case FLIGHT_DATA_RECIEVED:
            return {
                ...state,
                flightData: action.payload.flightData,
                isFetching: false
            }

        default:
            return state;
    }
};
export default flightsReducer