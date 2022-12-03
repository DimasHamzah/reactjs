/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CommentItem from './CommentItem';

export default function CommentList({ comments }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      {
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            {...comment}
          />
        ))
      }
    </Box>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object.isRequired),
};
