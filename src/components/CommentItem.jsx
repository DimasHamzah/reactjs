import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import postedAt from '../utils';

export default function CommentItem({ content, createdAt, owner }) {
  return (
    <div className="talks-list">
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            {content}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {postedAt(createdAt)}
          </Typography>
          <div className="comentar">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={owner.avatar} />
            </Stack>
            <p>{owner.name}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

CommentItem.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  owner: PropTypes.object.isRequired,
};
