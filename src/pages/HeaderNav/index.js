import React from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import Menu from "./Menu";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MenuIcon from "@mui/icons-material/Menu";
import favicon from "assets/images/logo192.png";

const HeaderNav = () => {
  return (
    <MKBox sx={{ mx: 1 }}>
      <Card
        sx={{
          p: 2,
          mb: 4,
          borderRadius: 10,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox p={0} display="flex" justifyContent="space-between">
          <MKBox component="a" href="/" sx={{borderRadius:10}}>
            <MKAvatar
              sx={{ width: 40, height: 40 }}
              alt="trym logo"
              src={favicon}
            />
          </MKBox>
          <MKBox>
            <Menu />
          </MKBox>
        </MKBox>
      </Card>
    </MKBox>
  );
};

export default HeaderNav;
