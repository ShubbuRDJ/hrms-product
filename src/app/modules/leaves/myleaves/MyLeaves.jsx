import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './my-leaves.scss'
import SearchCustom from '../../../components/search-custom/SearchCustom'
import FilterTableLimit from '../../../components/filter-custom/FilterTableLimit'
import TableCustom from '../../../components/tableCustom/TableCustom'
import PaginationCustom from '../../../components/pagination/PaginationCustom'
import { useNavigate } from 'react-router-dom'
import LeaveCard from '../../../components/leaves-card/LeaveCard'
import casualLeaveIcon from '../../../../assets/leaves/door.svg';
import earnLeaveIcon from '../../../../assets/leaves/dollar.svg';
import shortLeaveIcon from '../../../../assets/leaves/stopwatch.svg';
import restrictedLeaveIcon from '../../../../assets/leaves/walk.svg';
import compOffLeaveIcon from '../../../../assets/leaves/travel.svg';
import paternityLeaveIcon from '../../../../assets/leaves/father-and-son.svg';
import maternityLeaveIcon from '../../../../assets/leaves/mother.svg';
import PromptCustom from '../../../components/prompt-box/PromptCustom'
import FlipLeaveCard from '../../../components/flipLeaveCard/FlipLeaveCard'
import LeaveCardValidity from '../../../components/leaves-card/LeaveCardValidity'


const tableLimitArr = ['10', '25', '50', '100']


const columns = [
    { id: 'column1', label: 'S No.', minWidth: 100 },
    { id: 'column2', label: 'Leave Type', minWidth: 150 },
    { id: 'column3', label: 'Applied On', minWidth: 150 },
    { id: 'column3', label: 'Leave Duration', minWidth: 100 },
    { id: 'column3', label: 'Final Approval', minWidth: 100 },
];

const dataKey = ['serialNum', 'leave_type', 'applied_on', 'leave_duration', 'final_approval'];


const dummyData = [
    {
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: true,
        },
    },
    {
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: false,
        },
    },
    {
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: false,
        },
    },
    {
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: true,
        },
    },
    {
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: false,
        },
    },
    {
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: true,
        },
    },
    {
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: true,
        },
    },
    {
        leave_type: 'Earned Leave',
        applied_on: '05-Feb-2024',
        leave_duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: false,
        },
    },
]

const MyLeave = () => {
    const navigate = useNavigate();
    const [searchKey, setSearchKey] = useState('');
    const [openConfirmationBox, setOpenConfirmationBox] = useState(false);
    const [promptMsg, setPromptMsg] = useState('');

    const actionKey = [
        {
            actionName: 'view',
            navigateAddress: '/my-leaves/leave-details'
        },
        {
            actionName: 'chat',
        },
        {
            actionName: 'back',
            open: openConfirmationBox,
            setOpen: setOpenConfirmationBox
        },
    ]

    console.log(promptMsg, 'vdsbsifew34')

    console.log(searchKey, 'vdvnfeiwodweidwedo')

    const compOffValidityArray = [
        'One is valid till May,2024',
        'One is valid till May,2024',
    ]
    return (
        <>
            <Grid className='my-leaves-main-container'>

                <Grid className='my-leaves-all-leaves-container'>
                    <LeaveCard
                        leaveType={'Casual Leave (CL)'}
                        leave={2}
                        totalLeave={10}
                        iconColor={'#E7EDFF'}
                        icon={casualLeaveIcon}
                        cardRowLimit={4}
                        cardGap={20}
                    />
                    <LeaveCard
                        leaveType={'Earn Leave (EL)'}
                        leave={2}
                        totalLeave={10}
                        iconColor={'#FFE0EB'}
                        icon={earnLeaveIcon}
                        cardRowLimit={4}
                        cardGap={20}
                    />
                    <LeaveCard
                        leaveType={'Short Leave'}
                        leave={2}
                        totalLeave={10}
                        iconColor={'rgba(21, 101, 192, 0.1)'}
                        icon={shortLeaveIcon}
                        cardRowLimit={4}
                        cardGap={20}
                    />
                    <LeaveCard
                        leaveType={'Restricted Leave'}
                        leave={2}
                        totalLeave={10}
                        iconColor={'#ECFCCB'}
                        icon={restrictedLeaveIcon}
                        cardRowLimit={4}
                        cardGap={20}
                    />
                    <FlipLeaveCard
                        frontComponent={<LeaveCard
                            leaveType={'Complimentary off'}
                            leave={2}
                            totalLeave={10}
                            iconColor={'#D1FAE5'}
                            icon={compOffLeaveIcon}
                        />}
                        backComponent={<LeaveCardValidity itemArray = {compOffValidityArray}/>}
                        cardRowLimit={4}
                        cardGap={20}
                    />
                    <LeaveCard
                        leaveType={'Paternity Leave'}
                        leave={2}
                        totalLeave={10}
                        iconColor={'#F3E8FF'}
                        icon={paternityLeaveIcon}
                        cardRowLimit={4}
                        cardGap={20}
                    />
                    <LeaveCard
                        leaveType={'Maternity Leave'}
                        leave={2}
                        totalLeave={10}
                        iconColor={'#FDF2F8'}
                        icon={maternityLeaveIcon}
                        cardRowLimit={4}
                        cardGap={20}
                    />

                </Grid>

                <Grid className='add-new-employee-btn-container'>
                    <h4>Leaves</h4>
                    <button type="button" onClick={() => navigate('/my-leaves/add-leave')}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z" fill="#C7D2FE" />
                        </svg>
                        <span>Add New</span>
                    </button>
                </Grid>

                <Grid className='employee-management-list-main-container'>
                    <Grid className='list-heading-export-btn-container'>
                        <h4>List All Leave</h4>
                    </Grid>
                    <Grid className='list-heading-export-btn-container'>
                        <Grid className='list-pagination-limit'>
                            <span>Show</span>
                            <Grid className='employee-management-table-limit-filter'>
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

                    <Grid className='employee-management-table-container'>
                        <TableCustom
                            columns={columns}
                            datas={dummyData}
                            dataKey={dataKey}
                            actionKey={actionKey}
                            align="center"
                            tableContainerMaxHeight={330}
                        />
                    </Grid>
                    <Grid className='employee-management-pagination-container'>
                        <p>Showing <span>1</span> to <span>6</span> of <span>6</span> entries</p>
                        <PaginationCustom totalRecords={100} />
                    </Grid>
                </Grid>

            </Grid>

            {
                openConfirmationBox && <PromptCustom heading={'Are you sure to you want to Roll back your leave Request?'} open={openConfirmationBox} setOpen={setOpenConfirmationBox} setPromptMsg={setPromptMsg} />
            }
        </>
    )
}

export default MyLeave