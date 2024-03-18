import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select } from "@mui/material";
import './dropdown-custom.scss';

export default function DropownCustom({ dropdownListArray, dropdownKeysArray, handleChange, value, label,name,handleBlur,disabledOption }) {

  const [open, setOpen] = useState(false);
  return (
    <FormControl disabled = {disabledOption} sx={{ width:'100%', height: "100%" }} >
      {!value && <InputLabel shrink={false}  id="demo-multiple-name-label">{label}</InputLabel>}
      <Select
        open={open}
        name={name}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ height: '100%' }}
        IconComponent={() => <DropDownArrow open={open} setOpen={setOpen} disabledOption={disabledOption} />}
        MenuProps={{
          classes: {
            list: 'filter-custom-css',
          }
        }}
      >

        {
          dropdownListArray?.map((name, index) => (
            <MenuItem
              className="filterCustom-menuItem"
              key={`${name}-${index+1}`}
              value={dropdownKeysArray ? dropdownKeysArray[index] : name.split(" ").join("")}
            >
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

// custom arrow in dropdown 

const DropDownArrow = ({ open, setOpen, disabledOption }) => (
  <>
    { !disabledOption && 
      !open ? <svg style={{ cursor: 'pointer', paddingRight: '0.69rem', stroke: '#292D32' }} onClick={() => setOpen(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> :
        !disabledOption &&
        <svg style={{ cursor: 'pointer', paddingRight: '0.69rem', stroke: '#292D32' }} onClick={() => setOpen(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4.07992 15.05L10.5999 8.53005C11.3699 7.76005 12.6299 7.76005 13.3999 8.53005L19.9199 15.05" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    }
  </>
)

