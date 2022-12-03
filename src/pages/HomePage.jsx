import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navigasi from '../routes/Navigasi';
import ThreadList from '../components/ThreadList';
import Button from '../components/Button';
import { asyncReceiveThread } from '../state/thread/action';

// eslint-disable-next-line react/prop-types
export default function HomePage({ signOut }) {
  const {
    thread = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThread());
  }, [dispatch]);

  return (
    <div className="home-page">
      <Navigasi />
      <ThreadList thread={thread} />
      <Button signOut={signOut} />
    </div>
  );
}
