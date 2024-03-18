import { Grid, Pagination} from '@mui/material'
import React, { useState } from 'react'
import './pagination.scss'

export default function PaginationCustom({ totalRecords, page, setPage, rowsPerPage, setRowsPerPage }) {
  // *****************************about props***************************************
  // 1. totalRecords => this is a variable to store the totalRecords. 
  // 2. page => this is a state variable to handle the page number.
  // 3. setPage => this is a setter method of state variable to handle the page number.
  // 4. rowsPerPage => this is a state variable to handle the rows per page.
  // 5. setRowsPerPage => this is a setter method of state variable to handle the rows per page.

  const rowsPerPageDropDownArray = ['10','25','50','100'];
  const [currentRow,setCurrentRow] = useState(0);
  
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  const handleDown = ()=>{
    if(currentRow >=3 ||currentRow <0){
      setCurrentRow(0);
    }
    else{
      setCurrentRow(currentRow+1);
    }
  }
  const handleUp = ()=>{
    if(currentRow >3 || currentRow <=0){
      setCurrentRow(0);
    }
    else{
      setCurrentRow(currentRow-1);
    }
  }
  return (
    <>
      <Pagination count={totalRecords/rowsPerPageDropDownArray[currentRow]} variant="outlined" shape="rounded" />
      <Grid className='pagination-row-dropdown'>
        <Grid className='pagination-row-text'>
          <p>{rowsPerPageDropDownArray[currentRow]}</p>
        </Grid>
        <Grid className='pagination-row-arrows'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
            <path onClick={handleDown} style={{cursor:'pointer'}} fillRule="evenodd" clipRule="evenodd" d="M16.4712 15C16.8863 15 17.1206 15.4767 16.8671 15.8054L13.2563 20.4867C13.0561 20.7462 12.6646 20.7462 12.4644 20.4867L8.85361 15.8054C8.60006 15.4767 8.83438 15 9.24952 15L16.4712 15Z" fill="#C5CDD4" />
            <path onClick={handleUp} style={{cursor:'pointer'}} fillRule="evenodd" clipRule="evenodd" d="M16.4712 9C16.8863 9 17.1206 8.52334 16.8671 8.19462L13.2563 3.51329C13.0561 3.25379 12.6646 3.25379 12.4644 3.51329L8.85361 8.19462C8.60006 8.52334 8.83438 9 9.24952 9L16.4712 9Z" fill="#C5CDD4" />
          </svg>
        </Grid>
      </Grid>
    </>
  )
}
