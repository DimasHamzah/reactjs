import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import postedAt from '../utils';

function ThreadItem({
  body, category, createdAt, id, totalComments, name, avatar,
}) {
  return (
    <div className="talks-list">
      <Card variant="outlined">
        <CardContent>
          <Link to={`/detail/${id}`}>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              {body}
            </Typography>
          </Link>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {category}
          </Typography>
          <div className="comentar">
            <InsertCommentOutlinedIcon />
            <p>{totalComments}</p>
          </div>
          <div className="comentar">
            <Stack direction="row" spacing={3}>
              <Avatar alt="image" src={avatar} sx={{ width: 24, height: 24 }} />
            </Stack>
            <p>{name}</p>
          </div>
          <Typography variant="body2">
            {postedAt(createdAt)}
            <br />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

ThreadItem.propTypes = {
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ThreadItem;
