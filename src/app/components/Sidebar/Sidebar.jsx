import React, { useState } from 'react';
import './sidebar.scss';
import { Collapse, Grid, } from '@mui/material';
import av_logo from '../../../assets/sidebar/AV-Logo_sidebar.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import homeIcon from '../../../assets/sidebar/home.svg';
import myProfileIcon from '../../../assets/sidebar/my_profile.svg';
import employeeDirectoryIcon from '../../../assets/sidebar/employee_directory.svg';
import staffManagementIcon from '../../../assets/sidebar/staff_management.svg';
import organisationIcon from '../../../assets/sidebar/organization.svg';
import timeSheetIcon from '../../../assets/sidebar/timesheet.svg';
import projectManagementIcon from '../../../assets/sidebar/project_management.svg';
import hrCalendarIcon from '../../../assets/sidebar/calendar.svg';
import hrReportsIcon from '../../../assets/sidebar/reports.svg';
import leaveIcon from '../../../assets/sidebar/leave.svg';
import wfhIcon from '../../../assets/sidebar/wfh.svg';
import dsrIcon from '../../../assets/sidebar/dsr.svg';
import toaster from '../../../utility/toaster/toaster';

const Sidebar = () => {
  const navigate = useNavigate();
  const [openStaff, setOpenStaff] = useState(false);
  const [openOrganisation, setOpenOrganisation] = useState(false);

  const sidebarMenuItems = [
    {
      iconPath: homeIcon,
      menuName: 'Home',
      isArrow: false,
      navigateAddress: '/'
    },
    {
      iconPath: myProfileIcon,
      menuName: 'My Profile',
      isArrow: false,
      navigateAddress: '/profile'
    },
    {
      iconPath: employeeDirectoryIcon,
      menuName: 'Employee Directory',
      isArrow: false,
      navigateAddress: '/employee-directory',
    },

    {
      iconPath: staffManagementIcon,
      menuName: 'Staff Management',
      isArrow: true,
      open:openStaff,
      setOpen:setOpenStaff,
      subMenu: [
        {
          menuName: 'Employee Management',
          navigateAddress: '/employee-management'
        },
        {
          menuName: 'Role Management',
          navigateAddress: '/role-management'
        },
      ]
    },
    {
      iconPath: organisationIcon,
      menuName: 'Organization',
      isArrow: true,
      open:openOrganisation,
      setOpen:setOpenOrganisation,
      subMenu: [
        {
          menuName: 'Company Policy',
          navigateAddress: '/company-policy'
        },
        {
          menuName: 'Department',
          navigateAddress: '/department'
        },
        {
          menuName: 'Designation',
          navigateAddress: '/designation'
        },
        {
          menuName: 'Location',
          navigateAddress: '/location'
        },
      ]
    },
    {
      iconPath: timeSheetIcon,
      menuName: 'Timesheet',
      isArrow: false,
      navigateAddress: '/timesheet'
    },
    {
      iconPath: projectManagementIcon,
      menuName: 'Project Management',
      isArrow: false,
      navigateAddress: '/project-management'
    },
    {
      iconPath: hrCalendarIcon,
      menuName: 'HR Calendar',
      isArrow: false,
      navigateAddress: '/hr-calendar'
    },
    {
      iconPath: hrReportsIcon,
      menuName: 'HR Reports',
      isArrow: false,
      navigateAddress: '/hr-reports'
    },
    {
      iconPath: leaveIcon,
      menuName: 'Leave',
      isArrow: false,
      navigateAddress: '/leave'
    },
    {
      iconPath: wfhIcon,
      menuName: 'Work From Home',
      isArrow: false,
      navigateAddress: '/wfh'
    },
    {
      iconPath: dsrIcon,
      menuName: 'DSR',
      isArrow: false,
      navigateAddress: '/dsr'
    },
  ]

  const handleLogout = () => {
    localStorage.clear();
    toaster('success', 'Logged out successfully!')
    setTimeout(() => {
      navigate('/login');
    }, 1000)
  };


  return (
    <>
      <Grid className='sidebar-container'>
        <Grid className='sidebar-close-arrow'>
          <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.61646 0.540409C5.89259 0.816538 5.89259 1.26423 5.61646 1.54036L1.87401 5.28281L5.61646 9.02526C5.89259 9.30139 5.89259 9.74908 5.61646 10.0252C5.34033 10.3013 4.89264 10.3013 4.61651 10.0252L0.374088 5.78278C0.0979601 5.50665 0.0979601 5.05896 0.374088 4.78283L4.61651 0.540409C4.89264 0.264281 5.34033 0.264281 5.61646 0.540409Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9797 0.540409C12.2559 0.816538 12.2559 1.26423 11.9797 1.54036L8.23729 5.28281L11.9797 9.02526C12.2559 9.30139 12.2559 9.74908 11.9797 10.0252C11.7036 10.3013 11.2559 10.3013 10.9798 10.0252L6.73737 5.78278C6.46124 5.50665 6.46124 5.05896 6.73737 4.78283L10.9798 0.540409C11.2559 0.264281 11.7036 0.264281 11.9797 0.540409Z" fill="black" />
          </svg>
        </Grid>

        <Grid className='sidebar-logo'>
          <img src={av_logo} alt="av_logo" />
        </Grid>


        <Grid className='sidebar-main-container-wrapper'>

          <Grid className='sidebar-menu-container'>
            {
              sidebarMenuItems?.map((menuItem, index) => {

                if (menuItem?.isArrow) {
                  return <div key={index}>
                    <Grid onClick={() => menuItem?.setOpen(!menuItem?.open)} className='sidebar-menu-item'>
                      <Grid className='sidebar-menu-item-logo-text'>
                        <Grid className='sidebar-menu-icon'>
                          <img src={menuItem?.iconPath} alt={menuItem?.menuName} />
                        </Grid>
                        <p>{menuItem?.menuName}</p>
                      </Grid>
                      {
                        !menuItem?.open ?
                          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 1.5L5.25 6L0.75 10.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg> :
                          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 0.75L6 5.25L1.5 0.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      }
                    </Grid>
                    <Collapse in={menuItem?.open} timeout="auto" unmountOnExit>
                      <Grid className='sidebar-sub-menu-container'>
                        {
                          menuItem?.subMenu?.map((subMenuItem, index) => (
                            <NavLink to={subMenuItem?.navigateAddress} key={index}>
                              <Grid className='sidebar-menu-item sidebar-sub-menu-item'>
                                <Grid className='sidebar-menu-item-logo-text'>
                                  <Grid className='sidebar-menu-icon sidebar-sub-menu-icon'>
                                  </Grid>
                                  <p>{subMenuItem?.menuName}</p>
                                </Grid>
                              </Grid>
                            </NavLink>
                          ))
                        }
                      </Grid>
                    </Collapse>
                  </div>
                }
                return <NavLink to={menuItem?.navigateAddress} key={index}>
                  <Grid className='sidebar-menu-item'>
                    <Grid className='sidebar-menu-item-logo-text'>
                      <Grid className='sidebar-menu-icon'>
                        <img src={menuItem?.iconPath} alt={menuItem?.menuName} />
                      </Grid>
                      <p>{menuItem?.menuName}</p>
                    </Grid>
                  </Grid>
                </NavLink>
              })
            }
          </Grid>

          <Grid className='sidebar-logout'>
            <button onClick={handleLogout} type="button">
              <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7695 0.158966C17.2323 0.158966 20.0565 2.93476 20.0565 6.3522V13.0336H11.5413C10.9311 13.0336 10.4485 13.5079 10.4485 14.1077C10.4485 14.6935 10.9311 15.1817 11.5413 15.1817H20.0565V21.8492C20.0565 25.2667 17.2323 28.0564 13.7411 28.0564H6.82957C3.35253 28.0564 0.52832 25.2806 0.52832 21.8632V6.36615C0.52832 2.93476 3.36672 0.158966 6.84376 0.158966H13.7695ZM23.5998 9.29566C24.0182 8.86325 24.7017 8.86325 25.1202 9.28171L29.1932 13.3408C29.4024 13.55 29.514 13.815 29.514 14.108C29.514 14.3869 29.4024 14.6659 29.1932 14.8612L25.1202 18.9203C24.911 19.1295 24.632 19.2411 24.367 19.2411C24.088 19.2411 23.809 19.1295 23.5998 18.9203C23.1813 18.5018 23.1813 17.8183 23.5998 17.3999L25.8316 15.182H20.0568V13.0339H25.8316L23.5998 10.8161C23.1813 10.3976 23.1813 9.71412 23.5998 9.29566Z" fill="#007BFF" />
              </svg>
              <span>Logout</span>
            </button>
          </Grid>

        </Grid>

      </Grid>
    </>
  )
}

export default Sidebar
