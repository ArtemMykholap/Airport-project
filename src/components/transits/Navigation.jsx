import React from 'react';
import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';

const Navigation = ({flightStatus, search}) => {
    return (<>
        <div className='content-container'>
            <div className='content-container__button'>
                <NavLink to={{pathname: '/departures', search}}>
                    <div className={`button-sorted-transits ${flightStatus === 'departures' ? 'active' : ''}`}>
                        <span className='button-sorted-transits__text'>
                            <i className="fas fa-plane-departure"></i>
                        DEPARTURES
                    </span>
                    </div>
                </NavLink>
                <NavLink to={{pathname: '/arrivals', search}}>
                    <div className={`button-sorted-transits ${flightStatus === 'arrivals' ? 'active' : ''}`}>
                        <span className='button-sorted-transits__text'>
                            <i className="fas fa-plane-arrival"></i>
                        ARRIVALS
                    </span>
                    </div>
                </NavLink>
            </div>
        </div>
    </>
    )
}


export default connect()(Navigation)