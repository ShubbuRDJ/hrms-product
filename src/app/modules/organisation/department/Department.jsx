import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './department.scss'
import SearchCustom from '../../../components/search-custom/SearchCustom'
import FilterTableLimit from '../../../components/filter-custom/FilterTableLimit'
import TableCustom from '../../../components/tableCustom/TableCustom'
import PaginationCustom from '../../../components/pagination/PaginationCustom'
import { useNavigate } from 'react-router-dom'
import ConfirmationDialog from '../../../components/ConfirmationDialog./ConfirmationDialog'


const tableLimitArr = ['10', '25', '50', '100']


const columns = [
    { id: 'column1', label: 'S No.', minWidth: 100 },
    { id: 'column2', label: 'Department Name', minWidth: 180 },
    { id: 'column3', label: 'Department Head', minWidth: 180 },
    { id: 'column3', label: 'Email ID', minWidth: 100 },
];

const dataKey = ['serialNum', 'department_name', 'department_head', 'email',];

const dummyData = [
    {
        department_name: 'Wordpress',
        department_head: 'Ajit Singh',
        email: 'ajit@yopmail.com',
    },
    {
        department_name: 'Wordpress',
        department_head: 'Ajit Singh',
        email: 'ajit@yopmail.com',
    },
    {
        department_name: 'Wordpress',
        department_head: 'Ajit Singh',
        email: 'ajit@yopmail.com',
    },
    {
        department_name: 'Wordpress',
        department_head: 'Ajit Singh',
        email: 'ajit@yopmail.com',
    },
    {
        department_name: 'Wordpress',
        department_head: 'Ajit Singh',
        email: 'ajit@yopmail.com',
    },
    {
        department_name: 'Wordpress',
        department_head: 'Ajit Singh',
        email: 'ajit@yopmail.com',
    },
    {
        department_name: 'Wordpress',
        department_head: 'Ajit Singh',
        email: 'ajit@yopmail.com',
    },
    {
        department_name: 'Wordpress',
        department_head: 'Ajit Singh',
        email: 'ajit@yopmail.com',
    },
]

const Department = () => {
    const navigate = useNavigate();
    const [searchKey, setSearchKey] = useState('');
    const [tableFilterKey, setTableFilterKey] = useState('');
    const [openConfirmationBox, setOpenConfirmationBox] = useState(false);

    const actionKey = [
        {
            actionName: 'edit',
            navigateAddress: '/department/edit-department'
        },
        {
            actionName: 'delete',
            open: openConfirmationBox,
            setOpen: setOpenConfirmationBox,
        },
    ]

    console.log(searchKey, 'vdvnfeiwodweidwedo')
    return (
        <>
            <Grid className='organisation-department-main-container'>

                <Grid className='add-new-employee-btn-container'>
                    <h4>Add New Department</h4>
                    <button type="button" onClick={() => navigate('/department/add-department')}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z" fill="#C7D2FE" />
                        </svg>
                        <span>Add New</span>
                    </button>
                </Grid>

                <Grid className='organisation-department-list-main-container'>
                    <Grid className='list-heading-export-btn-container'>
                        <h4>List Of All Departments</h4>
                    </Grid>
                    <Grid className='list-heading-export-btn-container'>
                        <Grid className='list-pagination-limit'>
                            <span>Show</span>
                            <Grid className='organisation-department-table-limit-filter'>
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

                    <Grid className='organisation-department-table-container'>
                        <TableCustom
                            columns={columns}
                            datas={dummyData}
                            dataKey={dataKey}
                            actionKey={actionKey}
                            align="center"
                            tableContainerMaxHeight={385}
                        />
                    </Grid>
                    <Grid className='organisation-department-pagination-container'>
                        <p>Showing <span>1</span> to <span>6</span> of <span>6</span> entries</p>
                        <PaginationCustom totalRecords={100} />
                    </Grid>
                </Grid>

            </Grid>

            {
                openConfirmationBox && <ConfirmationDialog heading={'Are you sure you want to delete ?'} open={openConfirmationBox} setOpen={setOpenConfirmationBox} />
            }
        </>
    )
}

export default Department
