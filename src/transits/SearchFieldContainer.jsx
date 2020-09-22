import React, { Component } from 'react';
import SearchField from './SearchField';
import {connect} from 'react-redux';
import {setFlight } from '../store/actions'



class SearchFieldContainer extends Component {
    render() {
        return (
           <SearchField  flight={this.props.flight} setFlight={this.props.setFlight}/>
        )
    }
}

const mapStateProps=(state)=>{
    return{
        flight:state.flight.flight
    };
}

const mapDispatchProps={
    setFlight,

}

export default connect(mapStateProps,mapDispatchProps)(SearchFieldContainer)