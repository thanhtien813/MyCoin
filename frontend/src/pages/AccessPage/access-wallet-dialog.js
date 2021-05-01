import React, { useState } from 'react';
import { Dialog, DialogContent, Button, DialogActions, withStyles } from '@material-ui/core';
import BlueTextField from '../../components/BlueTextField';
import DialogTitle from '../../components/DialogTitle';

const AccessButton = withStyles((theme) => ({
    root: {
      color: '#05c0a5',
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'white',
      },
    },
}))(Button);

const AccessWalletDialog = ({ open, onCloseClick }) => {
    return (
        <Dialog
            open={open}
            onClose={onCloseClick}
            fullWidth
            aria-labelledby="create-wallet-dialog-title"
        >
            <DialogTitle id="create-wallet-dialog-title" onClose={() => onCloseClick()}>
                Access by Private Key
            </DialogTitle>
            <DialogContent dividers style={{ padding: '5%' }}>
                <BlueTextField label="Private Key" variant="outlined" style={{width: '100%'}}/>
            </DialogContent>
            <DialogActions>
                <AccessButton autoFocus onClick={() => {}} >
                    Access Wallet
                </AccessButton>
            </DialogActions>
        </Dialog>
    )
}

export default AccessWalletDialog;