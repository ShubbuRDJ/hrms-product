import React from 'react'
import './leave-progress.scss';
import { Grid } from '@mui/material';

const LeaveProgress = ({bgColor,progressBg,progress,leaveType,leave,totalLeave}) => {
  return (
    <>
      <Grid className='leave-progress-container'>
        <Grid className='leave-progress-text' style={{backgroundColor:`${bgColor}`}}>
            <p style={{fontSize:'16px'}}><span style={{fontWeight:'400',fontSize:'16px'}}>{leave}</span>/<span style={{fontSize:'16px'}}>{totalLeave}</span></p>
            <p>{leaveType}</p>
            <span><span>{totalLeave - leave}</span> Left</span>
        </Grid>
        <Grid className='leave-progress-progress-bar'>
            <Grid className='leave-progress-progress' style={{borderBottomRightRadius:`${progress===100?'8px':'0px'}`,width:`${progress}%`,backgroundColor:`${progressBg}`}}>
            </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default LeaveProgress
