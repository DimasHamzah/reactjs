/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Header from '../components/Header';
import { asyncReceiveTalkDetail } from '../state/detail/action';
import DetailItem from '../components/DetailItem';
import CommentList from '../components/CommentList';
import { asyncAddComment } from '../state/comment/action';

export default function DetailThreadPage() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  const {
    threadDetail = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveTalkDetail(id));
  }, [id, dispatch]);

  if (threadDetail === null) {
    return (<p>loading..</p>);
  }

  const onAddComment = ({ content }) => {
    dispatch(asyncAddComment({ id, content }));

    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="home-page detail">
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <DetailItem
              {...threadDetail}
              onAddComment={onAddComment}
            />
          </Card>
          <div className="komentar">
            <h1>Komentar</h1>
          </div>
          <CommentList {...threadDetail} />
        </Box>
      </div>
    </>
  );
}
