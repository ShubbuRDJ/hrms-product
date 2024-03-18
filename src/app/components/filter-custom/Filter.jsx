import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { Grid, MenuItem, Select } from "@mui/material";
import './filter.scss';

export default function Filter({ filterListArray, filterKeysArray, setFilterKey, filterKey, label }) {

    const [open, setOpen] = useState(false);
    return (
        <FormControl sx={{ width: '100%', height: "100%" }} >
            {/* {!filterKey && <InputLabel shrink={false}  id="demo-multiple-name-label">{label}</InputLabel>} */}
            <Select
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={filterKey}
                onChange={(e) => setFilterKey(e.target.value)}
                style={{ height: '100%' }}
                IconComponent={() => null}
            >
                <MenuItem value={'filter'} style={{ display: 'none' }}>
                    <Grid className="filter-icon-with-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 22V11" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 7V2" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 22V17" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 13V2" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 22V11" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 7V2" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 11H7" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 11H21" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 13H14" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>Filter</p>
                    </Grid>
                </MenuItem>

                {
                    filterListArray?.map((name, index) => (
                        <MenuItem
                            className="filterCustom-menuItem"
                            key={`${name}-${index+1}`}
                            value={filterKeysArray ? filterKeysArray[index] : name.split(" ").join("")}
                        >
                            {name}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    );
}

