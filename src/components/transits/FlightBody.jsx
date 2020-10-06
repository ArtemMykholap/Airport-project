import React from 'react';
import moment from 'moment';
import FlightHeader from './FlightHeader'

const FlightBody = ({ transitsToday }) => {
    return (<>
        <FlightHeader />
        {transitsToday.length > 0 && transitsToday.map((item, key) => {
            let status;
            if (item.status === 'LN') {
                status = 'Landed'
            }
            if (item.status === 'DP') {
                status = 'Departed'
            }
            if (item.status === 'ON') {
                status = 'On time'
            }
            if (item.status === 'BD') {
                status = 'Boarding'
            }
            if (item.status === 'CK') {
                status = 'Registration'
            }
            if (item.status === 'FR') {
                status = 'In flight'
            }

            let localTime;
            if (item.status === 'LN') {
                localTime = moment(item.timeToStand).format('HH:mm');
            }
            if (status === 'Departed') {
                localTime = moment(item.timeDepShedule).format('HH:mm');
            } else {
                localTime = moment(item.timeToStand).format('HH:mm');

            }
            return (
                <div className='transit-string__info' key={key} >
                    <div className='transit-string__terminal' >
                        <span className='letter'>{item.term}</span>
                    </div>
                    {/* .. */}
                    <div className='transit-string__time'>{localTime}</div>
                    <div className='transit-string__destination'>
                        {item['airportToID.city_en'] || item['airportFromID.city_en']}
                    </div>
                    <div className='transit-string__status'>
                        {status === 'Landed' || status === 'Departed' ?
                            `${status}  ${moment(item.timeTakeofFact).format('HH:mm')}`
                            : status}
                    </div>
                    <div className='transit-string__airlines'>
                        <img className='img_style' style={{ width: '60px', padding: ' 5px' }}
                            src={`${item.codeShareData[0].airline.en.logoSmallName}`} />
                        <span>{item.airline.en.name}</span>
                    </div>
                    <div className='transit-string__transit-number'>
                        <span>{item.codeShareData[0].codeShare}</span></div>
                </div>
            );
        })
        }
        {!transitsToday.length > 0 && <div className='no-flight'>No Flights</div>}
    </>
    )
};

export default FlightBody;