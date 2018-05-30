import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/types';
const INITIAL_STATE = { items : [] }

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log(action.payload)
      return {...state, items: [...state.items, action.payload] }
    case REMOVE_PRODUCT:
      let clonedItems = state.items.slice()
      let index = clonedState.indexOf(action.payload)
      clonedItems.splice(index,1)
      return { ...state, items: clonedItems }
    default:
      return state;
  }
}
