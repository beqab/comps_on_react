import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from '../pages/index';
import Shop from '../pages/shop'
import Contact from '../pages/contact';
import Service from '../pages/service';
import Auth from '../pages/auth';
import Registration from '../pages/reg';

class Router extends Component {

    

    render() {
        return (
            <div>
                <Switch>
                <Route path='/' exact component={Index} />
                <Route path='/Contact' exact component={Contact} />
                <Route path='/Shop' exact component={Shop} />
                <Route path='/Service' exact component={Service} />
                <Route path='/auth' exact component={Auth} />
                <Route path='/reg' exact component={Registration} />
               </Switch> 
            </div>
        );
    }
}

export default Router;
