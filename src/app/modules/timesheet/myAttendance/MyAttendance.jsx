import { Grid } from '@mui/material'
// import React, { useState } from 'react'
import './my-attendance.scss'
// import SearchCustom from '../../../components/search-custom/SearchCustom'
import FilterTableLimit from '../../../components/filter-custom/FilterTableLimit'
import TableCustom from '../../../components/tableCustom/TableCustom'
import PaginationCustom from '../../../components/pagination/PaginationCustom'
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom'
import { useState } from 'react'


const tableLimitArr = ['10', '25', '50', '100']


const columns = [
    { id: 'column1', label: 'S No.', minWidth: 100 },
    { id: 'column2', label: 'Date', minWidth: 150 },
    { id: 'column3', label: 'Clock In', minWidth: 150 },
    { id: 'column3', label: 'Clock Out', minWidth: 100 },
    { id: 'column3', label: 'Gross Time', minWidth: 100 },
    { id: 'column3', label: 'Punch Location', minWidth: 100 },
];

const dataKey = ['serialNum', 'date', 'clock_in', 'clock_out', 'gross_time', 'punch_location',];



const dummyData = [
    {
        date: 'May 01, 2023',
        clock_in: '10:00 AM',
        clock_out: '07:00 PM',
        gross_time: '9 Hours',
        punch_location: 'Appventurez',
    },
    {
        date: 'May 01, 2023',
        clock_in: '10:00 AM',
        clock_out: '07:00 PM',
        gross_time: '9 Hours',
        punch_location: 'Appventurez',
    },
    {
        date: 'May 01, 2023',
        clock_in: '10:00 AM',
        clock_out: '07:00 PM',
        gross_time: '9 Hours',
        punch_location: 'Appventurez',
    },
    {
        date: 'May 01, 2023',
        clock_in: '10:00 AM',
        clock_out: '07:00 PM',
        gross_time: '9 Hours',
        punch_location: 'Appventurez',
    },
    {
        date: 'May 01, 2023',
        clock_in: '10:00 AM',
        clock_out: '07:00 PM',
        gross_time: '9 Hours',
        punch_location: 'Appventurez',
    },
    {
        date: 'May 01, 2023',
        clock_in: '10:00 AM',
        clock_out: '07:00 PM',
        gross_time: '9 Hours',
        punch_location: 'Appventurez',
    },
    {
        date: 'May 01, 2023',
        clock_in: '10:00 AM',
        clock_out: '07:00 PM',
        gross_time: '9 Hours',
        punch_location: 'Appventurez',
    },
    {
        date: 'May 01, 2023',
        clock_in: '10:00 AM',
        clock_out: '07:00 PM',
        gross_time: '9 Hours',
        punch_location: 'Appventurez',
    },
]

const MyAttendance = () => {
    const [tableFilterKey, setTableFilterKey] = useState('');

    return (
        <>
            <Grid className='timesheet-my-attendance-main-container'>

                <Grid className='timesheet-my-attendance-list-main-container'>
                    <Grid className='add-new-employee-btn-container'>
                        <h4>My Attendance</h4>
                    </Grid>

                    <Grid className='list-heading-export-btn-container' style={{ height: 'unset', flexDirection: 'column', alignItems: 'flex-start', gap: '30px' }} >
                        <Grid className='add-new-employee-filter-wrapper'>
                            <Grid className='add-new-employee-filter'>
                                <p>Start Date</p>
                                <DatePickerCustom
                                    placeholder={'Start Date'}
                                    name={'startDate'}
                                    id={'my-attendance-date'}
                                />
                            </Grid>

                            <Grid className='add-new-employee-filter'>
                                <p>End Date</p>
                                <DatePickerCustom
                                    placeholder={'End Date'}
                                    name={'endDate'}
                                    id={'my-attendance-end-date'}
                                />
                            </Grid>

                            <Grid className='add-new-employee-reset-btn'>
                                <p style={{ visibility: 'hidden' }}>Reset</p>
                                <button type="button">Reset</button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid className='list-heading-export-btn-container'>
                        <Grid className='list-pagination-limit'>
                            <span>Show</span>
                            <Grid className='timesheet-my-attendance-table-limit-filter'>
                                <FilterTableLimit
                                    filterListArray={tableLimitArr}
                                    filterKeysArray={tableLimitArr}
                                    label={'Select'}
                                    setFilterKey={setTableFilterKey}
                                    filterKey={tableFilterKey}
                                />
                            </Grid>
                            <span>Entries</span>
                        </Grid>
                        {/* <Grid className='list-search-box-and-export'>
                            <Grid className='list-search-box'>
                                <SearchCustom setSearchKey={setSearchKey} />
                            </Grid>
                            <button type="button">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1019 4.11391L7.44021 1.83272C7.31594 1.72378 7.15906 1.66805 7.00136 1.66797C6.89345 1.66791 6.78515 1.69391 6.68666 1.74675C6.64276 1.77023 6.60106 1.79892 6.5625 1.83272L3.90081 4.11391C3.62125 4.35351 3.58885 4.77437 3.82845 5.05394C4.06805 5.3335 4.48892 5.3659 4.76848 5.1263L6.33464 3.78402V8.94712C6.33464 9.31531 6.63312 9.61378 7.00131 9.61378C7.3695 9.61378 7.66798 9.31531 7.66798 8.94712L7.66798 3.78395L9.23423 5.1263C9.51379 5.3659 9.93466 5.3335 10.1743 5.05394C10.4139 4.77437 10.3815 4.35351 10.1019 4.11391ZM3.0013 8.33464C3.0013 7.96645 3.29978 7.66797 3.66797 7.66797H4.66797C5.03616 7.66797 5.33464 7.36949 5.33464 7.0013C5.33464 6.63311 5.03616 6.33464 4.66797 6.33464H3.66797C2.5634 6.33464 1.66797 7.23007 1.66797 8.33464V10.3346C1.66797 11.4392 2.5634 12.3346 3.66797 12.3346H10.3346C11.4392 12.3346 12.3346 11.4392 12.3346 10.3346V8.33464C12.3346 7.23007 11.4392 6.33464 10.3346 6.33464H9.33464C8.96645 6.33464 8.66797 6.63311 8.66797 7.0013C8.66797 7.36949 8.96645 7.66797 9.33464 7.66797H10.3346C10.7028 7.66797 11.0013 7.96645 11.0013 8.33464V10.3346C11.0013 10.7028 10.7028 11.0013 10.3346 11.0013H3.66797C3.29978 11.0013 3.0013 10.7028 3.0013 10.3346V8.33464Z" fill="#0F3659" />
                                </svg>
                                <span>Export</span>
                            </button>
                        </Grid> */}
                    </Grid>

                    <Grid className='timesheet-my-attendance-table-container'>
                        <TableCustom
                            columns={columns}
                            datas={dummyData}
                            dataKey={dataKey}
                            align="center"
                            tableContainerMaxHeight={385}
                        />
                    </Grid>
                    <Grid className='timesheet-my-attendance-pagination-container'>
                        <p>Showing <span>1</span> to <span>6</span> of <span>6</span> entries</p>
                        <PaginationCustom totalRecords={100} />
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default MyAttendance
