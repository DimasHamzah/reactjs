import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ThreadItem from './ThreadItem';

function ThreadList({ thread }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      {
      thread.map((threads) => (
        <ThreadItem
          key={threads.id}
            // eslint-disable-next-line react/jsx-props-no-spreading
          {...threads}
        />
      ))
     }
    </Box>
  );
}

ThreadList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  thread: PropTypes.arrayOf(PropTypes.object),
};
export default ThreadList;
