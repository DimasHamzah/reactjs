import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import usersReducer from './register/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadReducer from './thread/reducer';
import leaderboardsReducer from './leaderboars/reducer';
import threadDetailReducer from './detail/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    isPreload: isPreloadReducer,
    thread: threadReducer,
    leaderboards: leaderboardsReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
