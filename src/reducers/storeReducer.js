import { GET_CLOSEST_STORES } from '../actions/types';

const INITIAL_STATE = {stores: [], selected_store: '', products:[]}

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CLOSEST_STORES:
    // debugger;
      return { ...state, stores: action.payload }
    default:
      return state;
  }
}
