import React from 'react';
import { isFetchingSelector, flightDataSelector } from '../transit.selectors';
import FlightBody from './FlightBody'
import Navigation from './Navigation'
import Spinner from './Spinner';
import { currentDate } from '../transit.gateway';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import qs from 'qs';

const FlightsList = ({ flightData, isFetching }) => {
    const { flightStatus } = useParams()
    const { search } = useLocation();
    const searchString = qs.parse(search, { ignoreQueryPrefix: true }).search;
    if (isFetching) {
        return <Spinner />
    }
    if (!flightData) {
        return null
    }

    const { body: { departure, arrival } } = flightData;
    let transitsToday = [];
    if (flightStatus === 'departures') {
        if (searchString) {
            transitsToday = departure.filter(date => date.actual?.split('T')[0] === currentDate)
                .filter(flight => flight.codeShareData[0].codeShare === searchString)
        } else {
            transitsToday = departure.filter(date => date.actual?.split('T')[0] === currentDate)
        }
    } else if (flightStatus === 'arrivals') {
        if (searchString) {
            transitsToday = arrival.filter(date => date.actual?.split('T')[0] === currentDate)
                .filter(flight => flight.codeShareData[0].codeShare === searchString)
        } else {
            transitsToday = arrival.filter(date => date.actual?.split('T')[0] === currentDate)
        }
    }

    return (
        <>
            <Navigation flightStatus={flightStatus} search={search} />
            {(flightStatus) &&
                <div className='containerList'>
                    <FlightBody transitsToday={transitsToday} />
                </div>
            }
        </>
    )
}


const mapState = state => {
    return {
        isFetching: isFetchingSelector(state),
        flightData: flightDataSelector(state),
    }
}
export default connect(mapState)(FlightsList);