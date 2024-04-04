import React from 'react';
import './time-picker-custom.scss';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TimePickerCustom = ({ placeholder, name, id }) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    ampm={false}
                    closeOnSelect={false}
                    slotProps={{ textField: { placeholder: `${placeholder}`, name: { name }, id: { id } } }}
                    slots={{ openPickerIcon: TimePickerCustomIcon }}
                    // PopperProps={{ style: { width: 'fit-content', maxHeight: 'none' } }}
                />
            </LocalizationProvider>
        </>
    )
}

export default TimePickerCustom

const TimePickerCustomIcon = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 0C3.1402 0 0 3.1402 0 7C0 10.8598 3.1402 14 7 14C10.8598 14 14 10.8598 14 7C14 3.1402 10.8598 0 7 0ZM7 12.6C3.9123 12.6 1.4 10.0877 1.4 7C1.4 3.9123 3.9123 1.4 7 1.4C10.0877 1.4 12.6 3.9123 12.6 7C12.6 10.0877 10.0877 12.6 7 12.6Z" fill="#919499" />
            <path d="M7.70078 3.5H6.30078V7.2898L8.60588 9.5949L9.59568 8.6051L7.70078 6.7102V3.5Z" fill="#919499" />
        </svg>
    )
}
