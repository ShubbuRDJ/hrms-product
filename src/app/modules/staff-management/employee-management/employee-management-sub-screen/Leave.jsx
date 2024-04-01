import { Grid } from '@mui/material';
import React from 'react';
import './leave.scss';
import LeaveProgress from '../../../../components/Leave-progress/LeaveProgress';

const Leave = () => {
  return (
    <>
      <Grid className='leave-container'>
        <Grid className='leave-heading'>
            <h4>Leave</h4>
        </Grid>
        <Grid className='leave-list-heading'>
            <Grid className='leave-list-heading-first-col'>
                <h4>S No.</h4>
            </Grid>
            <Grid className='leave-list-heading-second-col'>
                <h4>Leave Type</h4>
            </Grid>
        </Grid>

        <Grid className='leave-list-items-container'>
            <Grid className='leave-list-sl-no-container'>
                <Grid className='leave-list-sl-no'>
                    <p>1</p>
                </Grid>
                <Grid className='leave-list-sl-no'>
                    <p>2</p>
                </Grid>
                <Grid className='leave-list-sl-no'>
                    <p>3</p>
                </Grid>
                <Grid className='leave-list-sl-no'>
                    <p>4</p>
                </Grid>
                <Grid className='leave-list-sl-no'>
                    <p>5</p>
                </Grid>
                <Grid className='leave-list-sl-no'>
                    <p>6</p>
                </Grid>
                <Grid className='leave-list-sl-no'>
                    <p>7</p>
                </Grid>
            </Grid>
            <Grid className='leave-list-items'>
                <LeaveProgress progress={70} leaveType={'Causal Leave(CL)'} leave={3} totalLeave={9} progressBg={'#396AFF'} bgColor={'rgba(0, 123, 255, 0.1)'} />
                <LeaveProgress progress={70} leaveType={'Earned Leave'} leave={3} totalLeave={9} progressBg={'#FF82AC'} bgColor={'rgba(255, 130, 172, 0.1)'} />
                <LeaveProgress progress={70} leaveType={'Maternity Leave'} leave={3} totalLeave={9} progressBg={'#EC4899'} bgColor={'rgba(236, 72, 153, 0.1)'} />
                <LeaveProgress progress={70} leaveType={'Short Leave'} leave={3} totalLeave={9} progressBg={'#1565C0'} bgColor={'rgba(21, 101, 192, 0.1)'} />
                <LeaveProgress progress={70} leaveType={'Paternity Leave'} leave={3} totalLeave={9} progressBg={'#9333EA'} bgColor={'rgba(147, 51, 234, 0.1)'} />
                <LeaveProgress progress={70} leaveType={'Comp Off'} leave={3} totalLeave={9} progressBg={'#059669'} bgColor={'rgba(5, 150, 105, 0.1)'} />
                <LeaveProgress progress={70} leaveType={'Leave Without Pay'} leave={3} totalLeave={9} progressBg={'#FF0000'} bgColor={'rgba(255, 0, 0, 0.1)'} />
            </Grid>
        </Grid>
        
      </Grid>
    </>
  )
}

export default Leave
