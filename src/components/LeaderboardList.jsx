/* eslint-disable array-callback-return */
/* eslint-disable react/forbid-prop-types */
// eslint-disable-next-line react/jsx-filename-extension
import PropTypes from 'prop-types';
import LeaderboardItem from './LeaderboardItem';

export default function LeaderboardList({ leaderboards }) {
  return (
    leaderboards.map((leaders) => (
      // eslint-disable-next-line react/react-in-jsx-scope
      <LeaderboardItem
        key={leaders.user.id}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...leaders}
      />
    ))
  );
}

LeaderboardList.propTypes = {
  // eslint-disable-next-line react/require-default-props
  leaderboards: PropTypes.arrayOf(PropTypes.object),
};
