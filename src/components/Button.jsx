import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// eslint-disable-next-line react/prop-types
function Button({ signOut }) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} className="homepage__action">
      <Link to="/thread">
        <Fab color="primary" aria-label="add" title="Buat thread">
          <AddIcon />
        </Fab>
      </Link>
      <Fab color="secondary" aria-label="add" title="Logout" onClick={signOut}>
        <LogoutOutlinedIcon />
      </Fab>
    </Box>
  );
}

export default Button;
