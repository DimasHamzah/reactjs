import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function InputKomentar({ onAddComment }) {
  const [content, setContent] = useState('');

  return (
    <div className="input-komentar">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '80ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Body"
          style={{ width: '95%', marginLeft: '10px' }}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <Stack spacing={5} direction="row">
          <Button
            variant="contained"
            style={{ width: '95%', marginLeft: '10px' }}
            onClick={() => onAddComment({ content })}
          >
            Save

          </Button>
        </Stack>
      </Box>
    </div>
  );
}

InputKomentar.propTypes = {
  onAddComment: PropTypes.func.isRequired,
};
