import React from 'react';


const FlightHeader = () => {
    return (
        <div className='transit-string'>
            <div className='transit-string__header__1'>Terminal</div>
            <div className='transit-string__header__2'>Local time</div>
            <div className='transit-string__header__3'>Destination</div>
            <div className='transit-string__header__3'>Status</div>
            <div className='transit-string__header__3'>Airline</div>
            <div className='transit-string__header__3'>Flight</div>
        </div>
    );
};

export default  FlightHeader;