import {combineReducers} from 'redux';
import Reducers from './reducers';
import authReducer from './authReducer/authReducer'

export default combineReducers({
  testReducer: Reducers,
  authReducer:authReducer
})