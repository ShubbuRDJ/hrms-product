import React from 'react';
import './profile-picture.scss';
import { Grid } from '@mui/material';

const ProfilePicture = () => {
  return (
    <>
      <Grid className='profile-picture-container'>
        <h4>Profile Picture</h4>

        <Grid className='profile-picture-main-container'>
            <Grid className='profile-picture-img'>
                <img src="https://picsum.photos/id/237/200/300" alt="user-pic" />
            </Grid>
            <Grid className='profile-picture-button-container'>
                <button type="button">Choose a new Profile Picture</button>
                <button className='remove-profile-picture-button' type="button">Remove Profile Picture</button>
            </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ProfilePicture
