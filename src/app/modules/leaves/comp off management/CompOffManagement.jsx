import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './comp-off.scss'
import SearchCustom from '../../../components/search-custom/SearchCustom'
import FilterTableLimit from '../../../components/filter-custom/FilterTableLimit'
import TableCustom from '../../../components/tableCustom/TableCustom'
import PaginationCustom from '../../../components/pagination/PaginationCustom'
import { useNavigate } from 'react-router-dom'
import ConfirmationDialog from '../../../components/ConfirmationDialog./ConfirmationDialog'


const tableLimitArr = ['10', '25', '50', '100']


const columns = [
    { id: 'column1', label: 'S No.', minWidth: 100 },
    { id: 'column2', label: 'Emp Name', minWidth: 150 },
    { id: 'column3', label: 'No of comp off', minWidth: 150 },
    { id: 'column3', label: ' Remarks', minWidth: 100 },
];

const dataKey = ['serialNum', 'emp_name', 'no_of_comp_off', 'remarks',];



const dummyData = [
    {
        emp_name: 'Akash Gupta',
        no_of_comp_off: '2',
        remarks: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
    },
    {
        emp_name: 'Akash Gupta',
        no_of_comp_off: '2',
        remarks: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
    },
    {
        emp_name: 'Akash Gupta',
        no_of_comp_off: '2',
        remarks: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
    },
    {
        emp_name: 'Akash Gupta',
        no_of_comp_off: '2',
        remarks: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
    },
    {
        emp_name: 'Akash Gupta',
        no_of_comp_off: '2',
        remarks: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
    },
    {
        emp_name: 'Akash Gupta',
        no_of_comp_off: '2',
        remarks: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
    },
    {
        emp_name: 'Akash Gupta',
        no_of_comp_off: '2',
        remarks: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
    },
    {
        emp_name: 'Akash Gupta',
        no_of_comp_off: '2',
        remarks: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula',
    },
]

const CompOffManagement = () => {
    const navigate = useNavigate();
    const [searchKey, setSearchKey] = useState('');
    const [openConfirmationBox, setOpenConfirmationBox] = useState(false);


    const actionKey = [
        {
            actionName: 'edit',
            navigateAddress: '/comp-off-management/edit-comp-off'
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
            <Grid className='organisation-company-policy-main-container'>

                <Grid className='add-new-employee-btn-container'>
                    <h4>Add Comp Off</h4>
                    <button type="button" onClick={() => navigate('/comp-off-management/add-comp-off')}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z" fill="#C7D2FE" />
                        </svg>
                        <span>Add Comp Off</span>
                    </button>
                </Grid>

                <Grid className='organisation-company-policy-list-main-container'>
                    <Grid className='list-heading-export-btn-container'>
                        <h4>List of Comp Off</h4>
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
                openConfirmationBox && <ConfirmationDialog heading={'Are you sure you want to delete ?'} open={openConfirmationBox} setOpen={setOpenConfirmationBox} />
            }
        </>
    )
}

export default CompOffManagement
