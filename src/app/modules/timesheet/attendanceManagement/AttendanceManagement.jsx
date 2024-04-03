import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './attendance-management.scss'
import FilterCustom from '../../../components/filter-custom/FilterCustom'
import SearchCustom from '../../../components/search-custom/SearchCustom'
import FilterTableLimit from '../../../components/filter-custom/FilterTableLimit'
import TableCustom from '../../../components/tableCustom/TableCustom'
import PaginationCustom from '../../../components/pagination/PaginationCustom'
import { useNavigate } from 'react-router-dom'
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom'


const tableLimitArr = ['10', '25', '50', '100']


const columns = [
    { id: 'column1', label: 'S No.', minWidth: 100 },
    { id: 'column2', label: 'Employee', minWidth: 150 },
    { id: 'column3', label: 'Mode Of Work', minWidth: 150 },
    { id: 'column3', label: 'Date', minWidth: 100 },
    { id: 'column3', label: 'Clock In', minWidth: 100 },
    { id: 'column3', label: 'Clock Out', minWidth: 100 },
    { id: 'column3', label: 'Total Work', minWidth: 100 },
];

const dataKey = ['serialNum', 'employee','mode_of_work','date', 'clock_in', 'clock_out', 'total_work',];

const actionKey = [
    {
        actionName: 'edit',
        // navigateAddress: '/employee-management/edit-employee'
    },
    {
        actionName: 'delete'
    },
]

const dummyData = [
    {
        employee: 'Rohan Panwar',
        mode_of_work: 'Work From Home ',
        date: 'Jan 10, 2024',
        clock_in: null,
        clock_out: null,
        total_work: '00:00',
    },
    {
        employee: 'Rohan Panwar',
        mode_of_work: 'Work From Home ',
        date: 'Jan 10, 2024',
        clock_in: null,
        clock_out: null,
        total_work: '00:00',
    },
    {
        employee: 'Rohan Panwar',
        mode_of_work: 'Work From Home ',
        date: 'Jan 10, 2024',
        clock_in: null,
        clock_out: null,
        total_work: '00:00',
    },
    {
        employee: 'Rohan Panwar',
        mode_of_work: 'Work From Home ',
        date: 'Jan 10, 2024',
        clock_in: null,
        clock_out: null,
        total_work: '00:00',
    },
    {
        employee: 'Rohan Panwar',
        mode_of_work: 'Work From Home ',
        date: 'Jan 10, 2024',
        clock_in: null,
        clock_out: null,
        total_work: '00:00',
    },
    {
        employee: 'Rohan Panwar',
        mode_of_work: 'Work From Home ',
        date: 'Jan 10, 2024',
        clock_in: null,
        clock_out: null,
        total_work: '00:00',
    },
    {
        employee: 'Rohan Panwar',
        mode_of_work: 'Work From Home ',
        date: 'Jan 10, 2024',
        clock_in: null,
        clock_out: null,
        total_work: '00:00',
    },
    {
        employee: 'Rohan Panwar',
        mode_of_work: 'Work From Home ',
        date: 'Jan 10, 2024',
        clock_in: null,
        clock_out: null,
        total_work: '00:00',
    },
]

