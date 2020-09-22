import React from 'react';
import { Provider } from 'react-redux';
import FlightsList from './transits/FlightsList';
import SearchField from './transits/SearchField';
import store from './store';
import ButtonSorted from './transits/ButtonSorted';

const App = () => {
    return (
        <Provider store={store}>
            <div className='page'>
                <SearchField />
                <ButtonSorted/>
                <FlightsList />
            </div>

        </Provider>
    );
};

export default App;