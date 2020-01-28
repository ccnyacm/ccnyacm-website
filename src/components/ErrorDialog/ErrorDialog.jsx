import React, { useContext } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Button,
} from '@material-ui/core';
import appContext from '../../context/appContext';

export const ErrorDialog = () => {
  const { error, hasError, setHasError } = useContext(appContext);
  return (
    <Dialog open={hasError} onClose={() => setHasError(false)}>
      <DialogTitle>
        Error
      </DialogTitle>
      <DialogContent>
        <Typography variant="p">
          {error}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setHasError(false)}>
          ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
