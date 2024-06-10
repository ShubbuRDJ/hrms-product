import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './qualification-listing.scss'
import { useNavigate } from 'react-router-dom'
import FilterTableLimit from '../../../../components/filter-custom/FilterTableLimit'
import SearchCustom from '../../../../components/search-custom/SearchCustom'
import PaginationCustom from '../../../../components/pagination/PaginationCustom'
import TableCustom from '../../../../components/tableCustom/TableCustom'
import ConfirmationDialog from '../../../../components/ConfirmationDialog./ConfirmationDialog'


const tableLimitArr = ['10', '25', '50', '100']


const columns = [
    { id: 'column1', label: 'S No.', minWidth: 100 },
    { id: 'column2', label: 'School / University', minWidth: 150 },
    { id: 'column3', label: 'Session', minWidth: 150 },
    { id: 'column3', label: 'Education Level', minWidth: 100 }
];

const dataKey = ['serialNum', 'university', 'session', 'educationLevel'];


const dummyData = [
    {
        university: 'AKTU',
        session: 'Jun 25, 2018 - Jun 30, 2020',
        educationLevel: 'MCA'
    },
    {
        university: 'AKTU',
        session: 'Jun 25, 2018 - Jun 30, 2020',
        educationLevel: 'MCA'
    },
    {
        university: 'AKTU',
        session: 'Jun 25, 2018 - Jun 30, 2020',
        educationLevel: 'MCA'
    },
    {
        university: 'AKTU',
        session: 'Jun 25, 2018 - Jun 30, 2020',
        educationLevel: 'MCA'
    },
    {
        university: 'AKTU',
        session: 'Jun 25, 2018 - Jun 30, 2020',
        educationLevel: 'MCA'
    },
    {
        university: 'AKTU',
        session: 'Jun 25, 2018 - Jun 30, 2020',
        educationLevel: 'MCA'
    },
    {
        university: 'AKTU',
        session: 'Jun 25, 2018 - Jun 30, 2020',
        educationLevel: 'MCA'
    },
]



const QualificationListing = ({ tableHeighLimit, editNavigateAddress, addNavigateAddress }) => {
    const [openConfirmationBox, setOpenConfirmationBox] = useState(false);
    const actionKey = [
        {
            actionName: 'edit',
            navigateAddress: editNavigateAddress
        },
        {
            actionName: 'delete',
            open: openConfirmationBox,
            setOpen: setOpenConfirmationBox,
        },
    ]
    const navigate = useNavigate();
    const [searchKey, setSearchKey] = useState('');
    const [tableFilterKey, setTableFilterKey] = useState('');

    console.log(searchKey, 'vdvnfeiwodweidwedo')
    return (
        <>
            <Grid className='qualification-listing-container'>
                <Grid className='qualification-listing-heading'>
                    <h4>Add New Qualification</h4>
                    <button type="button"
                        onClick={() => navigate(addNavigateAddress)}
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z" fill="#C7D2FE" />
                        </svg>
                        <span>Add New</span>
                    </button>
                </Grid>
                <Grid className='qualification-listing-heading'>
                    <h4>List All Qualification</h4>
                </Grid>

                <Grid className='qualification-list-heading-export-btn-container'>
                    <Grid className='list-pagination-limit'>
                        <span>Show</span>
                        <Grid className='employee-management-table-limit-filter'>
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
                        <SearchCustom
                            setSearchKey={setSearchKey}
                        />
                    </Grid>
                </Grid>

                <Grid className='qualification-table-container'>
                    <TableCustom
                        columns={columns}
                        datas={dummyData}
                        dataKey={dataKey}
                        actionKey={actionKey}
                        align="center"
                        tableContainerMaxHeight={tableHeighLimit}
                    />
                </Grid>
                <Grid className='qualification-pagination-container'>
                    <p>Showing <span>1</span> to <span>6</span> of <span>6</span> entries</p>
                    <PaginationCustom totalRecords={100} />
                </Grid>

            </Grid>

            {
                openConfirmationBox && <ConfirmationDialog heading={'Are you sure you want to delete ?'} open={openConfirmationBox} setOpen={setOpenConfirmationBox} />
            }
        </>
    )
}

export default QualificationListing
