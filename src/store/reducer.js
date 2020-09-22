import { combineReducers } from 'redux';
import { flightsReducer } from './transit/transit.reducer';

export default combineReducers({
    flight: flightsReducer,
});