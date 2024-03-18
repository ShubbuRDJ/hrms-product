import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';

export default function DatePickerCustom({handleChange,value,name,id }) {

  const formatDate = (date) =>{
    const originalDate = new Date(date);
    const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
    const day = originalDate.getDate().toString().padStart(2, '0');
    const year = originalDate.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <Grid className='date-picker-custom'>
        {value?<DatePicker
          value={dayjs(value)}
          onChange={(value) => handleChange(name, formatDate(new Date(value)), true)}
          slotProps={{ textField: { placeholder: 'Choose Date',name:{name} } }}/>:<DatePicker
          onChange={(value) => handleChange(name, formatDate(new Date(value)), true)}
          slotProps={{ textField: { placeholder: 'Choose Date',name:{name},id:{id} } }}/>}
      </Grid>
    </LocalizationProvider>
  );
}