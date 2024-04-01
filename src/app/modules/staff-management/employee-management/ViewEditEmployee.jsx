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

const ViewEditEmployee = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const profileSidebar = [
        {
            menuName: 'Basic Information',
            navigateAddress: '/employee-management/edit-employee',
        },
        {
            menuName: 'Profile Picture',
            navigateAddress: '/employee-management/edit-employee/profile-picture',
        },
        {
            menuName: 'Qualifications',
            navigateAddress: '/employee-management/edit-employee/qualifications',
        },
        {
            menuName: 'Change Password',
            navigateAddress: '/employee-management/edit-employee/change-password',
        },
        {
            menuName: 'Leave',
            navigateAddress: '/employee-management/edit-employee/leave',
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
                            <Route path="profile-picture" element={<ProfilePicture />} />
                            <Route path="change-password" element={<ChangePassword />} />
                            <Route path="leave" element={<Leave />} />
                            <Route path="qualifications" element={<QualificationListing tableHeighLimit={385} editNavigateAddress={'/employee-management/edit-employee/qualifications/edit-qualification'} addNavigateAddress={'/employee-management/edit-employee/qualifications/add-qualification'} />} />
                            <Route path="qualifications/add-qualification" element={<Qualification heading = {'Add New Qualification'} />} />
                            <Route path="qualifications/edit-qualification" element={<Qualification heading={'Edit New Qualification'} />} />
                            <Route path="*" element={<Navigate to={'/employee-management'} />} />
                        </Routes>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default ViewEditEmployee
