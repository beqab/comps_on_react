import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Index from '../pages/index';
import Shop from '../pages/shop'
import Contact from '../pages/contact';
import Service from '../pages/service'


class Router extends Component {
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

export default Router;