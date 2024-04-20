import { Search } from "@mui/icons-material";
import { FormControl, Grid, InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import './search-custom.scss';
import PropTypes from 'prop-types';

const SearchCustom = ({ setSearchKey })=> {
  // *******************************about props****************************************
  // 1. setSearchKey => This is a setter metthod of state variable for receive the search key in parent component
  return (
    <Grid className="search-custom">
      <FormControl
        fullWidth
        sx={{ width: "100%" }}
        size="small"
        variant="outlined"
      >
        <OutlinedInput
          id="outlined-adornment-weight"
          placeholder="Search ....."
          onChange={(e) => setSearchKey(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
    </Grid>
  );
}

SearchCustom.propTypes = {
  setSearchKey: PropTypes.func.isRequired,
};


export default SearchCustom