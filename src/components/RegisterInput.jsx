/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-password-input"
          label="username"
          type="username"
          autoComplete="current-password"
          value={name}
          onChange={onNameChange}
          placeholder="Name"
        />
      </Box>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Email"
          id="margin-dense"
          type="email"
          margin="dense"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
        />
      </Box>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
      </Box>
      <div style={{ marginLeft: '10px' }}>
        <Button
          variant="outlined"
          size="medium"
          type="button"
          onClick={() => register({ name, email, password })}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
