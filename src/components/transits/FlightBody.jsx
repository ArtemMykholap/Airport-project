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

    //make array transits today
    const { body: { departure, arrival } } = flightData;
    let transitsToday = departure.filter(date => date.actual.split('T')[0] === currentDate)
        .concat(arrival.filter(date => date.actual.split('T')[0] === currentDate));



    console.log(transitsToday)
    return (
        transitsToday.map(item => {
            let status = item.status === 'LN' ? 'Landed' : 'Departed';
            let localTime = item.status === 'LN' ? moment(item.timeArrShedule).format('hh:mm') : moment(item.timeDepShedule).format('hh:mm')

            return (<>
                <div className='transit-string__info' key={item.ID}>

                    <div className='transit-string__terminal'>
                        <span className='letter'>{item.term}</span>
                    </div>
                    <div className='transit-string__time'>{localTime}</div>
                    <div className='transit-string__destination'>
                        {item['airportToID.city_en'] || item['airportFromID.city_en']}
                    </div>
                    <div className='transit-string__status'>
                        {`${status} ${moment(item.timeLandFact).format('hh:mm')}`}
                    </div>
                    <div className='transit-string__airlines'>
                        <img className='img_style' style={{ width: '60px', padding: ' 5px' }}
                            src={`https://api.iev.aero${item.codeShareData[0].logo}`} />
                        <span>{item.airline.en.name}</span>
                    </div>
                    <div className='transit-string__transit-number'>
                        <span>{item.codeShareData[0].codeShare}</span></div>
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