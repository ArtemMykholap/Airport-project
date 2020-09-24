import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { isFetchingSelector, flightDataSelector } from '../transit.selectors';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import { currentDate } from '../transit.gateway'

const FlightBody = ({ flightData, isFetching }) => {
    if (isFetching) {
        return <Spinner />
    }
    console.log(flightData)
    if (!flightData) {
        return null
    }
    const { body: { departure, arrival } } = flightData;
    let transitsToday = departure.filter(date => date.actual.split('T')[0] === currentDate)
        .concat(arrival.filter(date => date.actual.split('T')[0] === currentDate));

    let status=

    console.log(transitsToday)
    return (
        transitsToday.map(el => {
            return (<>
                <div className='transit-string__info' key={el.ID}>

                    <div className='transit-string__terminal'>
                        <span>{el.term}</span>
                    </div>
                    <div className='transit-string__time'>{moment(el.timeDepShedule).format("h:mm") || moment(el.timeArrShedule).format("h:mm")}</div>
                    <div className='transit-string__destination'>{el['airportToID.city_en'] || el['airportFromID.city_en']}</div>
            <div className='transit-string__status'>{el.status}</div>
                    <div className='transit-string__airlines'>
                        <img className='img_style' style={{ width: '60px', padding: ' 5px' }}
                            src='https://api.iev.aero/media/airline/files/5b556c52d6ea7070426218.png' />
                        <span>WizzAir</span>
                    </div>
                    <div className='transit-string__transit-number'>
                        <span>W66260</span></div>
                </div>
            </>
            );
        }))

};


FlightBody.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    flightData: PropTypes.shape(),
}

FlightBody.defaultValue = {
    flightData: null,
}


const mapState = state => {
    return {
        isFetching: isFetchingSelector(state),
        flightData: flightDataSelector(state),
    }
}


export default connect(mapState)(FlightBody);