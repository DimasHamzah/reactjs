import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../state/thread/action';

function CreateThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));

    navigate('/');
  };

  return (
    <section>
      <Header />
      <ThreadInput addThread={onAddThread} />
    </section>
  );
}

export default CreateThreadPage;
