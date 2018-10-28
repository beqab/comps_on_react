import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import combineReducer from './store/reducer/combineReducer'
import Router from './routers/router'
import './App.css';

const store = createStore(combineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
      <Router/>
        
      </div>

      </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
