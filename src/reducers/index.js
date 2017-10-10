
import {combineReducers} from 'redux';
import UserReducer from './userReducer';
import StoreReducer from './storeReducer';
import ModalReducer from './modalReducer';

export default combineReducers({
  user: UserReducer,
  store: StoreReducer,
  modal: ModalReducer
});
