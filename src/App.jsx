import React from 'react';
import { Provider } from 'react-redux';
import FlightsList from './transits/FlightsList';
import SearchFieldContainer from './transits/SearchFieldContainer';
import {createStore} from 'redux';
import combineReducers from './store/reducer';
// import store from './store';
import ButtonSorted from './transits/ButtonSorted';

const store=createStore(combineReducers)


const App = () => {
    return ( 
        <Provider store={store}>
            <div className='page'>
                <SearchFieldContainer />
                <ButtonSorted/>
                <FlightsList />
            </div>
            </Provider>
    );
};

export default App;