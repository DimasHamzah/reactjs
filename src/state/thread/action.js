/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD: 'RECEIVE_THREAD',
  ADD_THREAD: 'ADD_THREAD',
};

function receiveThreadActionCreator(thread) {
  return {
    type: ActionType.RECEIVE_THREAD,
    payload: {
      thread,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function asyncReceiveThread() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threads = await api.seeAllThread();
      const allUsers = await api.seeAllUser();

      const resultAllThreadUsers = [];

      threads.map((thread) => {
        allUsers.filter((user) => {
          if (user.id === thread.ownerId) {
            resultAllThreadUsers.push({
              id: thread.id,
              body: thread.body,
              category: thread.category,
              createdAt: thread.createdAt,
              totalComments: thread.totalComments,
              ownerId: thread.ownerId,
              name: user.name,
              avatar: user.avatar,
            });
          }
        });
      });

      console.log(resultAllThreadUsers);

      dispatch(receiveThreadActionCreator(resultAllThreadUsers));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadActionCreator,
  addThreadActionCreator,
  asyncReceiveThread,
  asyncAddThread,
};
