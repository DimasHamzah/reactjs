/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <div className="form-input">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '80ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-search"
            label="Title"
            type="search"
            variant="standard"
            value={title}
            onChange={onTitleChange}
            placeholder="title"
          />
        </div>
        <div>
          <TextField
            id="standard-search"
            label="Category"
            type="search"
            variant="standard"
            value={category}
            onChange={onCategoryChange}
            placeholder="category"
          />
        </div>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Body"
          style={{ width: '77%', marginLeft: '15px' }}
          value={body}
          onChange={onBodyChange}
        />
        <Stack spacing={5} direction="row">
          <Button
            variant="contained"
            style={{ width: '77%', marginLeft: '15px' }}
            onClick={() => addThread({ title, body, category })}
          >
            Save

          </Button>
        </Stack>
      </Box>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
