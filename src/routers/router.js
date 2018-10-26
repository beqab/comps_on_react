import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from '../pages/index';
import Shop from '../pages/shop'
import Contact from '../pages/contact';
import Service from '../pages/service';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actionTypes from '../store/actions';


class Router extends Component {

    componentDidMount(){
         this.props.fetchdata()
    }

    render() {
        return (
            <div>
                <Switch>
                <Route path='/' exact component={Index} />
                <Route path='/Contact' exact component={Contact} />
                <Route path='/Shop' exact component={Shop} />
                <Route path='/Service' exact component={Service} />
               </Switch> 
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        menu: state
    }
}

const mapDispatchToProps = dispatch =>{
     return{
         fetchdata : async (dd) => 
         await   axios.get('https://comps-cee0a.firebaseio.com/mrnu.json') 
         .then(resp => {
            dispatch(actionTypes.FetchStartData(resp.data))
         })
         
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);
