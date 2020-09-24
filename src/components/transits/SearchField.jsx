import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as flightActions from '../transit.actions';
import {getFlightData} from '../transit.gateway'



class SearchField extends Component {
    state = {
        flight: '',
    }

    onChange = event => {
        this.setState({ flight: event.target.value })
    }

    handleGetFlight = () => {  
        this.props.showSpinner();
        getFlightData(this.state.flight)
        .then(flightData=>{
            this.props.flightDataRecieved(flightData)
        })
    }

    render() {
        return (
            <div className='container-header'>
                <div className='title-header'>SEARCH FLIGHT</div>
                <div className='search-transit'>
                    <div className="search-block">
                        <i className="fas fa-search" style={{
                            color: 'grey',
                            fontSize: '25px'
                        }}></i>
                    </div>
                    <input placeholder='Airline, destination or flight #'
                        onChange={this.onChange}
                        value={this.state.flight} />
                    <button  className='search-button' onClick={this.handleGetFlight}>SEARCH</button>
             
                </div>
            </div>
        )
    }
}


SearchField.propTypes={
    showSpinner:PropTypes.func.isRequired,
    // flightDataRecived:PropTypes.func.isRequired,
}

const mapDispatch={
    showSpinner:flightActions.showSpinner,
    flightDataRecieved: flightActions.flightDataRecieved,
}

export default connect(null,mapDispatch) (SearchField)