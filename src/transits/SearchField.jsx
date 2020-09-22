import React, { Component } from 'react';




class SearchField extends Component {
    constructor (props) {
        super(props);
        this.searchChange=this.searchChange.bind(this);
    }

    searchChange(event) {
        this.props.setFlight(event.target.value)
    }


    render() {
        return (
            <div className='container-header'>
                <div className='title-header'>SEARCH FLIGHT</div>
                <form className='search-transit'>
                    <div className="search-block">
                        <i className="fas fa-search" style={{
                            color: 'grey',
                            fontSize: '25px'
                        }}></i>
                    </div>
                    <input placeholder='Airline, destination or flight #' onChange={this.searchChange} value={this.props.flight} />

                    <button type='submit' className='search-button'>SEARCH</button>
                </form>
            </div>
        )
    }
}



export default SearchField