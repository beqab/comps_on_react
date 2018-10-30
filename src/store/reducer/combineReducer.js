import {combineReducers} from 'redux';
import Reducers from './reducers';
import authReducer from './authReducer/authReducer'
import starterReducer from './starterData/starterReducer'

export default combineReducers({
  testReducer: Reducers,
  authReducer:authReducer,
  starterReducer:starterReducer
})