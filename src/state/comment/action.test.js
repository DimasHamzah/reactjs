import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncAddComment, addCommentActionCreator } from './action';

/*
    * test scanario coment
    *
    * - asyncAddComment thunk
    * - should dispatch action correctly when data fetching success
    * - should dispatch action and call alert correctly when data fetching failed
*/

const fakeCommentResponse = {
  status: 'success',
  message: 'Comment created',
  data: {
    comment: {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2021-06-21T07:00:00.000Z',
      upVotesBy: [],
      downVotesBy: [],
      owner: {
        id: 'users-1',
        name: 'John Doe',
        email: 'john@example.com',
      },
    },
  },
};

const fakeCommentInput = {
  id: '1234566',
  content: 'halooooo',
};

const fakeMessageResponse = {
  message: 'Missing authentication',
};
describe('asyncAddComment function', () => {
  beforeEach(() => {
    // backup original implementation
    api._createComment = api.createComment;
  });

  afterEach(() => {
    api._createComment = api.createComment;

    // delete backup
    delete api.createComment;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arange
    // stub implementation
    api.createComment = () => Promise.resolve(fakeCommentResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncAddComment(fakeCommentInput)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addCommentActionCreator(fakeCommentResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arange
    // stub implementation
    api.createComment = () => Promise.reject(fakeMessageResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncAddComment(fakeCommentInput)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeMessageResponse.message);
  });
});
