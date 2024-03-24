import React from 'react';
import './shift.scss';
import { Grid } from '@mui/material';

const Shift = () => {
  return (
    <>
      <Grid className='profile-shift-container'>
        <h4>Shift details</h4>
        <Grid className='profile-shift-list-container'>
            <Grid className='profile-shift-list-item'>
                <p>Date of Joining</p>
                <h3>Feb 18, 2001</h3>
            </Grid>
            <Grid className='profile-shift-list-item'>
                <p>Office Shift</p>
                <h3>Day Shift</h3>
            </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Shift
