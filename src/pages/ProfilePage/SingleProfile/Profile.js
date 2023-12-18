import React from "react";

// @mui/material Components
import VerifiedIcon from "@mui/icons-material/Verified";

// Core Components
import UserBadges from "./Badges";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

function Profile({ user }) {
  const verifiedUsersList = [
    "Vivaan Parashar",
    "Advay Singh",
    "Rushil Dhar",
    "Pranav Ivaturi",
    "Aakash  Mutum",
    "Parth Rajesh Nikam",
    "Utkarsh Arora",
    "Samyak Kumar Singh",
    "Abhay Bharath",
    "Sidhant Tara",
    "Karitk Prashant Yeole",
    "Mahi Sureka"
  ];
  const isUserVerified = verifiedUsersList.includes(user.name);

  const getFirstLetter = (userName) => {
    if (userName && typeof userName === "string" && userName.length > 0) {
      return userName.charAt(0).toUpperCase();
    } else {
      return ""; // or another default value if needed
    }
  };

  const convertBase64ToImage = (base64String) => {
    return `data:image/png;base64,${base64String}`;
  };
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <MKBox
        mt={{
          xs: -16,
          md: -20,
        }}
        ml={{
          xs: 2,
          lg: 6,
        }}
        textAlign="center"
      >
        <MKAvatar
          src={user.profpic ? convertBase64ToImage(user.profpic) : undefined}
          sx={{ background: "#ffffff" }}
          size="xxl"
          shadow="xl"
        >
          {!user.profpic && (
            <MKTypography variant="h2">
              {getFirstLetter(user.name)}
            </MKTypography>
          )}
        </MKAvatar>
      </MKBox>

      <MKBox
        mt={{
          xs: -6,
          md: -10,
        }}
        ml={{
          xs: 16,
          md: 30,
        }}
        textAlign="center"
      >
        <UserBadges user={user} />
      </MKBox>

      <MKBox
        ml={{
          xs: 5,
          md: 5,
        }}
        mt={{
          xs: 5,
        }}
        pt={{ xs: 2, sm: 4 }}
        textAlign="center"
      >
        <MKBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <MKTypography variant="h4">
            {user.name}{" "}
            {isUserVerified && (
              <VerifiedIcon
                sx={{ verticalAlign: "middle", color: "#0984e8" }}
              />
            )}
          </MKTypography>
        </MKBox>
        <MKBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <MKTypography variant="subtitle2">@{user.class}</MKTypography>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

export default Profile;
