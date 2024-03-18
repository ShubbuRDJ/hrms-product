import { Grid } from '@mui/material'
import './main-layout.scss'

export default function MainLayout({ children }) {
  return (
    <div className='mainLayout-container' >
      {/* <Topbar headingTopbar={heading} /> */}
      <Grid className='main-container'>
        {/* <Sidebar /> */}
        <Grid className='mainLayout-main-content'>
          {children}
        </Grid>
      </Grid>
    </div>
  )
}
