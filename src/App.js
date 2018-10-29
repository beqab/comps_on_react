import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Router from './routers/router'
import './App.css';
import {connect} from 'react-redux';
import * as authAction from './store/actions/authActions' ;


class App extends Component {
   
    componentDidMount(){
         this.props.storeToState()
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
    storeToState: () => dispatch(authAction.resaveUser(tooken, userInfo))
}
}
export default connect(null,mapDispatchToProps)(App);
