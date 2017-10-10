import { CLOSE_MODAL, OPEN_MODAL } from '../actions/types';

const INITIAL_STATE = { modalStatus : false, items: [] }

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return { modalStatus: false }
    case OPEN_MODAL:
      return { modalStatus: true }
    default:
      return state;
  }
}
