import React from "react";
import { Grid } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import MKBox from "components/MKBox";


const getUserBadgeInfo = (ranks) => {
  const bronzeThreshold = 50;
  const silverThreshold = 20;
  const goldThreshold = 10;

  const bronzeCount = ranks.filter(
    (rank) => rank <= bronzeThreshold && rank > silverThreshold
  ).length;
  const silverCount = ranks.filter(
    (rank) => rank <= silverThreshold && rank > goldThreshold
  ).length;
  const goldCount = ranks.filter(
    (rank) => rank <= goldThreshold && rank > 3
  ).length;
  const platinumCount = ranks.filter((rank) => rank <= 3).length;

  return {
    bronzeCount,
    silverCount,
    goldCount,
    platinumCount,
  };
};


const UserBadges = ({ user }) => {
  const badgesize = 32;
 

  const { bronzeCount, silverCount, goldCount, platinumCount } =
    getUserBadgeInfo(
      user.marks && Array.isArray(user.marks)
        ? user.marks.map((u) => u.rank)
        : []
    );
  return (
    <>
      <MKBox>
        <Grid container spacing={2} mb={3}>
          <Grid item>
            {platinumCount > 0 && (
              <>
                <Badge
                  color="secondary"
                  sx={{ color: "primary.main"}}
                  badgeContent={platinumCount}
                >
                  <MilitaryTechIcon
                    sx={{
                      height: badgesize,
                      width: badgesize,
                      color: "#000000",
                    }}
                  />
                </Badge>

                <Typography variant="subtitle2">
                  <TrendingUpIcon style={{ height:15, width:20, verticalAlign: "middle" }} />3
                </Typography>
              </>
            )}
          </Grid>
          <Grid item>
            {goldCount > 0 && (
              <>
                <Badge color="secondary" badgeContent={goldCount}>
                  <MilitaryTechIcon
                    sx={{
                      height: badgesize,
                      width: badgesize,
                      color: "#ffd700",
                    }}
                  />
                </Badge>
                <Typography variant="subtitle2">
                  <TrendingUpIcon style={{ height:15, width:20, verticalAlign: "middle" }} />
                  10
                </Typography>
              </>
            )}
          </Grid>
          <Grid item>
            {silverCount > 0 && (
              <>
                <Badge color="secondary" badgeContent={silverCount}>
                  <MilitaryTechIcon
                    sx={{
                      height: badgesize,
                      width: badgesize,
                      color: "#c0c0c0",
                    }}
                  />
                </Badge>
                <Typography variant="subtitle2">
                  <TrendingUpIcon style={{ height:15, width:20, verticalAlign: "middle" }} />
                  20
                </Typography>
              </>
            )}
          </Grid>
          <Grid item>
            {bronzeCount > 0 && (
              <>
                <Badge color="secondary" badgeContent={bronzeCount}>
                  <MilitaryTechIcon
                    sx={{
                      height: badgesize,
                      width: badgesize,
                      color: "#cd7f32",
                    }}
                  />
                </Badge>
                <Typography variant="subtitle2">
                  <TrendingUpIcon style={{ height:15, width:20, verticalAlign: "middle" }} />
                  50
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
};

export default UserBadges;
