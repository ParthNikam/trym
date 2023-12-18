import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// @mui/material Components
import Chip from "@mui/material/Chip";

// List Components
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";

// Core Components
import Card from "@mui/material/Card";
import PrimaryColumn from "components/PrimaryColumn/PrimaryColumn";
import HeaderNav from "pages/HeaderNav";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// function components
import FetchLeaderBoard from "functions/LeaderBoard/FetchLeaderBoard";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const LeaderBoardPageRoot = () => {
  const leaderBoard = FetchLeaderBoard();

  leaderBoard.sort(
    (userA, userB) =>
      userA.marks[userA.marks.length - 1].rank -
      userB.marks[userB.marks.length - 1].rank
  );

  if (leaderBoard === undefined) {
    return <div>Loading...</div>;
  }

  const getFirstLetter = (userName) => {
    if (userName === undefined) {
      return null;
    }
    return userName.charAt(0).toUpperCase();
  };

  const convertBase64ToImage = (base64String) => {
    return `data:image/png;base64,${base64String}`;
  };

  return (
    <>
      <PrimaryColumn>
        <MKBox
          sx={{
            background:
              "linear-gradient(to bottom right, #93C5FD, #3B82F6, #4299E1)",
          }}
        >
          <MKBox
            sx={{
              display: "flex",
              flexDirection: "column",
              zIndex: 1000,
              pt: 1,
            }}
          >
            <HeaderNav />
          </MKBox>
          <MKBox
            minHeight="15rem"
            width="100%"
            sx={{
              backgroundSize: "cover",
              backgroundPosition: "top",
              display: "grid",
              placeItems: "center",
            }}
          />
          <Card
            sx={{
              p: 2,
              mb: 8,
              mx: 0,
              borderRadius: 10,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <MKTypography variant="h2" my={4} mx={2}>
              Leader Board
            </MKTypography>

            <List>
              {leaderBoard.map((user, index) => (
                <ListItem
                  divider={true}
                  key={user.name}
                  sx={{ background: "transparent", borderRadius: 2, mt: 1 }}
                >
                  <ListItemButton
                    component="a"
                    href={`/profile/?q=${user.name}`}
                  >
                    <ListItemIcon>
                      <Avatar
                        alt={user.name}
                        src={
                          user.profpic
                            ? convertBase64ToImage(user.profpic)
                            : undefined
                        }
                      >
                        {!user.profpic && (
                          <MKTypography>
                            {getFirstLetter(user.name)}
                          </MKTypography>
                        )}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={user.name}
                      secondary={`Class: ${user.class}`}
                    />
                    {index < 3 && (
                      <ListItemIcon>
                        {index === 0 ? (
                          <EmojiEventsIcon
                            style={{ width: 50, height: 50, color: "#FFD700" }}
                          />
                        ) : index === 1 ? (
                          <EmojiEventsIcon
                            style={{ width: 40, height: 40, color: "#C0C0C0" }}
                          />
                        ) : (
                          <EmojiEventsIcon
                            style={{ width: 30, height: 30, color: "#CD7F32" }}
                          />
                        )}
                      </ListItemIcon>
                    )}

                    <MKTypography variant="h4">
                      {user.marks[user.marks.length - 1].rank}
                    </MKTypography>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Card>
        </MKBox>
      </PrimaryColumn>
    </>
  );
};

export default LeaderBoardPageRoot;
