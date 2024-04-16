import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './non-submitted-dsr.scss'
import FilterCustom from '../../../components/filter-custom/FilterCustom'
import SearchCustom from '../../../components/search-custom/SearchCustom'
import FilterTableLimit from '../../../components/filter-custom/FilterTableLimit'
import PaginationCustom from '../../../components/pagination/PaginationCustom'
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom'
// import routerConstants from '../../../../constants/routerConstants'
import AdvanceTableCustom from '../../../components/advance-table-custom /AdvanceTableCustom'


const tableLimitArr = ['10', '25', '50', '100']

const rows = [
    {
        id: 1, empName: 'Prabhash Mishra', email: 'prabhash@appventurez.com', date: '11th Apr, 2024', logged_hrs: '7:50', final_approval: {
            am: true,
            hr: false,
            rollback: false
        }
    },
    {
        id: 2, empName: 'Prabhash Mishra', email: 'prabhash@appventurez.com', date: '11th Apr, 2024', logged_hrs: '7:50', final_approval: {
            am: false,
            hr: false,
            rollback: false
        }
    },
    {
        id: 3, empName: 'Prabhash Mishra', email: 'prabhash@appventurez.com', date: '11th Apr, 2024', logged_hrs: '7:50', final_approval: {
            am: true,
            hr: false,
            rollback: false
        }
    },
    {
        id: 4, empName: 'Prabhash Mishra', email: 'prabhash@appventurez.com', date: '11th Apr, 2024', logged_hrs: '7:50', final_approval: {
            am: true,
            hr: false,
            rollback: false
        }
    },
    {
        id: 5, empName: 'Prabhash Mishra', email: 'prabhash@appventurez.com', date: '11th Apr, 2024', logged_hrs: '7:50', final_approval: {
            am: true,
            hr: false,
            rollback: false
        }
    },
    {
        id: 6, empName: 'Prabhash Mishra', email: 'prabhash@appventurez.com', date: '11th Apr, 2024', logged_hrs: '7:50', final_approval: {
            am: true,
            hr: false,
            rollback: false
        }
    },
];

const NonSubmittedDsr = () => {
    const [locationFilter, setLocationFilter] = useState('');
    const [searchKey, setSearchKey] = useState('');


    const actionKey = [
        {
            actionName: 'chat',
            navigateAddress: '/leaves-to-acknowledge/leave-details'
        },
    ]

    const columns = [
        {
            field: 'id',
            headerName: 'S No.',
            minWidth: 79
        },
        {
            field: 'empName',
            headerName: 'Employee',
            minWidth: 328,
        },
        {
            field: 'email',
            headerName: 'Email id',
            minWidth: 400
        },
        {
            field: 'date',
            headerName: 'Date',
            minWidth: 331
        },
        {
            field: 'logged_hrs',
            headerName: 'Total(Logged Hr)',
            minWidth: 232,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            minWidth: 179,
            renderCell: (params) => (
                <Grid style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', gap: '7px' }}>
                    {
                        actionKey?.map((action) => {
                            if (action?.actionName === 'chat') {
                                return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="4" fill="#F4EFFF" />
                                    <path d="M6.8393 15.0613C6.09384 13.8046 5.83277 12.319 6.10512 10.8835C6.37747 9.44796 7.1645 8.16123 8.31843 7.26492C9.47235 6.3686 10.9138 5.92437 12.3721 6.01562C13.8304 6.10688 15.2052 6.72735 16.2384 7.76053C17.2715 8.7937 17.892 10.1685 17.9833 11.6268C18.0745 13.0851 17.6303 14.5265 16.734 15.6805C15.8377 16.8344 14.551 17.6214 13.1154 17.8938C11.6799 18.1661 10.1943 17.9051 8.93766 17.1596L8.93767 17.1596L6.86539 17.7516C6.77965 17.7761 6.68892 17.7773 6.6026 17.7549C6.51629 17.7325 6.43752 17.6875 6.37447 17.6244C6.31142 17.5614 6.26637 17.4826 6.24401 17.3963C6.22164 17.31 6.22276 17.2192 6.24726 17.1335L6.83934 15.0612L6.8393 15.0613Z" stroke="#007BFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25C11.5858 11.25 11.25 11.5858 11.25 12C11.25 12.4142 11.5858 12.75 12 12.75Z" fill="#007BFF" />
                                    <path d="M9 12.75C9.41421 12.75 9.75 12.4142 9.75 12C9.75 11.5858 9.41421 11.25 9 11.25C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75Z" fill="#007BFF" />
                                    <path d="M15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25C14.5858 11.25 14.25 11.5858 14.25 12C14.25 12.4142 14.5858 12.75 15 12.75Z" fill="#007BFF" />
                                </svg>)
                            }
                            else return null

                        })
                    }
                </Grid>
            ),
        },
    ];


    console.log(searchKey, 'vdvnfeiwodweidwedo')
    return (
        <>
            <Grid className='non-submitted-dsr-main-container'>

                <Grid className='non-submitted-dsr-list-main-container'>

                    <Grid className='list-heading-export-btn-container' style={{ border: 'none' }}>
                        <h4>List All Non Submitted DSR</h4>
                    </Grid>

                    <Grid className='add-new-employee-filter-container' style={{ marginTop: '-15px' }}>
                        <Grid className='add-new-employee-filter-wrapper'>

                            <Grid className='add-new-employee-filter'>
                                <p>Date</p>
                                <DatePickerCustom
                                    placeholder={'Date'}
                                />
                            </Grid>

                            <Grid className='add-new-employee-filter'>
                                <p>Reporting Manager</p>
                                <FilterCustom
                                    label={'Select Reporting Manager'}
                                    filterKey={locationFilter}
                                    setFilterKey={setLocationFilter}
                                />
                            </Grid>

                            <Grid className='add-new-employee-filter'>
                                <p>Project</p>
                                <FilterCustom
                                    label={'Select Project'}
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
                            <Grid className='non-submitted-dsr-table-limit-filter'>
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

                    <Grid className='non-submitted-dsr-table-container'>
                        <AdvanceTableCustom
                            columns={columns}
                            rows={rows}
                            checkboxSelection={false}
                        />
                    </Grid>
                    <Grid className='non-submitted-dsr-pagination-container'>
                        <p>Showing <span>1</span> to <span>6</span> of <span>6</span> entries</p>
                        <PaginationCustom totalRecords={100} />
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default NonSubmittedDsr

