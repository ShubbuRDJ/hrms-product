import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './wfh-approve.scss'
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
    { id: 'column3', label: 'Applied On', minWidth: 150 },
    { id: 'column3', label: 'Work From Home Duration', minWidth: 100 },
    { id: 'column3', label: 'Work From Home Final Approval', minWidth: 100 },
];

const dataKey = ['serialNum', 'emp_name', 'applied_on', 'wfh_duration', 'final_approval'];

const actionKey = [
    {
        actionName: 'view',
        navigateAddress: '/wfh-to-approve/view-wfh-details'
    },
    {
        actionName: 'chat'
    },
]


const dummyData = [
    {
        emp_name: 'Prabhash Mishra',
        applied_on: '05-Feb-2024',
        wfh_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: false,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        applied_on: '05-Feb-2024',
        wfh_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: true,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        applied_on: '05-Feb-2024',
        wfh_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: false,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        applied_on: '05-Feb-2024',
        wfh_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: false,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        applied_on: '05-Feb-2024',
        wfh_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: true,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        applied_on: '05-Feb-2024',
        wfh_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: false,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        applied_on: '05-Feb-2024',
        wfh_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: true,
        },
    },
    {
        emp_name: 'Prabhash Mishra',
        applied_on: '05-Feb-2024',
        wfh_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: true,
        },
    },
]

const WFHApprove = () => {
    const [locationFilter, setLocationFilter] = useState('');
    const [searchKey, setSearchKey] = useState('');

    console.log(searchKey, 'vdvnfeiwodweidwedo')
    return (
        <>
            <Grid className='wfh-to-approve-main-container'>

                <Grid className='wfh-to-approve-list-main-container'>

                    <Grid className='list-heading-export-btn-container' style={{ border: 'none' }}>
                        <h4>Work From Home to Approve</h4>
                    </Grid>

                    <Grid className='add-new-employee-filter-container' style={{ marginTop: '-15px' }}>
                        <Grid className='add-new-employee-filter-wrapper'>
                            
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
                                <p>Approval Status</p>
                                <FilterCustom
                                    label={'Approval Status'}
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
                            <Grid className='wfh-to-approve-table-limit-filter'>
                                <FilterTableLimit
                                    filterListArray={tableLimitArr}
                                    filterKeysArray={tableLimitArr}
                                    label={'Select'}
                                />
                            </Grid>
                            <span>Entries</span>
                        </Grid>
                        <Grid className='list-search-box'>
                            <SearchCustom setSearchKey={setSearchKey} />
                        </Grid>
                    </Grid>

                    <Grid className='wfh-to-approve-table-container'>
                        <TableCustom
                            columns={columns}
                            datas={dummyData}
                            dataKey={dataKey}
                            actionKey={actionKey}
                            align="center"
                            tableContainerMaxHeight={385}
                        />
                    </Grid>
                    <Grid className='wfh-to-approve-pagination-container'>
                        <p>Showing <span>1</span> to <span>6</span> of <span>6</span> entries</p>
                        <PaginationCustom totalRecords={100} />
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default WFHApprove
