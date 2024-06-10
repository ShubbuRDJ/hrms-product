import { Grid } from '@mui/material'
import React, { useState } from 'react'
import './employee-dsr.scss'
import FilterCustom from '../../../components/filter-custom/FilterCustom'
import SearchCustom from '../../../components/search-custom/SearchCustom'
import FilterTableLimit from '../../../components/filter-custom/FilterTableLimit'
import PaginationCustom from '../../../components/pagination/PaginationCustom'
import DatePickerCustom from '../../../components/date_picker/DatePickerCustom'
import { useNavigate } from 'react-router-dom'
// import routerConstants from '../../../../constants/routerConstants'
import AdvanceTableCustom from '../../../components/advance-table-custom /AdvanceTableCustom'
import routerConstants from '../../../../constants/routerConstants'


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
        id: 2, empName: 'Sanjay Yadav', email: 'sanjay@appventurez.com', date: '13th Feb, 2024', logged_hrs: '7:50', final_approval: {
            am: false,
            hr: false,
            rollback: false
        }
    },
    {
        id: 3, empName: 'Anuj Rawat', email: 'anuj@appventurez.com', date: '21th Jan, 2024', logged_hrs: '7:50', final_approval: {
            am: true,
            hr: false,
            rollback: false
        }
    },
    {
        id: 4, empName: 'Gabbar Singh', email: 'gabbar@appventurez.com', date: '11th Apr, 2024', logged_hrs: '7:50', final_approval: {
            am: true,
            hr: false,
            rollback: false
        }
    },
    {
        id: 5, empName: 'Anjali Dubey', email: 'anjali@appventurez.com', date: '11th Apr, 2024', logged_hrs: '7:50', final_approval: {
            am: true,
            hr: false,
            rollback: false
        }
    },
    {
        id: 6, empName: 'Vikas Mishra', email: 'vikas@appventurez.com', date: '11th Apr, 2024', logged_hrs: '7:50', final_approval: {
            am: true,
            hr: false,
            rollback: false
        }
    },
];

