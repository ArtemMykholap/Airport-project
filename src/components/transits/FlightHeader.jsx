import React from 'react';


const FlightHeader = () => {
    return (
        <div className='transit-string'>
            <div className='transit-string__header'>Terminal</div>
            <div className='transit-string__header'>Local time</div>
            <div className='transit-string__header'>Destination</div>
            <div className='transit-string__header'>Status</div>
            <div className='transit-string__header'>Airline</div>
            <div className='transit-string__header'>Flight</div>
        </div>
    );
};

export default  FlightHeader;