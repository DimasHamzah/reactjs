import { ActionType } from './action';

function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case ActionType.SET_REGISTER_USER:
      return action.payload.users;
    default:
      return users;
  }
}

export default usersReducer;
