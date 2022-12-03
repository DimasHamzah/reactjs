import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETIAL: 'RECEIVE_THREAD_DETAIL',
};

function receiveThreadDetialActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETIAL,
    payload: {
      threadDetail,
    },
  };
}

function asyncReceiveTalkDetail(talkId) {
  return async (dispacth) => {
    dispacth(showLoading());
    try {
      const talkDetail = await api.seeDetailThread(talkId);
      dispacth(receiveThreadDetialActionCreator(talkDetail));
    } catch (error) {
      alert(error.message);
    }
    dispacth(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetialActionCreator,
  asyncReceiveTalkDetail,
};
