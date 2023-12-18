import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// @mui/material Components
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import InsightsIcon from "@mui/icons-material/Insights";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";

// Core Components
import SearchBar from "functions/SearchBar";

// Material Kit 2 React components
import MKBox from "components/MKBox";

export default function FooterNav() {
  const [value, setValue] = useState(0); 
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const footerRef = useRef(null); 
  const [prevScrollPos, setPrevScrollPos] = useState(0); // State to track previous scroll position

  useEffect(() => {
    // Highlight the search bar when on the homepage
    if (location.pathname === '/') {
      setIsSearchOpen(false);
    } else {
      setIsSearchOpen(false);
    }
  }, [location.pathname]);

  const handleNavigation = (newValue) => {
    setValue(newValue);

    // Navigate to the corresponding page based on the selected value
    if (newValue === 1 && location.pathname !== '/') {
      // Toggle the SearchBar visibility
      setIsSearchOpen((prev) => !prev);
    } else {
      // Close the SearchBar if it's open
      setIsSearchOpen(false);

      // Navigate to the corresponding page based on the selected value
      switch (newValue) {
        case 0:
          navigate("/");
          break;
        case 2:
          navigate("/leader-board");
          break;
        case 3:
          navigate("/your-profile");
          break;
        default:
          break;
      }
    }
  };

  const closeSearchBar = () => {
    setIsSearchOpen(false);
  };

  return (
    <MKBox
      ref={footerRef}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "bottom 0.3s ease-in-out",
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          handleNavigation(newValue);
        }}
      >
        <BottomNavigationAction sx={{fontSize:30}} label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction sx={{fontSize:30}} label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction sx={{fontSize:30}} label="LeaderBoard" icon={<InsightsIcon />} />
        {/* <BottomNavigationAction sx={{fontSize:30}} label="Profile" icon={<AccountCircleIcon />} /> */}
      </BottomNavigation>

      {/* Render SearchBar based on its visibility state */}
      {isSearchOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1000,
            transition: "top 0.3s ease-in-out",
          }}
        >
          <SearchBar onClose={closeSearchBar} />
        </div>
      )}
    </MKBox>
  );
}
