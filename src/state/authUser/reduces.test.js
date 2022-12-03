import authUserReducer from './reducer';

describe('authUserReducer funciton', () => {
  it('should return the initial state when given by unknown action', () => {
    // arange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the login when given by SET_AUTH_USER action', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        user: {
          id: 'user-YaCmWC18FWARATcN',
          name: 'Test',
          email: 't48@gmail.com',
          avatar: 'https://ui-avatars.com/api/?name=Test&background=random',
        },
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.data);
  });

  it('should return the logout when given by UNSET_AUTH_USER', () => {
    // arange
    const initialState = '';
    const action = {
      type: 'UNSET_AUTH_USER',
      payload: {
        authUser: null,
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });
});
