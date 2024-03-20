import React from 'react'
import { Grid } from 'react-loader-spinner'
import { NavLink } from 'react-router-dom'

export default function sidebatBackup() {
  return (
    <div>
      <Grid className='sidebar-menu-container'>

{
  sidebarMenuItems?.map((menuItem, index) => {

    if (menuItem?.isArrow) {
      return <Grid key={index} className='sidebar-menu-item' onClick={(e)=>menuDropDown(e,menuItem?.subMenu)}>
        <Grid className='sidebar-menu-item-logo-text'>
          <Grid className='sidebar-menu-icon'>
            <img src={menuItem?.iconPath} alt={menuItem?.menuName} />
          </Grid>
          <p>{menuItem?.menuName}</p>
        </Grid>
        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.75 1.5L5.25 6L0.75 10.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </Grid>
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
    </div>
  )
}
