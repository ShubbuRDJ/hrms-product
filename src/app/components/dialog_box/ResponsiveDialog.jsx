import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './responsive_dialog.scss';
import { Grid } from '@mui/material';



function ResponsiveDialog({ open, setOpen, dialogArray, heading }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth={'md'}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      className='Custom-dialog-box-listing'
    >
      <Grid className='dialog-main-container'>

        <Grid className='cross-button'>
          <h4>{heading}</h4>

          <Grid onClick={() => setOpen(!open)} className='dialog-box-cross-icon'>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4.66688L10.6669 0L12 1.33312L7.33312 6L12 10.6669L10.6669 12L6 7.33312L1.33312 12L0 10.6669L4.66688 6L0 1.33312L1.33312 0L6 4.66688Z" fill="#4F4F4F" />
            </svg>
          </Grid>


        </Grid>

        <Grid className='dialog-content-box'>

          {
            dialogArray?.map((element, index) => (
              <Grid className='custom-dialog-list-item'>
                <span>{element?.heading}</span>
                <p>{element?.content}</p>
              </Grid>
            ))
          }

        </Grid>
      </Grid>
    </Dialog>
  );
}

export default React.memo(ResponsiveDialog)