const EmployeeDSR = () => {
    const [locationFilter, setLocationFilter] = useState('');
    const [searchKey, setSearchKey] = useState('');
    const [tableFilterKey, setTableFilterKey] = useState('');

    const navigate = useNavigate();


    const actionKey = [
        {
            actionName: 'view',
            navigateAddress: `/${routerConstants?.viewEmployeeDSRRoute}`
        },
        {
            actionName: 'approve'
        },
        {
            actionName: 'reject'
        },
    ]

    const handleDeleteAction = (action) => {
        if (action?.navigateAddress) {
            navigate(action?.navigateAddress)
        }
        else {
            action?.setOpen(!action?.open)
        }
    }

    const columns = [
        {
            field: 'id',
            headerName: 'S No.',
            minWidth: 79
        },
        {
            field: 'empName',
            headerName: 'EMP Name',
            minWidth: 328,
            maxWidth: 300
        },
        {
            field: 'email',
            headerName: 'Email id',
            minWidth: 251
        },
        {
            field: 'date',
            headerName: 'Date',
            minWidth: 231
        },
        {
            field: 'logged_hrs',
            headerName: 'Total(Logged Hr)',
            minWidth: 232,
        },
        {
            field: 'final_approval',
            headerName: 'Final Approval',
            minWidth: 199,
            renderCell: (params) => (
                <Grid className='employee-dsr-table-custom-approval-container'>
                    <AmApprove approve={params?.row?.final_approval?.am} display={!params?.row?.final_approval?.rollback} />
                    <HrApprove approve={params?.row?.final_approval?.hr} display={!params?.row?.final_approval?.rollback} />
                    <RollbackBtn display={params?.row?.final_approval?.rollback} />
                </Grid>
            ),
        },
        {
            field: 'actions',
            headerName: 'Actions',
            minWidth: 179,
            renderCell: (params) => (
                <Grid style={{ display: 'flex', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', gap: '7px' }}>
                    {
                        actionKey?.map((action) => {
                            if (action?.actionName === 'view') {
                                return (<svg style={{ cursor: 'pointer' }} onClick={() => handleDeleteAction(action)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="4" fill="#1565C0" fillOpacity="0.1" />
                                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="#1565C0" />
                                    <path d="M17.4596 11.2893C17.7183 11.604 17.8476 11.7607 17.8476 12C17.8476 12.2393 17.7183 12.396 17.4596 12.7107C16.513 13.86 14.425 16 12.001 16C9.57696 16 7.48896 13.86 6.5423 12.7107C6.28363 12.396 6.1543 12.2393 6.1543 12C6.1543 11.7607 6.28363 11.604 6.5423 11.2893C7.48896 10.14 9.57696 8 12.001 8C14.425 8 16.513 10.14 17.4596 11.2893Z" stroke="#1565C0" />
                                </svg>)
                            }
                            else if (action?.actionName === 'approve') {
                                return (<svg style={{ cursor: 'pointer' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="4" fill="#10B981" fillOpacity="0.1" />
                                    <path d="M19.3337 12.0007L17.707 10.1473L17.9337 7.69401L15.527 7.14734L14.267 5.02734L12.0003 6.00068L9.73366 5.02734L8.47366 7.14734L6.06699 7.68734L6.29366 10.1407L4.66699 12.0007L6.29366 13.854L6.06699 16.314L8.47366 16.8607L9.73366 18.9807L12.0003 18.0007L14.267 18.974L15.527 16.854L17.9337 16.3073L17.707 13.854L19.3337 12.0007ZM10.667 15.334L8.00033 12.6673L8.94033 11.7273L10.667 13.4473L15.0603 9.05401L16.0003 10.0007L10.667 15.334Z" fill="#10B981" />
                                </svg>)
                            }
                            else if (action?.actionName === 'reject') {
                                return (<svg style={{ cursor: 'pointer' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="4" fill="#FF0000" fillOpacity="0.1" />
                                    <path d="M8.50586 15.4946L12.0012 11.9992L15.4965 15.4946M15.4965 8.50391L12.0005 11.9992L8.50586 8.50391" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>)
                            }
                            else return null

                        })
                    }
                </Grid>
            ),
        },
    ];

    const sortModel = [
        {
            field: 'empName',
        },
        {
            field: 'date',
        },
    ]


    console.log(searchKey, 'vdvnfeiwodweidwedo')
    return (
        <>
            <Grid className='employee-dsr-main-container'>

                <Grid className='employee-dsr-list-main-container'>

                    <Grid className='list-heading-export-btn-container' style={{ border: 'none' }}>
                        <h4>Employee DSR List</h4>
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
                                <p>Project</p>
                                <FilterCustom
                                    label={'Select Project'}
                                    filterKey={locationFilter}
                                    setFilterKey={setLocationFilter}
                                />
                            </Grid>
                            <Grid className='add-new-employee-filter'>
                                <p>Final Approval Status</p>
                                <FilterCustom
                                    label={'All'}
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
                            <Grid className='employee-dsr-table-limit-filter'>
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
                        <Grid className='list-search-box-and-export'>
                            <Grid className='list-search-box'>
                                <SearchCustom setSearchKey={setSearchKey} />
                            </Grid>
                            <button type="button">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1019 4.11391L7.44021 1.83272C7.31594 1.72378 7.15906 1.66805 7.00136 1.66797C6.89345 1.66791 6.78515 1.69391 6.68666 1.74675C6.64276 1.77023 6.60106 1.79892 6.5625 1.83272L3.90081 4.11391C3.62125 4.35351 3.58885 4.77437 3.82845 5.05394C4.06805 5.3335 4.48892 5.3659 4.76848 5.1263L6.33464 3.78402V8.94712C6.33464 9.31531 6.63312 9.61378 7.00131 9.61378C7.3695 9.61378 7.66798 9.31531 7.66798 8.94712L7.66798 3.78395L9.23423 5.1263C9.51379 5.3659 9.93466 5.3335 10.1743 5.05394C10.4139 4.77437 10.3815 4.35351 10.1019 4.11391ZM3.0013 8.33464C3.0013 7.96645 3.29978 7.66797 3.66797 7.66797H4.66797C5.03616 7.66797 5.33464 7.36949 5.33464 7.0013C5.33464 6.63311 5.03616 6.33464 4.66797 6.33464H3.66797C2.5634 6.33464 1.66797 7.23007 1.66797 8.33464V10.3346C1.66797 11.4392 2.5634 12.3346 3.66797 12.3346H10.3346C11.4392 12.3346 12.3346 11.4392 12.3346 10.3346V8.33464C12.3346 7.23007 11.4392 6.33464 10.3346 6.33464H9.33464C8.96645 6.33464 8.66797 6.63311 8.66797 7.0013C8.66797 7.36949 8.96645 7.66797 9.33464 7.66797H10.3346C10.7028 7.66797 11.0013 7.96645 11.0013 8.33464V10.3346C11.0013 10.7028 10.7028 11.0013 10.3346 11.0013H3.66797C3.29978 11.0013 3.0013 10.7028 3.0013 10.3346V8.33464Z" fill="#0F3659" />
                                </svg>
                                <span>Export</span>
                            </button>
                        </Grid>
                    </Grid>

                    <Grid className='employee-dsr-table-container'>
                        <AdvanceTableCustom
                            columns={columns}
                            rows={rows}
                            checkboxSelection={true}
                            sortModel={sortModel}
                        />
                    </Grid>
                    <Grid className='employee-dsr-pagination-container'>
                        <p>Showing <span>1</span> to <span>6</span> of <span>6</span> entries</p>
                        <PaginationCustom totalRecords={100} />
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default EmployeeDSR




const AmApprove = ({ approve, display }) => {
    return (
        <button type="button" style={{ backgroundColor: `${approve ? '#05CD99' : '#FFFAE9'}`, color: `${approve ? '#FFFFFF' : '#E8BD20'}`, display: `${!display ? 'none' : ''}` }}>
            <span>AM</span>
            {
                approve ?
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3327 7.00068L13.706 5.14734L13.9327 2.69401L11.526 2.14734L10.266 0.0273438L7.99935 1.00068L5.73268 0.0273438L4.47268 2.14734L2.06602 2.68734L2.29268 5.14068L0.666016 7.00068L2.29268 8.85401L2.06602 11.314L4.47268 11.8607L5.73268 13.9807L7.99935 13.0007L10.266 13.974L11.526 11.854L13.9327 11.3073L13.706 8.85401L15.3327 7.00068ZM6.66602 10.334L3.99935 7.66734L4.93935 6.72734L6.66602 8.44734L11.0593 4.05401L11.9993 5.00068L6.66602 10.334Z" fill="white" />
                    </svg> :
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.334 1.22529C11.3395 1.80586 12.1759 2.63898 12.7605 3.64216C13.3451 4.64534 13.6576 5.78381 13.6669 6.94485C13.6763 8.1059 13.3823 9.24926 12.814 10.2618C12.2457 11.2743 11.4228 12.1208 10.4268 12.7175C9.43081 13.3142 8.29623 13.6405 7.13538 13.664C5.97454 13.6875 4.82768 13.4074 3.80835 12.8515C2.78902 12.2955 1.93256 11.483 1.32376 10.4943C0.714959 9.50563 0.374924 8.3751 0.337318 7.21463L0.333984 6.99863L0.337318 6.78263C0.374653 5.63129 0.709683 4.50927 1.30974 3.52595C1.90981 2.54264 2.75442 1.73159 3.76125 1.17188C4.76807 0.612168 5.90275 0.322891 7.05465 0.332251C8.20656 0.341612 9.33639 0.649291 10.334 1.22529ZM7.00065 2.99863C6.83736 2.99865 6.67976 3.0586 6.55774 3.1671C6.43571 3.27561 6.35776 3.42513 6.33865 3.58729L6.33398 3.66529V6.99863L6.33998 7.08596C6.35518 7.20162 6.40047 7.31128 6.47132 7.40396L6.52932 7.47063L8.52932 9.47063L8.59198 9.52529C8.7089 9.616 8.85267 9.66524 9.00065 9.66524C9.14863 9.66524 9.2924 9.616 9.40932 9.52529L9.47198 9.46996L9.52732 9.40729C9.61803 9.29038 9.66726 9.1466 9.66726 8.99863C9.66726 8.85065 9.61803 8.70687 9.52732 8.58996L9.47198 8.52729L7.66732 6.72196V3.66529L7.66265 3.58729C7.64355 3.42513 7.56559 3.27561 7.44357 3.1671C7.32154 3.0586 7.16394 2.99865 7.00065 2.99863Z" fill="#E8BD20" />
                    </svg>
            }
        </button>
    )
}

const HrApprove = ({ approve, display }) => {
    return (
        <button type="button" style={{ backgroundColor: `${approve ? '#05CD99' : '#FFFAE9'}`, color: `${approve ? '#FFFFFF' : '#E8BD20'}`, display: `${!display ? 'none' : ''}` }}>
            <span>HR</span>
            {
                approve ?
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3327 7.00068L13.706 5.14734L13.9327 2.69401L11.526 2.14734L10.266 0.0273438L7.99935 1.00068L5.73268 0.0273438L4.47268 2.14734L2.06602 2.68734L2.29268 5.14068L0.666016 7.00068L2.29268 8.85401L2.06602 11.314L4.47268 11.8607L5.73268 13.9807L7.99935 13.0007L10.266 13.974L11.526 11.854L13.9327 11.3073L13.706 8.85401L15.3327 7.00068ZM6.66602 10.334L3.99935 7.66734L4.93935 6.72734L6.66602 8.44734L11.0593 4.05401L11.9993 5.00068L6.66602 10.334Z" fill="white" />
                    </svg> :
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.334 1.22529C11.3395 1.80586 12.1759 2.63898 12.7605 3.64216C13.3451 4.64534 13.6576 5.78381 13.6669 6.94485C13.6763 8.1059 13.3823 9.24926 12.814 10.2618C12.2457 11.2743 11.4228 12.1208 10.4268 12.7175C9.43081 13.3142 8.29623 13.6405 7.13538 13.664C5.97454 13.6875 4.82768 13.4074 3.80835 12.8515C2.78902 12.2955 1.93256 11.483 1.32376 10.4943C0.714959 9.50563 0.374924 8.3751 0.337318 7.21463L0.333984 6.99863L0.337318 6.78263C0.374653 5.63129 0.709683 4.50927 1.30974 3.52595C1.90981 2.54264 2.75442 1.73159 3.76125 1.17188C4.76807 0.612168 5.90275 0.322891 7.05465 0.332251C8.20656 0.341612 9.33639 0.649291 10.334 1.22529ZM7.00065 2.99863C6.83736 2.99865 6.67976 3.0586 6.55774 3.1671C6.43571 3.27561 6.35776 3.42513 6.33865 3.58729L6.33398 3.66529V6.99863L6.33998 7.08596C6.35518 7.20162 6.40047 7.31128 6.47132 7.40396L6.52932 7.47063L8.52932 9.47063L8.59198 9.52529C8.7089 9.616 8.85267 9.66524 9.00065 9.66524C9.14863 9.66524 9.2924 9.616 9.40932 9.52529L9.47198 9.46996L9.52732 9.40729C9.61803 9.29038 9.66726 9.1466 9.66726 8.99863C9.66726 8.85065 9.61803 8.70687 9.52732 8.58996L9.47198 8.52729L7.66732 6.72196V3.66529L7.66265 3.58729C7.64355 3.42513 7.56559 3.27561 7.44357 3.1671C7.32154 3.0586 7.16394 2.99865 7.00065 2.99863Z" fill="#E8BD20" />
                    </svg>
            }
        </button>
    )
}

const RollbackBtn = ({ approve, display }) => {
    return (
        <button type="button" className='rollbackBtn-btn' style={{ display: `${!display ? 'none' : ''}` }}>
            <span>Rolled Back</span>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9536 8.33329C11.793 9.44404 11.2376 10.4597 10.3891 11.1944C9.54066 11.929 8.45592 12.3333 7.33362 12.3333H1.66695V11H7.33362C8.21767 11 9.06552 10.6488 9.69064 10.0236C10.3158 9.39853 10.6669 8.55068 10.6669 7.66662C10.6669 6.78257 10.3158 5.93472 9.69064 5.3096C9.06552 4.68448 8.21767 4.33329 7.33362 4.33329H2.60962L4.27628 5.99996L3.33362 6.94262L0.0576172 3.66662L3.33362 0.390625L4.27628 1.33329L2.60962 2.99996H7.33362C8.57129 2.99996 9.75828 3.49162 10.6334 4.36679C11.5086 5.24196 12.0003 6.42895 12.0003 7.66662V8.33329H11.9536Z" fill="white" />
            </svg>
        </button>
    )
}
