import React from 'react';
import './leave-card-validity.scss';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

const LeaveCardValidity = ({itemArray}) => {
  return (
    <>
      <Grid className='leave-card-validity-container'>
        <Grid className='leave-card-validity-items'>
            {
                itemArray?.map((item,index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            }
        </Grid>
      </Grid>
    </>
  )
}

LeaveCardValidity.propTypes = {
  itemArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LeaveCardValidity
