import React from 'react';
import { Provider } from 'react-redux';
import SearchField from './components/transits/SearchField';
import store from './store';
import FlightsList from './components/transits/FlightsList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/transits/Navigation';


const App = () => {
    return (
        <div className='page'>
            <Provider store={store}>
                <Router>
                    <SearchField />
                    <Switch>
                        <Route exact path="/">
                            <Navigation />
                        </Route>
                        <Route path="/:flightStatus">
                            <FlightsList />
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
};

export default App;



















// import React from 'react';
// import { Provider } from 'react-redux';
// import Navigation from './components/transits/Navigation';
// import store from './store';
// import { BrowserRouter, Router, Route } from "react-router-dom";



// const App = () => {
//     return (

//         <div className='page'>
//             <Provider store={store}>
//                 <Router>
//                     <Route path='/' >
//                         <Navigation />
//                     </Route>
//                 </Router>
//             </Provider>
//         </div>


//     );
// };

// export default App;