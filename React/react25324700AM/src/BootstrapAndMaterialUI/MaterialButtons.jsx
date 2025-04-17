import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ErrorIcon from '@mui/icons-material/Error';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        <AcUnitIcon></AcUnitIcon> Success
      </Button>
      <Button variant="outlined" color="error">
        <ErrorIcon></ErrorIcon> Error
      </Button>
    </Stack>
  );
}
