
import {combineReducers} from 'redux';
import UserReducer from './userReducer';
import StoreReducer from './storeReducer';

export default combineReducers({
  user: UserReducer,
  store: StoreReducer
});
