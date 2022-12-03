/**
 * skenario
 *
 * -asyncReceiveTalkDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert when data fetching failed
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadDetialActionCreator, asyncReceiveTalkDetail } from './action';

const fakeThreadDetailResponse = {
  detailThread: {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    owner: {
      id: 'users-1',
      name: 'John Doe',
      avatar: 'https://generated-image-url.jpg',
    },
    upVotesBy: [],
    downVotesBy: [],
    comments: [
      {
        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg',
        },
        upVotesBy: [],
        downVotesBy: [],
      },
    ],
  },
};

const threadId = '1234';

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveTalkDetail thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._seeDetailThread = api.seeDetailThread;
  });

  afterEach(() => {
    // restore original implementation
    api.seeDetailThread = api._seeDetailThread;

    // delete backup
    delete api._seeDetailThread;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arange
    // stub implementation
    api.seeDetailThread = () => Promise.resolve(fakeThreadDetailResponse);
    // mock dispatch
    const dispacth = jest.fn();

    // action
    await asyncReceiveTalkDetail(threadId)(dispacth);

    // assert
    expect(dispacth).toHaveBeenCalledWith(showLoading());
    // eslint-disable-next-line max-len
    expect(dispacth).toHaveBeenCalledWith(receiveThreadDetialActionCreator(fakeThreadDetailResponse));
    expect(dispacth).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arange
    // stub implementation
    api.seeDetailThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncReceiveTalkDetail(threadId)(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
