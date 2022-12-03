import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

function LeaderboardItem({ score, user }) {
  return (
    <div className="talks-list">
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            <Avatar alt="Remy Sharp" src={user.avatar} />
            {user.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.email}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            score :
            {' '}
            {score}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

LeaderboardItem.propTypes = {
  score: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};

export default LeaderboardItem;
