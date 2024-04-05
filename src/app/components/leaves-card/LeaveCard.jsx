import React from 'react';
import './leaves-card.scss';
import { Grid } from '@mui/material';

const LeaveCard = ({leaveType,leave,totalLeave,iconColor,icon,cardRowLimit,cardGap}) => {
  return (
    <>
      <Grid className='leaves-card-container' style={{width:`calc((100% - ${cardGap*(cardRowLimit-1)}px)/${cardRowLimit})`}}>
        <Grid className='leaves-card-icon-container' style={{backgroundColor:`${iconColor}`}}>
            <img src={icon} alt="icon" />
        </Grid>
        <Grid className='leaves-card-text'>
            <h4>{leaveType}</h4>
            <p><span>{leave}</span>/<span>{totalLeave}</span></p>
        </Grid>

      </Grid>
    </>
  )
}

export default LeaveCard
