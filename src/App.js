import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LeaderPage from './pages/LeaderPage';
import DetailThreadPage from './pages/DetailThreadPage';
import { asyncPreloadProcess } from './state/isPreload/action';
import { asyncUnsetAuthUser } from './state/authUser/action';
import CreateThreadPage from './pages/CreateThreadPage';
import Loading from './components/Loading';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <main>
        <Loading />
        <Routes>
          <Route path="/*" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    );
  }

  return (
    <main>
      <Loading />
      <Routes>
        <Route path="/*" element={<HomePage signOut={onSignOut} />} />
        <Route path="/leaderboards" element={<LeaderPage />} />
        <Route path="/thread" element={<CreateThreadPage />} />
        <Route path="/detail/:id" element={<DetailThreadPage />} />
      </Routes>
    </main>
  );
}

export default App;
