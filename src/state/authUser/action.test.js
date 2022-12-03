import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  asyncSetAuthUser, setAuthUserActionCreator,
} from './action';

/**
    skenario test

    * asyncSetAuthUser thunk
        -should dispatch action correctly when data posting success
        -should dispatch action and call alert correctly when data fetching failed

*/

const fakeOwnerResponse = {
  id: 'user-YaCmWC18FWARATcN',
  name: 'Test',
  email: 't48@gmail.com',
  avatar: 'https://ui-avatars.com/api/?name=Test&background=random',
};

const fakeLoginUser = {
  email: 'halo@gmail.com',
  password: '12345676756756768',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._login = api.login;
    api._seeOwnProfile = api.seeOwnProfile;
  });

  afterEach(() => {
    api.login = api._login;
    api.seeOwnProfile = api._seeOwnProfile;

    // delete backup
    delete api._login;
    delete api._seeOwnProfile;
  });

  it('should dispatch aciton correctly when data fetching success', async () => {
    // arange
    // stub implementation
    api.login = () => Promise.resolve(fakeLoginUser);
    api.seeOwnProfile = () => Promise.resolve(fakeOwnerResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncSetAuthUser(fakeLoginUser)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeOwnerResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
