import * as React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './confirmation-dialog.scss';
import { Grid } from '@mui/material';



function ConfirmationDialog({ open, setOpen, heading }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Dialog
            fullScreen={fullScreen}
            fullWidth={true}
            maxWidth={'xs'}
            open={open}
            onClose={handleClose}
            aria-labelledby="confirmation-dialog-title"
        >
            <Grid className='dialog-main-container'>

                <Grid className='confirmation-dialog-cross-button'>
                    <Grid onClick={() => setOpen(!open)} className='dialog-box-cross-icon'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4.66688L10.6669 0L12 1.33312L7.33312 6L12 10.6669L10.6669 12L6 7.33312L1.33312 12L0 10.6669L4.66688 6L0 1.33312L1.33312 0L6 4.66688Z" fill="#4F4F4F" />
                        </svg>
                    </Grid>


                </Grid>

                <Grid className='confirmation-dialog-content-box'>

                    <Grid className='confirmation-dialog-text'>
                        <h4>{heading}</h4>
                    </Grid>

                    <Grid className='confirmation-dialog-btns'>
                        <button onClick={() => setOpen(!open)} className='confirmation-dialog-no-btn' type="button">No</button>
                        <button onClick={() => setOpen(!open)} className='confirmation-dialog-yes-btn' type="button">Yes</button>
                    </Grid>

                </Grid>
            </Grid>
        </Dialog>
    );
}


ConfirmationDialog.propTypes = {
    open: PropTypes.bool.isRequired, // Validate 'open' prop as boolean and required
    setOpen: PropTypes.func.isRequired, // Validate 'setOpen' prop as function and required
    heading: PropTypes.string.isRequired, // Validate 'heading' prop as string and required
};

export default React.memo(ConfirmationDialog)
