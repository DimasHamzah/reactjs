import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigasi from '../routes/Navigasi';
import Button from '../components/Button';
import LeaderboardList from '../components/LeaderboardList';
import { asyncReceiveLeaderBoards } from '../state/leaderboars/action';

export default function LeaderPage() {
  const {
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderBoards());
  }, [dispatch]);

  return (
    <div className="home-page">
      <Navigasi />
      <LeaderboardList leaderboards={leaderboards} />
      <Button />
    </div>
  );
}
