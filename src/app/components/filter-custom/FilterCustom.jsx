import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select } from "@mui/material";
import './filterCustom.scss';

export default function FilterCustom({ filterListArray, filterKeysArray, setFilterKey, filterKey, label }) {

  const [open, setOpen] = useState(false);
  return (
    <FormControl sx={{ width:'100%', height: "100%",border:'none' }} >
      {!filterKey && <InputLabel style={{border:'none',color:'#000',fontWeight:'500',opacity:'1'}} shrink={false}  id="demo-multiple-name-label">{label}</InputLabel>}
      <Select
        
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={filterKey}
        onChange={(e) => setFilterKey(e.target.value)}
        style={{ height: '100%',border:'none' }}
        IconComponent={() => <DropDownArrow open={open} setOpen={setOpen} />}
        MenuProps={{
          classes: {
            list: 'filter-custom-css',
          }
        }}
      >
        {
          filterListArray?.map((name, index) => (
            <MenuItem
              className="filterCustom-menuItem"
              key={`${name}-${index+1}`}
              value={filterKeysArray ? filterKeysArray[index] : name.split(" ").join("")}
              style={{height:'2.56rem',paddingLeft:'1rem',}}
            >
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

// custom arrow in dropdown 

const DropDownArrow = ({ open, setOpen }) => (
  <>
    {
      !open ? <svg style={{ cursor: 'pointer', paddingRight: '0.69rem', stroke: '#292D32' }} onClick={() => setOpen(true)} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 22 22" fill="none">
      <path d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> :
        <svg style={{ cursor: 'pointer', paddingRight: '0.69rem', stroke: '#292D32' }} onClick={() => setOpen(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4.07992 15.05L10.5999 8.53005C11.3699 7.76005 12.6299 7.76005 13.3999 8.53005L19.9199 15.05" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    }
  </>
)

