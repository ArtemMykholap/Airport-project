import { createStore, combineReducers } from 'redux';
import flightsReducer from './components/transit.reducer';
// import thunk from 'redux-thunk';

const reducer = combineReducers({
    flights: flightsReducer
})



const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;