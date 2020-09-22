import React from 'react';


const ButtonSorted = () => {
    return (<div className='content-container'>
        <div className='content-container__button'>
            <div className='departures'>
                <span className='departures__text'>
                    <i className="fas fa-plane-departure"></i>
                        DEPARTURES
                    </span>
            </div>
            <div className='arrivals'>
                <span className="arrivals__text">
                    <i className="fas fa-plane-arrival"></i>
                        ARRIVALS
                    </span>
            </div>
        </div>
    </div>)
}
export default ButtonSorted