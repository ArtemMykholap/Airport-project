import React, { Component } from 'react';
import {connect} from 'react-redux';
// import * as usersActions from './users.actions'
import PropTypes from 'prop-types';


class SearchField extends Component {
    // state={
    //     userName:''
    // }
    // onChange=event=>{
    //     this.setState({userName:event.target.value})
    // }
    // handleUserSearch=()=>{
    //     this.props.fetchUserData(this.state.userName);
  
    // }

    render() {
        return (
            <div className='container-header'>
            <div className='title-header'>SEARCH FLIGHT</div>
            <form className='search-transit'>
                <div className="search-block">
                    <i className="fas fa-search" style="color: grey; 
                    font-size: 25px;"></i>
                </div>
                <input search placeholder='Airline, destination or flight #'/>

                <button type='submit' className='search-button'>SEARCH</button>
            </form>
        </div>
        )
    }
}

// SearchField.protoTypes={

//     fetchUserData:PropTypes.func.isRequired,


// }


// const mapDispatch={

//     fetchUserData:usersActions.fetchUserData
// };

export default connect()(SearchField)