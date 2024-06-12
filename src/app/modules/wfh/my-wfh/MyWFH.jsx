import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './my-wfh.scss'
import FilterTableLimit from '../../../components/filter-custom/FilterTableLimit'
import TableCustom from '../../../components/tableCustom/TableCustom'
import PaginationCustom from '../../../components/pagination/PaginationCustom'
import { useNavigate } from 'react-router-dom'
import PromptCustom from '../../../components/prompt-box/PromptCustom'
import routerConstants from '../../../../constants/routerConstants'


const tableLimitArr = ['10', '25', '50', '100']


const columns = [
    { id: 'column1', label: 'S No.', minWidth: 100 },
    { id: 'column2', label: 'Duration', minWidth: 280 },
    { id: 'column3', label: 'Requested on', minWidth: 150 },
    { id: 'column3', label: 'Description', minWidth: 280 },
    { id: 'column3', label: 'Final Approval', minWidth: 100 },
];

const dataKey = ['serialNum', 'duration', 'requested_on', 'description', 'final_approval'];



const dummyData = [
    {
        description: 'Loreum Ipsome text editor text editortext',
        requested_on: '05-Feb-2024',
        duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: true,
        },
    },
    {
        description: 'Loreum Ipsome text editor text editortext',
        requested_on: '05-Feb-2024',
        duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: false,
        },
    },
    {
        description: 'Loreum Ipsome text editor text editortext',
        requested_on: '05-Feb-2024',
        duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: false,
        },
    },
    {
        description: 'Loreum Ipsome text editor text editortext',
        requested_on: '05-Feb-2024',
        duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: false,
        },
    },
    {
        description: 'Loreum Ipsome text editor text editortext',
        requested_on: '05-Feb-2024',
        duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: false,
        },
    },
    {
        description: 'Loreum Ipsome text editor text editortext',
        requested_on: '05-Feb-2024',
        duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: true,
        },
    },
    {
        description: 'Loreum Ipsome text editor text editortext',
        requested_on: '05-Feb-2024',
        duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: false,
            hr: false,
            rollback: true,
        },
    },
    {
        description: 'Loreum Ipsome text editor text editortext',
        requested_on: '05-Feb-2024',
        duration: '05-Feb-2024 - 05-Feb-2024',
        final_approval: {
            am: true,
            hr: false,
            rollback: false,
        },
    },
]

const MyWFH = () => {
    const navigate = useNavigate();
    const [openConfirmationBox, setOpenConfirmationBox] = useState(false);
    const [promptMsg, setPromptMsg] = useState('');
    const [tableFilterKey, setTableFilterKey] = useState('');


    const actionKey = [
        {
            actionName: 'view',
            navigateAddress: `/${routerConstants?.myWfhRoute}/${routerConstants?.viewWfhDetailsRoute}`
        },
        {
            actionName: 'chat'
        },
        {
            actionName: 'back',
            open: openConfirmationBox,
            setOpen: setOpenConfirmationBox
        },
    ]

    console.log(promptMsg);
    return (
        <>
            <Grid className='my-wfh-main-container'>

                <Grid className='add-new-employee-btn-container'>
                    <h4>Add Work From Home</h4>
                    <button type="button" onClick={() => navigate(`${routerConstants?.addWfhRoute}`)}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z" fill="#C7D2FE" />
                        </svg>
                        <span>Add New</span>
                    </button>
                </Grid>

                <Grid className='my-wfh-list-main-container'>
                    <Grid className='list-heading-export-btn-container'>
                        <h4>List of all Work from Home Requests</h4>
                    </Grid>
                    <Grid className='list-heading-export-btn-container'>
                        <Grid className='list-pagination-limit'>
                            <span>Show</span>
                            <Grid className='my-wfh-table-limit-filter'>
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

                    <Grid className='my-wfh-table-container'>
                        <TableCustom
                            columns={columns}
                            datas={dummyData}
                            dataKey={dataKey}
                            actionKey={actionKey}
                            align="center"
                            tableContainerMaxHeight={385}
                        />
                    </Grid>
                    <Grid className='my-wfh-pagination-container'>
                        <p>Showing <span>1</span> to <span>6</span> of <span>6</span> entries</p>
                        <PaginationCustom totalRecords={100} />
                    </Grid>
                </Grid>

            </Grid>
            {
                openConfirmationBox && <PromptCustom
                    heading={'Are you sure to you want to Roll back your WFH Request?'}
                    open={openConfirmationBox}
                    setOpen={setOpenConfirmationBox}
                    setPromptMsg={setPromptMsg}
                />
            }
        </>
    )
}

export default MyWFH
