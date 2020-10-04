export const SHOW_SPINNER = 'SHOW_SPINNER';
export const FLIGHT_DATA_RECIEVED = 'FLIGHT_DATA_RECIEVED';
// export const FLIGHT_DATA_SORTED = 'FLIGHT_DATA_SORTED';
// export const FLIGHT_DATA_SEARCH = 'FLIGHT_DATA_SEARCH';
// export const IS_SEARCHING = 'IS_SEARCHING';
import { getFlightData } from './transit.gateway'




export const showSpinner = () => {
    return {
        type: SHOW_SPINNER
    }
}


// export const isSearching = (isSearching) => {
//     return {
//         type: IS_SEARCHING,
//         payload: {
//             isSearching
//         }
//     }
// }


export const flightDataRecieved = (flightData) => {
    return {
        type: FLIGHT_DATA_RECIEVED,
        payload: {
            flightData
        }
    }
}


// export const flightDataSearch = (flightSearchText) => {
//     return {
//         type: FLIGHT_DATA_SEARCH,
//         payload: {
//             flightSearchText
//         }
//     }
// }


export const fetchFlightData = (flight) => {
    return function(dispatch) {
        getFlightData(flight)
            .then(flightData => {
                dispatch(flightDataRecieved(flightData))
            })
    }
}


// export const flightDataSorted = (flightStatus) => {
//     return {
//         type: FLIGHT_DATA_SORTED,
//         payload: {
//             flightStatus
//         }

//     }
// }