import React from 'react';
import { Provider } from 'react-redux';
import FlightsList from './components/transits/FlightsList';
import SearchField from './components/transits/SearchField';
import store from './store';
import ButtonSorted from './components/transits/ButtonSorted';



const App = () => {
    return (
        <Provider store={store}>
            <div className='page'>
                <SearchField />
                <ButtonSorted />
                <FlightsList />
            </div>
        </Provider>
    );
};

export default App;