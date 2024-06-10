import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './leaves-to-approve.scss'
import FilterCustom from '../../../components/filter-custom/FilterCustom'
import SearchCustom from '../../../components/search-custom/SearchCustom'
import FilterTableLimit from '../../../components/filter-custom/FilterTableLimit'
import TableCustom from '../../../components/tableCustom/TableCustom'
import PaginationCustom from '../../../components/pagination/PaginationCustom'
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom'


const tableLimitArr = ['10', '25', '50', '100']


const columns = [
    { id: 'column1', label: 'S No.', minWidth: 100 },
    { id: 'column2', label: 'Employee Name', minWidth: 150 },
    { id: 'column3', label: 'Leave Type', minWidth: 150 },
    { id: 'column3', label: 'Applied On', minWidth: 100 },
    { id: 'column3', label: 'Leave Duration', minWidth: 100 },
    { id: 'column3', label: 'Final Approval', minWidth: 100 },
];

const dataKey = ['serialNum', 'emp_name', 'leave_type', 'applied_on', 'leave_duration', 'final_approval'];

const actionKey = [
    {
        actionName: 'view',
        navigateAddress: '/leaves-to-approve/leave-details'
    },
    {
        actionName: 'chat'
    },
]


const dummyData = [
    {
        emp_name: 'Prabhash Mishra',
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: true,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: false,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: false,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: true,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: false,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: false,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: true,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: true,
        },
    },
]

const LeavesToApprove = () => {
    const [locationFilter, setLocationFilter] = useState('');
    const [searchKey, setSearchKey] = useState('');
    const [tableFilterKey, setTableFilterKey] = useState('');

    console.log(searchKey, 'vdvnfeiwodweidwedo')
    return (
        <>
            <Grid className='leave-to-approve-main-container'>

                <Grid className='leave-to-approve-list-main-container'>

                    <Grid className='list-heading-export-btn-container' style={{ border: 'none' }}>
                        <h4>Leaves to Approve</h4>
                    </Grid>

                    <Grid className='add-new-employee-filter-container' style={{ marginTop: '-15px' }}>
                        <Grid className='add-new-employee-filter-wrapper'>
                            <Grid className='add-new-employee-filter'>
                                <p>Leave Type</p>
                                <FilterCustom
                                    label={'Leave Type'}
                                    filterKey={locationFilter}
                                    setFilterKey={setLocationFilter}
                                />
                            </Grid>

                            <Grid className='add-new-employee-filter'>
                                <p>Start Date</p>
                                <DatePickerCustom
                                    placeholder={'Start Date'}
                                />
                            </Grid>

                            <Grid className='add-new-employee-filter'>
                                <p>End Date</p>
                                <DatePickerCustom
                                    placeholder={'End Date'}
                                />
                            </Grid>

                            <Grid className='add-new-employee-filter'>
                                <p>Leave Status</p>
                                <FilterCustom
                                    label={'Leave Status'}
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
                            <Grid className='leave-to-approve-table-limit-filter'>
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
                        <Grid className='list-search-box'>
                            <SearchCustom setSearchKey={setSearchKey} />
                        </Grid>
                    </Grid>

                    <Grid className='leave-to-approve-table-container'>
                        <TableCustom
                            columns={columns}
                            datas={dummyData}
                            dataKey={dataKey}
                            actionKey={actionKey}
                            align="center"
                            tableContainerMaxHeight={385}
                        />
                    </Grid>
                    <Grid className='leave-to-approve-pagination-container'>
                        <p>Showing <span>1</span> to <span>6</span> of <span>6</span> entries</p>
                        <PaginationCustom totalRecords={100} />
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default LeavesToApprove
