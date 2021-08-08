import React, {Component} from 'react'
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchUser} from './redux/actions/index'

export class Main extends Component{
  componentDidMount(){
    this.props.fetchUser();
  }
  
  render(){
    const {currentUser} =this.props
    
    function Map() {
        const [viewport, setViewport] = useState({
          width: '100vh',
          height: '100vh',
          latitude: 49.282730,
          longitude: -123.120735,
          style: 'mapbox://styles/mapbox/streets-v11',
          zoom: 8
        });  
    
    
    return (
        <ReactMapGL
      {...viewport}
      mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
    )
    }
}
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)
export default connect(null, mapDispatchProps)(Main)