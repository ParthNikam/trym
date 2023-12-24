import React from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

const Banner = ({ Text, Subtitle }) => {
  return (
    <>
      <Card
        sx={{
          p: 0,
          mx: { xs: 1, lg: 3 },
          my: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKTypography
            variant="h1"
            fontWeight="bold"
            sx={{ color: "#0de7a6" }}
          >
            {Text}
          </MKTypography>
          <MKTypography variant="body1" color="text" sx={{ color: "#0de6a4" }}>
            {Subtitle}
          </MKTypography>
        </Grid>
      </Card>
    </>
  );
};

export default Banner;
