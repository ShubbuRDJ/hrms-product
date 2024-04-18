import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select } from "@mui/material";
import './filterCustom.scss';

export default function FilterCustom({ filterListArray, filterKeysArray, setFilterKey, filterKey, label }) {

  const [open, setOpen] = useState(false);
  return (
    <FormControl sx={{ width: '100%', height: "100%", border: 'none' }} >
      {!filterKey && <InputLabel className="dropdown-label" shrink={false} id="demo-multiple-name-label">{label}</InputLabel>}
      <Select

        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={filterKey}
        onChange={(e) => setFilterKey(e.target.value)}
        style={{ backgroundColor: '#ffffff',cursor:'pointer' }}
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
              key={`${name}-${index + 1}`}
              value={filterKeysArray ? filterKeysArray[index] : name.split(" ").join("")}
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
      !open ? <svg className="dropdown-svg-rotate" onClick={() => setOpen(true)} width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 0.75L6 5.25L1.5 0.75" stroke="#919499" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg> :
        <svg className="dropdown-svg-rotate dropdown-svg-rotate-2" onClick={() => setOpen(true)} width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 0.75L6 5.25L1.5 0.75" stroke="#919499" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    }
  </>
)

