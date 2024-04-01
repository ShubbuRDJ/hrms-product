import React from 'react'
import './profile.scss'
import { Grid } from '@mui/material'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import BasicInfo from './basic-info/BasicInfo'
import ChangePassword from './change-password/ChangePassword'
import ProfilePicture from './profile-picture/ProfilePicture'
import Shift from './shift/Shift'
import Qualification from './qualification/Qualification'
import QualificationListing from '../staff-management/employee-management/employee-management-sub-screen/QualificationListing'

const Profile = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const profileSidebar = [
        {
            menuName: 'Basic Information',
            navigateAddress: '/profile',
        },
        {
            menuName: 'Profile Picture',
            navigateAddress: '/profile/profile-picture',
        },
        {
            menuName: 'Qualifications',
            navigateAddress: '/profile/qualifications',
        },
        {
            menuName: 'Shift',
            navigateAddress: '/profile/shift',
        },
        {
            menuName: 'Change Password',
            navigateAddress: '/profile/change-password',
        },
    ]

    return (
        <>
            <Grid className='profile-container'>
                <Grid className='profile-topcard'>
                    <Grid className='profile-topcard-img'>
                        <img src="https://picsum.photos/seed/picsum/200/300" alt="user" />
                    </Grid>

                    <Grid className='profile-topcard-text-wrapper'>
                        <Grid className='profile-topcard-text-name-designation'>
                            <h4>Prabhash Mishra</h4>
                            <p>Lead UIUX Designer</p>
                        </Grid>
                        <Grid className='profile-topcard-user-info'>

                            <Grid className='profile-topcard-user-info-item'>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0H12C15.771 0 17.657 -1.19209e-07 18.828 1.172C20 2.343 20 4.229 20 8C20 11.771 20 13.657 18.828 14.828C17.657 16 15.771 16 12 16H8C4.229 16 2.343 16 1.172 14.828C-1.19209e-07 13.657 0 11.771 0 8C0 4.229 -1.19209e-07 2.343 1.172 1.172C2.343 -1.19209e-07 4.229 0 8 0ZM11.25 5C11.25 4.80109 11.329 4.61032 11.4697 4.46967C11.6103 4.32902 11.8011 4.25 12 4.25H17C17.1989 4.25 17.3897 4.32902 17.5303 4.46967C17.671 4.61032 17.75 4.80109 17.75 5C17.75 5.19891 17.671 5.38968 17.5303 5.53033C17.3897 5.67098 17.1989 5.75 17 5.75H12C11.8011 5.75 11.6103 5.67098 11.4697 5.53033C11.329 5.38968 11.25 5.19891 11.25 5ZM12.25 8C12.25 7.80109 12.329 7.61032 12.4697 7.46967C12.6103 7.32902 12.8011 7.25 13 7.25H17C17.1989 7.25 17.3897 7.32902 17.5303 7.46967C17.671 7.61032 17.75 7.80109 17.75 8C17.75 8.19891 17.671 8.38968 17.5303 8.53033C17.3897 8.67098 17.1989 8.75 17 8.75H13C12.8011 8.75 12.6103 8.67098 12.4697 8.53033C12.329 8.38968 12.25 8.19891 12.25 8ZM13.25 11C13.25 10.8011 13.329 10.6103 13.4697 10.4697C13.6103 10.329 13.8011 10.25 14 10.25H17C17.1989 10.25 17.3897 10.329 17.5303 10.4697C17.671 10.6103 17.75 10.8011 17.75 11C17.75 11.1989 17.671 11.3897 17.5303 11.5303C17.3897 11.671 17.1989 11.75 17 11.75H14C13.8011 11.75 13.6103 11.671 13.4697 11.5303C13.329 11.3897 13.25 11.1989 13.25 11ZM9 5C9 5.53043 8.78929 6.03914 8.41421 6.41421C8.03914 6.78929 7.53043 7 7 7C6.46957 7 5.96086 6.78929 5.58579 6.41421C5.21071 6.03914 5 5.53043 5 5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3C7.53043 3 8.03914 3.21071 8.41421 3.58579C8.78929 3.96086 9 4.46957 9 5ZM7 13C11 13 11 12.105 11 11C11 9.895 9.21 9 7 9C4.79 9 3 9.895 3 11C3 12.105 3 13 7 13Z" fill="#007BFF" />
                                </svg>
                                <p>AV24724</p>
                            </Grid>

                            <Grid className='profile-topcard-user-info-item'>
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.29973 4.19371 2.21192 4.11766 2.14189 4.02645C2.07186 3.93525 2.02106 3.83078 1.99258 3.71937C1.96409 3.60796 1.9585 3.49194 1.97616 3.37831C1.99381 3.26468 2.03434 3.15581 2.09528 3.0583C2.15623 2.96079 2.23632 2.87666 2.33073 2.811C2.42513 2.74533 2.53187 2.69951 2.6445 2.6763C2.75712 2.65309 2.87328 2.65297 2.98595 2.67595C3.09863 2.69893 3.20546 2.74453 3.3 2.81L10 7L16.7 2.81C16.7945 2.74453 16.9014 2.69893 17.014 2.67595C17.1267 2.65297 17.2429 2.65309 17.3555 2.6763C17.4681 2.69951 17.5749 2.74533 17.6693 2.811C17.7637 2.87666 17.8438 2.96079 17.9047 3.0583C17.9657 3.15581 18.0062 3.26468 18.0238 3.37831C18.0415 3.49194 18.0359 3.60796 18.0074 3.71937C17.9789 3.83078 17.9281 3.93525 17.8581 4.02645C17.7881 4.11766 17.7003 4.19371 17.6 4.25Z" fill="#007BFF" />
                                </svg>
                                <p>prabhash@appventurez.com</p>
                            </Grid>

                            <Grid className='profile-topcard-user-info-item'>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V17C4 17.7956 4.31607 18.5587 4.87868 19.1213C5.44129 19.6839 6.20435 20 7 20H13C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V3C16 2.20435 15.6839 1.44129 15.1213 0.87868C14.5587 0.316071 13.7956 0 13 0H7ZM8.293 6.293C8.48053 6.10553 8.73484 6.00021 9 6.00021C9.26516 6.00021 9.51947 6.10553 9.707 6.293L12.707 9.293C12.8945 9.48053 12.9998 9.73484 12.9998 10C12.9998 10.2652 12.8945 10.5195 12.707 10.707L9.707 13.707C9.5184 13.8892 9.2658 13.99 9.0036 13.9877C8.7414 13.9854 8.49059 13.8802 8.30518 13.6948C8.11977 13.5094 8.0146 13.2586 8.01233 12.9964C8.01005 12.7342 8.11084 12.4816 8.293 12.293L9.586 11H1C0.734784 11 0.48043 10.8946 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73478 0.105357 9.48043 0.292893 9.29289C0.48043 9.10536 0.734784 9 1 9H9.586L8.293 7.707C8.10553 7.51947 8.00021 7.26516 8.00021 7C8.00021 6.73484 8.10553 6.48053 8.293 6.293Z" fill="#007BFF" />
                                </svg>
                                <p>Feb 02, 2024 10:56 AM from 49.249.112.98</p>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                <Grid className='profile-container-main'>
                    <Grid className='profile-container-main'>
                        <Grid className='profile-sidebar'>
                            {
                                profileSidebar?.map((menu, index) => (
                                    <Grid key={index} onClick={()=>navigate(menu?.navigateAddress)} className={`profile-sidebar-menu ${(location.pathname === menu.navigateAddress || location.pathname.includes(menu?.menuName?.toLowerCase())) ? 'profile-active' : ''}`}>
                                        <Grid className='profile-sidebar-menu-item'>
                                            <p>{menu?.menuName}</p>
                                        </Grid>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        <Grid className='profile-main-content-wrapper'>
                            <Routes>
                                <Route index element={<BasicInfo />} />
                                <Route path="profile-picture" element={<ProfilePicture />} />
                                <Route path="change-password" element={<ChangePassword />} />
                                <Route path="shift" element={<Shift />} />
                                <Route path="qualifications" element={<QualificationListing editNavigateAddress={'/profile/qualifications/edit-qualification'} addNavigateAddress={'/profile/qualifications/add-qualification'} />} />
                                <Route path="qualifications/add-qualification" element={<Qualification heading={'Add New Qualification'} />} />
                                <Route path="qualifications/edit-qualification" element={<Qualification heading={'Edit New Qualification'} />} />
                                <Route path="*" element={<Navigate to={'/profile'} />} />
                            </Routes>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Profile
