import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './company-policy.scss'
import SearchCustom from '../../../components/search-custom/SearchCustom'
import FilterTableLimit from '../../../components/filter-custom/FilterTableLimit'
import TableCustom from '../../../components/tableCustom/TableCustom'
import PaginationCustom from '../../../components/pagination/PaginationCustom'
import { useNavigate } from 'react-router-dom'
import ResponsiveDialog from '../../../components/dialog_box/ResponsiveDialog'


const tableLimitArr = ['10', '25', '50', '100']


const columns = [
    { id: 'column1', label: 'S No.', minWidth: 100 },
    { id: 'column2', label: 'Title', minWidth: 150 },
    { id: 'column3', label: 'Created At', minWidth: 150 },
    { id: 'column3', label: 'Added By', minWidth: 100 },
];

const dataKey = ['serialNum', 'title', 'created_at', 'added_by',];



const dummyData = [
    {
        title: 'VP Technology',
        created_at: '10/March/2024',
        added_by: 'Superadmin',
    },
    {
        title: 'VP Technology',
        created_at: '10/March/2024',
        added_by: 'Superadmin',
    },
    {
        title: 'VP Technology',
        created_at: '10/March/2024',
        added_by: 'Superadmin',
    },
    {
        title: 'VP Technology',
        created_at: '10/March/2024',
        added_by: 'Superadmin',
    },
    {
        title: 'VP Technology',
        created_at: '10/March/2024',
        added_by: 'Superadmin',
    },
    {
        title: 'VP Technology',
        created_at: '10/March/2024',
        added_by: 'Superadmin',
    },
    {
        title: 'VP Technology',
        created_at: '10/March/2024',
        added_by: 'Superadmin',
    },
    {
        title: 'VP Technology',
        created_at: '10/March/2024',
        added_by: 'Superadmin',
    },
]

const dialogArrayData = [
    {
        heading:'Title',
        content:'Leave Policy',
    },
    {
        heading:'Policy Details',
    },
]

const CompanyPolicy = () => {
    const navigate = useNavigate();
    const [openViewPolicy, setOpenViewPolicy] = useState(false);
    const [openViewPolicyCallback, setOpenViewPolicyCallback] = useState('');
    const [searchKey, setSearchKey] = useState('');


    const actionKey = [
        {
            actionName: 'view',
            open: openViewPolicy,
            setOpen: setOpenViewPolicy,
            setCallback:setOpenViewPolicyCallback,
        },
        {
            actionName: 'edit',
            navigateAddress: '/company-policy/edit-company-policy'
        },
        {
            actionName: 'delete'
        },
    ]

    console.log(searchKey,openViewPolicyCallback, 'vdvnfeiwodweidwedo')
    return (
        <>
            <Grid className='organisation-company-policy-main-container'>

                <Grid className='add-new-employee-btn-container'>
                    <h4>Add New Policy</h4>
                    <button type="button" onClick={() => navigate('/company-policy/add-company-policy')}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z" fill="#C7D2FE" />
                        </svg>
                        <span>Add New</span>
                    </button>
                </Grid>

                <Grid className='organisation-company-policy-list-main-container'>
                    <Grid className='list-heading-export-btn-container'>
                        <h4>List of all Policies</h4>
                    </Grid>
                    <Grid className='list-heading-export-btn-container'>
                        <Grid className='list-pagination-limit'>
                            <span>Show</span>
                            <Grid className='organisation-company-policy-table-limit-filter'>
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

                    <Grid className='organisation-company-policy-table-container'>
                        <TableCustom
                            columns={columns}
                            datas={dummyData}
                            dataKey={dataKey}
                            actionKey={actionKey}
                            align="center"
                            tableContainerMaxHeight={385}
                        />
                    </Grid>
                    <Grid className='organisation-company-policy-pagination-container'>
                        <p>Showing <span>1</span> to <span>6</span> of <span>6</span> entries</p>
                        <PaginationCustom totalRecords={100} />
                    </Grid>
                </Grid>

            </Grid>

            {
                openViewPolicy && <ResponsiveDialog open={openViewPolicy} setOpen={setOpenViewPolicy} heading={'List All Policies'} dialogArray={dialogArrayData} />
            }
        </>
    )
}

export default CompanyPolicy
