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
    </>
  )
}
