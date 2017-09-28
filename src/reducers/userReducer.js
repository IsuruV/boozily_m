import { USER_UPDATE, SET_LOCATION } from '../actions/types';

const INITIAL_STATE = {name: '', phone: '', lat: '', lng: '', location: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case SET_LOCATION:
      const {lat, lng, location} = action.payload;
      return {...state, lat, lng, location }
    default:
      return state;
  }
};
