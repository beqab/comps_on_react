import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios'

import Router from './routers/router'
import './App.css';
import {connect} from 'react-redux';
import * as authAction from './store/actions/authActions' ;
import * as starterActions from './store/actions/starterAction';


class App extends Component {
   
    componentWillMount(){
         this.props.storeToState()
         this.props.featcStartData()
    }

  render() {
    return (
     
      <BrowserRouter>
      <div className="App">
      <Router/>
        
      </div>

      </BrowserRouter>
        
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
  let tooken = localStorage.getItem('token')
  let userInfo = localStorage.getItem('userInfo')
return{
    storeToState: () => dispatch(authAction.resaveUser(tooken, userInfo)),
    featcStartData: async () =>{
        await axios.get('https://comps-cee0a.firebaseio.com/sideService.json')
        .then(resp => {
             dispatch(starterActions.featchStarter(resp.data))
             console.log(resp)
        })
        .catch(err =>{
          console.log(err)
        })
    }
}
}
export default connect(null,mapDispatchToProps)(App);
