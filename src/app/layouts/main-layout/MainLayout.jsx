import { Grid } from '@mui/material'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

export default function MainLayout() {
  return (
    <Grid className='mainLayout-container' >
      <Sidebar/>
      <Grid className='main-container'>
        <Topbar/>
        <Grid className='mainLayout-main-content'>
          <Outlet/>
        </Grid>

      </Grid>
    </Grid>
  )
}
