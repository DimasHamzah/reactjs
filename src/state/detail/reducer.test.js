/*
    * test scenario for threadDetailReducer

    * -threadDetailReducer
        - should return the initial state when given by unknown action
        - should return the thread when given by RECEIVE_THREAD_DETAIL action
*/
import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arange
    const initalState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initalState, action);

    // assert
    expect(nextState).toEqual(initalState);
  });

  it('should return the thread  when given RECEIVE_THREAD_DETAIL action', () => {
    // arange
    const initalState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        data: {
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
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initalState, action);

    // assert
    expect(nextState).toEqual(action.payload.detailThread);
  });
});
