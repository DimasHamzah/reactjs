import { ActionType } from './action';

function threadReducer(thread = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD:
      return action.payload.thread;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...thread];
    default:
      return thread;
  }
}

export default threadReducer;
