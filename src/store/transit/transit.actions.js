import { flightsReducer } from "./transit.reducer";

export const FLIGHT_CHECK = 'FLIGHT_CHECK';

export const setFlight = (flight) => ({
    type: FLIGHT_CHECK,
    payload: flight,
})