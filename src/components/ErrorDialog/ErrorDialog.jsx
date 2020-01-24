import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Button,
} from '@material-ui/core';
import {string, func, bool } from 'prop-types';

export const ErrorDialog = ({ title, message, onClose, open }) => (
    <Dialog open={open} onClose={() => onClose()}>
        <DialogTitle>
            {title}
        </DialogTitle>
        <DialogContent>
            <Typography variant="p">
                {message}
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => onClose()}>
                ok
            </Button>
        </DialogActions>
    </Dialog>
);

ErrorDialog.propTypes = {
    title: string.isRequired,
    message: string.isRequired,
    open: bool.isRequired,
    onClose: func
}
