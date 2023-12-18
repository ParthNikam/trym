import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// @mui/material Components
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

// Core Components
import Grid from "@mui/material/Grid";


// Material Kit 2 React components
import MKBox from "components/MKBox";
import FetchAllData from "functions/LoadData/FetchAllData";

const SearchBarRoot = () => {
  const navigate = useNavigate();
  const [selectedUsers, setSelectedUsers] = useState([]);

  const allUserData = FetchAllData();
  // const allUserData = {0:{name:"Parth", class:"J10"}};

  const handleSearch = () => {
    if (selectedUsers.length > 0) {
      const queryParameters = selectedUsers
        .slice(0, 4)
        .map((user) => `q=${encodeURIComponent(user)}`)
        .join("&");
      navigate(`/profile/?${queryParameters}`);
    }
  };

  if (!allUserData || typeof allUserData !== "object") {
    console.error("Invalid allUserData:", allUserData);
    return null; // or handle the error in another way
  }

  // Filter out null or undefined values
  const validUsers = Object.values(allUserData).filter(
    (user) => user !== null && user !== undefined
  );

  return (
    <>
      <MKBox component="section" py={3} px={1}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            borderRadius: 8,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Grid
            item
            xs={10}
            md={10}
            lg={10}
            sx={{
              p: 1,
              px: 4,
              mx:-2,
            }}
          >
            <Autocomplete
              multiple
              id="tags-standard"
              options={validUsers.map((user) => user.name)}
              value={selectedUsers}
              onChange={(_, newValue) => {
                // Limit the selected values to 3
                const limitedValue = newValue.slice(0, 3);
                setSelectedUsers(limitedValue);
              }}
              
              getOptionLabel={(user) => user}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard" 
                  label="Search for Multiple Names"
                  placeholder="Name"
                  sx={{
                    borderRadius: 10,
                  }} // Set the border radius and width for Autocomplete
                />
              )}
            />
          </Grid>
          <Grid item xs={2} md={2} lg={2}>
            <IconButton aria-label="search" onClick={handleSearch}>
              <SearchIcon fontSize="medium" /> {/* Make the icon larger */}
            </IconButton>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
};

export default SearchBarRoot;
