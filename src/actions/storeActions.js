import { BASE_URL, GET_CLOSEST_STORES } from './types';

export const fetchStores = (address) =>{
  let url = 'http://localhost:3000/'+`/v1/stores/?address=${address}`
  return (dispatch) => {
  fetch(url,{
    method: 'get',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  }).then(response => response.json())
      .then((jsonResponse) => {
        return dispatch({
          type: GET_CLOSEST_STORES,
          payload: jsonResponse
        })
      }).catch((error)=> { alert(error) })
  }
}
