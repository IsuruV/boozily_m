import { USER_UPDATE, SET_LOCATION } from './types';

export const userUpdate = ({prop, value})=>{
  return{
    type: USER_UPDATE,
    payload: { prop, value }
  }
};

export const setUserLocation = ({lat, lng, location}) =>{
  return{
    type: SET_LOCATION,
    payload: {lat, lng, location}
  }
}
