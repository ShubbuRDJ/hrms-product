import React from 'react';
import './sidebar.scss';
import { Grid } from '@mui/material';

const Sidebar = () => {
  return (
    <>
      <Grid className='sidebar-container'>
        <Grid className='sidebar-close-arrow'>
          <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.61646 0.540409C5.89259 0.816538 5.89259 1.26423 5.61646 1.54036L1.87401 5.28281L5.61646 9.02526C5.89259 9.30139 5.89259 9.74908 5.61646 10.0252C5.34033 10.3013 4.89264 10.3013 4.61651 10.0252L0.374088 5.78278C0.0979601 5.50665 0.0979601 5.05896 0.374088 4.78283L4.61651 0.540409C4.89264 0.264281 5.34033 0.264281 5.61646 0.540409Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9797 0.540409C12.2559 0.816538 12.2559 1.26423 11.9797 1.54036L8.23729 5.28281L11.9797 9.02526C12.2559 9.30139 12.2559 9.74908 11.9797 10.0252C11.7036 10.3013 11.2559 10.3013 10.9798 10.0252L6.73737 5.78278C6.46124 5.50665 6.46124 5.05896 6.73737 4.78283L10.9798 0.540409C11.2559 0.264281 11.7036 0.264281 11.9797 0.540409Z" fill="black" />
          </svg>

        </Grid>
      </Grid>
    </>
  )
}

export default Sidebar
