import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './prompt-custom.scss';
import { Grid } from '@mui/material';



function PromptCustom({ open, setOpen, heading }) {
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
            aria-labelledby="prompt-dialog-title"
        >
            <Grid className='dialog-main-container'>

                <Grid className='prompt-dialog-cross-button'>
                    <Grid onClick={() => setOpen(!open)} className='dialog-box-cross-icon'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4.66688L10.6669 0L12 1.33312L7.33312 6L12 10.6669L10.6669 12L6 7.33312L1.33312 12L0 10.6669L4.66688 6L0 1.33312L1.33312 0L6 4.66688Z" fill="#4F4F4F" />
                        </svg>
                    </Grid>


                </Grid>

                <Grid className='prompt-dialog-content-box'>

                    <Grid className='prompt-dialog-text'>
                        <h4>{heading}</h4>
                    </Grid>

                    <Grid className='prompt-dialog-textarea'>
                        <textarea id="add-leave-leave_reason" name="leave_reason" rows="4" cols="50"
                            placeholder='Type ....'
                        >
                        </textarea>
                    </Grid>



                    <Grid className='prompt-dialog-btns'>
                        <button onClick={() => setOpen(!open)} className='prompt-dialog-no-btn' type="button">No</button>
                        <button onClick={() => setOpen(!open)} className='prompt-dialog-yes-btn' type="button">Yes</button>
                    </Grid>

                </Grid>
            </Grid>
        </Dialog>
    );
}

export default React.memo(PromptCustom)
