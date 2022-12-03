import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_REGISTER_USER: 'SET_REGISTER_USER',
};

function setRegisterUserCreator(registerUser) {
  return {
    type: ActionType.SET_REGISTER_USER,
    payload: {
      registerUser,
    },
  };
}

function asyncSetRegister({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setRegisterUserCreator,
  asyncSetRegister,
};
