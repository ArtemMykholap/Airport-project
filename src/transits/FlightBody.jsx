import React from 'react';

const FlightBody = () => {
    return (<>
        <div className='transit-string__info'>
            <div className='transit-string__terminal'>
                <span>A</span>
            </div>
            <div className='transit-string__time'>0:55</div>
            <div className='transit-string__destination'>Larnaca</div>
            <div className='transit-string__status'>Landed 0:53</div>
            <div className='transit-string__airlines'>
                <img className='img_style' style='width:60px; padding: 5px;'
                    src='https://api.iev.aero/media/airline/files/5b556c52d6ea7070426218.png' />
                <span>WizzAir</span>
            </div>
            <div className='transit-string__transit-number'>
                <span>W66260</span></div>
        </div>
        <div className='transit-string__info1'>
            <div className='transit-string__terminal'><span>A</span>
            </div>
            <div className='transit-string__time'>0:55</div>
            <div className='transit-string__destination'>Larnaca</div>
            <div className='transit-string__status'>Landed 0:53</div>
            <div className='transit-string__airlines'>
                <img className='img_style' style='width:60px; padding: 5px;'
                    src='https://api.iev.aero/media/airline/files/5b556c52d6ea7070426218.png' />
                <span>WizzAir</span>
            </div>
            <div className='transit-string__transit-number'>
                <span>W66260</span></div>
        </div>
        <div className='transit-string__info'>
            <div className='transit-string__terminal'><span>A</span>
            </div>
            <div className='transit-string__time'>0:55</div>
            <div className='transit-string__destination'>Larnaca</div>
            <div className='transit-string__status'>Landed 0:53</div>
            <div className='transit-string__airlines'>
                <img className='img_style' style='width:60px; padding: 5px;'
                    src='https://api.iev.aero/media/airline/files/5b556c52d6ea7070426218.png' />
                <span>WizzAir</span>
            </div>
            <div className='transit-string__transit-number'>
                <span>W66260</span>
            </div>
        </div>
    </>
    );
};

export default FlightBody;