const AttendanceManagement = () => {
    const navigate = useNavigate();
    const [locationFilter, setLocationFilter] = useState('');
    const [searchKey, setSearchKey] = useState('');

    console.log(searchKey, 'vdvnfeiwodweidwedo')
    return (
        <>
            <Grid className='timesheet-attendance-management-main-container'>

                <Grid className='timesheet-attendance-management-list-main-container'>
                    <Grid className='add-new-employee-btn-container'>
                        <h4>Add New Attendance</h4>
                        <button type="button" onClick={() => navigate('/attendance-management/add-attendance')}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.8" d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z" fill="#C7D2FE" />
                            </svg>
                            <span>Add New</span>
                        </button>

                    </Grid>

                    <Grid className='list-heading-export-btn-container' style={{ height: 'unset', flexDirection: 'column', alignItems: 'flex-start', gap: '30px' }} >
                        <Grid className='add-new-employee-filter-wrapper'>
                            <Grid className='add-new-employee-filter'>
                                <p>From Date</p>
                                <DatePickerCustom
                                    placeholder={'Select Date'}
                                    name={'dob'}
                                    id={'attendance-management-date'}
                                />
                            </Grid>

                            <Grid className='add-new-employee-filter'>
                                <p>To Date</p>
                                <DatePickerCustom
                                    placeholder={'Select Date'}
                                    name={'dob'}
                                    id={'attendance-management-date'}
                                />
                            </Grid>

                            <Grid className='add-new-employee-filter'>
                                <p>Select Employee</p>
                                <FilterCustom
                                    label={'Select Employee'}
                                    filterKey={locationFilter}
                                    setFilterKey={setLocationFilter}
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
                            <Grid className='timesheet-attendance-management-table-limit-filter'>
                                <FilterTableLimit
                                    filterListArray={tableLimitArr}
                                    filterKeysArray={tableLimitArr}
                                    label={'Select'}
                                />
                            </Grid>
                            <span>Entries</span>
                        </Grid>
                        <Grid className='list-search-box-and-export'>
                            <Grid className='list-search-box'>
                                <SearchCustom setSearchKey={setSearchKey} />
                            </Grid>
                            <button type="button">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1019 4.11391L7.44021 1.83272C7.31594 1.72378 7.15906 1.66805 7.00136 1.66797C6.89345 1.66791 6.78515 1.69391 6.68666 1.74675C6.64276 1.77023 6.60106 1.79892 6.5625 1.83272L3.90081 4.11391C3.62125 4.35351 3.58885 4.77437 3.82845 5.05394C4.06805 5.3335 4.48892 5.3659 4.76848 5.1263L6.33464 3.78402V8.94712C6.33464 9.31531 6.63312 9.61378 7.00131 9.61378C7.3695 9.61378 7.66798 9.31531 7.66798 8.94712L7.66798 3.78395L9.23423 5.1263C9.51379 5.3659 9.93466 5.3335 10.1743 5.05394C10.4139 4.77437 10.3815 4.35351 10.1019 4.11391ZM3.0013 8.33464C3.0013 7.96645 3.29978 7.66797 3.66797 7.66797H4.66797C5.03616 7.66797 5.33464 7.36949 5.33464 7.0013C5.33464 6.63311 5.03616 6.33464 4.66797 6.33464H3.66797C2.5634 6.33464 1.66797 7.23007 1.66797 8.33464V10.3346C1.66797 11.4392 2.5634 12.3346 3.66797 12.3346H10.3346C11.4392 12.3346 12.3346 11.4392 12.3346 10.3346V8.33464C12.3346 7.23007 11.4392 6.33464 10.3346 6.33464H9.33464C8.96645 6.33464 8.66797 6.63311 8.66797 7.0013C8.66797 7.36949 8.96645 7.66797 9.33464 7.66797H10.3346C10.7028 7.66797 11.0013 7.96645 11.0013 8.33464V10.3346C11.0013 10.7028 10.7028 11.0013 10.3346 11.0013H3.66797C3.29978 11.0013 3.0013 10.7028 3.0013 10.3346V8.33464Z" fill="#0F3659" />
                                </svg>
                                <span>Export</span>
                            </button>
                        </Grid>
                    </Grid>

                    <Grid className='timesheet-attendance-management-table-container'>
                        <TableCustom
                            columns={columns}
                            datas={dummyData}
                            dataKey={dataKey}
                            align="center"
                            actionKey={actionKey}
                            tableContainerMaxHeight={385}
                        />
                    </Grid>
                    <Grid className='timesheet-attendance-management-pagination-container'>
                        <p>Showing <span>1</span> to <span>6</span> of <span>6</span> entries</p>
                        <PaginationCustom totalRecords={100} />
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default AttendanceManagement
