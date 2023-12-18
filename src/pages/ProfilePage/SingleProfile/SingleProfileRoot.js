import React from "react";

// Core Components
import Card from "@mui/material/Card";
import Profile from "./Profile";
import Graphs from "functions/Graphs";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import FetchUserData from "functions/LoadData/FetchUserData";
import HeaderNav from "pages/HeaderNav";

import { getGradient } from "./gradient";

const SingleProfileRoot = ({ user }) => {
  const userData = FetchUserData(user);
  return (
    <MKBox
      sx={{
        background:"linear-gradient(to bottom right, #265073, #9AD0C2, #2D9596, #265073)",
      }}
    >
      <MKBox
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex:1000,
          pt:1
        }}
      >
        <HeaderNav />
        </MKBox>
      <MKBox
        minHeight="32.4rem"
        width="100%"
        sx={{
          mt:-15,
          background: `${getGradient(user)}`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      />

      <Card
        sx={{
          p: 2,
          mt: -20,
          mb: 4,
          borderRadius:10,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Profile user={userData} />

      <Graphs marks={userData.marks} />
      </Card>
    </MKBox>
  );
};

export default SingleProfileRoot;
