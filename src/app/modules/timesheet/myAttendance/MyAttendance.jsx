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

                    <Grid className='list-heading-export-btn-container' style={{ border: 'none' }}>
                        <h4>My Attendance</h4>
                    </Grid>

                    <Grid className='add-new-employee-filter-container' style={{ marginTop: '-15px' }}>
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
