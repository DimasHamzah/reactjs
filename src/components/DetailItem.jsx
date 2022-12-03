/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import postedAt from '../utils/index';
import InputKomentar from './InputKomentar';

export default function DetailItem({
  title, body, createdAt, owner, onAddComment,
}) {
  return (
    <div className="talks-list">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h1>{title}</h1>
          <p>{postedAt(createdAt)}</p>
        </Typography>
        <Typography variant="h5" component="div">
          {body}
        </Typography>
        <div className="comentar">
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={owner.avatar} />
          </Stack>
          <p>{owner.name}</p>
        </div>
        <InputKomentar onAddComment={onAddComment} />
      </CardContent>
    </div>
  );
}

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  onAddComment: PropTypes.func.isRequired,
};
