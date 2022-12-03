import commentReducer from './reducer';

describe('commentReducer function', () => {
  it('should return the inital state when given by unknown action', () => {
    // arange
    const initalState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = commentReducer(initalState, action);

    // assert
    expect(nextState).toEqual(initalState);
  });

  it('should return the comment when given by ADD_COMMENT', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'ADD_COMMENT',
      payload: {
        comment: {
          id: 'comment-l7ZTrb7Z_Zx2OgTQ',
          content: 'komentar saya',
          createdAt: '2022-11-30T12:48:01.888Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'user-YaCmWC18FWARATcN',
            name: 'Test',
            email: 't48@gmail.com',
            avatar: 'https://ui-avatars.com/api/?name=Test&background=random',
          },
        },
      },
    };

    // action
    const nextState = commentReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.comment);
  });
});
