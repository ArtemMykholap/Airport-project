export const SHOW_SPINNER = 'SHOW_SPINNER';
export const FLIGHT_DATA_RECIEVED = 'FLIGHT_DATA_RECIEVED';

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER
    }
}

export const flightDataRecieved = (flightData) => {
    return {
        type: FLIGHT_DATA_RECIEVED,
        payload: {
            flightData
        }

    }
}