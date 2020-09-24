// import { createSelector } from "reselect";

export const isFetchingSelector = state => {
    return state.flights.isFetching;
}

export const flightDataSelector = state => {
    return state.flights.flightData;
}