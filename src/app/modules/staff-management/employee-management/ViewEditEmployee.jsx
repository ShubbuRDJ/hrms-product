import React from 'react'
import './view-edit-employee.scss'
import { Grid } from '@mui/material'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import BasicDetailsEmp from './employee-management-sub-screen/BasicDetailsEmp'
import ProfilePicture from '../../profile/profile-picture/ProfilePicture'
import ChangePassword from '../../profile/change-password/ChangePassword'
import Qualification from '../../profile/qualification/Qualification'
import Leave from './employee-management-sub-screen/Leave'
import QualificationListing from './employee-management-sub-screen/QualificationListing'
import routerConstants from '../../../../constants/routerConstants'

const ViewEditEmployee = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const profileSidebar = [
        {
            menuName: 'Basic Information',
            navigateAddress: `${routerConstants?.employeeManagementRoute}/${routerConstants?.editEmployeeManagementRoute}`,
        },
        {
            menuName: 'Profile Picture',
            navigateAddress: `${routerConstants?.employeeManagementRoute}/${routerConstants?.editEmployeeManagementRoute}/${routerConstants?.profilePictureRoute}`,
        },
        {
            menuName: 'Qualifications',
            navigateAddress: `${routerConstants?.employeeManagementRoute}/${routerConstants?.editEmployeeManagementRoute}/${routerConstants?.qualificationRoute}`,
        },
        {
            menuName: 'Change Password',
            navigateAddress: `${routerConstants?.employeeManagementRoute}/${routerConstants?.editEmployeeManagementRoute}/${routerConstants?.changePasswordRoute}`,
        },
        {
            menuName: 'Leave',
            navigateAddress: `${routerConstants?.employeeManagementRoute}/${routerConstants?.editEmployeeManagementRoute}/${routerConstants?.employeeLeaveRoute}`,
        },
    ]

    return (
        <Grid className='edit-employee-container-wrapper'>
            <Grid className='edit-employee-container'>

                <Grid className='edit-employee-heading'>
                    <h4>Employee Details</h4>
                </Grid>

                <Grid className='employee-edit-container-main'>
                    <Grid className='employee-edit-sidebar'>
                        {
                            profileSidebar?.map((menu, index) => (
                                <Grid key={index} onClick={() => navigate(menu?.navigateAddress)} className={`employee-edit-sidebar-menu ${(location.pathname === menu.navigateAddress || location.pathname.includes(menu?.menuName?.toLowerCase())) ? 'employee-edit-active' : ''}`}>
                                    <Grid className='employee-edit-sidebar-menu-item'>
                                        <p>{menu?.menuName}</p>
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Grid className='employee-edit-main-content-wrapper'>
                        <Routes>
                            <Route index element={<BasicDetailsEmp />} />
                            <Route path={routerConstants?.profilePictureRoute} element={<ProfilePicture />} />
                            <Route path={routerConstants?.changePasswordRoute} element={<ChangePassword />} />
                            <Route path={routerConstants?.employeeLeaveRoute} element={<Leave />} />
                            <Route path={routerConstants?.qualificationRoute} element={<QualificationListing tableHeighLimit={385} editNavigateAddress={`/${routerConstants?.employeeManagementRoute}/${routerConstants?.editEmployeeManagementRoute}/${routerConstants?.qualificationRoute}/${routerConstants?.editQualificationRoute}`} addNavigateAddress={`/${routerConstants?.employeeManagementRoute}/${routerConstants?.editEmployeeManagementRoute}/${routerConstants?.qualificationRoute}/${routerConstants?.addQualificationRoute}`} />} />
                            <Route path={`${routerConstants?.qualificationRoute}/${routerConstants?.addQualificationRoute}`} element={<Qualification heading = {'Add New Qualification'} />} />
                            <Route path={`${routerConstants?.qualificationRoute}/${routerConstants?.editQualificationRoute}`} element={<Qualification heading={'Edit New Qualification'} />} />
                            <Route path="*" element={<Navigate to={`/${routerConstants?.employeeManagementRoute}`} />} />
                        </Routes>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default ViewEditEmployee
