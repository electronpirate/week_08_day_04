import React, { Component } from 'react';
import BeersListContainer from './BeersListContainer.js';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.getBeersData()
  }

  render() {
    return (
      <>
        <h1>Brew Dog's Beers</h1>
        <BeersListContainer />
      </>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  getBeersData() {
    dispatch(() => {
      fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(beersData => {
        dispatch({
          type: 'ADD_DATA',
          beersData: beersData
        })
      })
    })
  }
})

export default connect(null, mapDispatchToProps)(App);
