import { ActionType } from './action';

function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETIAL:
      return action.payload.threadDetail;
    default:
      return threadDetail;
  }
}

export default threadDetailReducer;
