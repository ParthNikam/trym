import React from "react";
import FetchUserData from "functions/LoadData/FetchUserData";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Core Components
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import HeaderNav from "pages/HeaderNav";

// List Components
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKAvatar from "components/MKAvatar";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Chart Libraries
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import Chart from "chart.js/auto";

Chart.register(zoomPlugin);

function formatDate(dateString) {
  const options = { day: "numeric", month: "short" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

const getRanksData = (marks, usrName, datesData) => {
  const allRanksAndDates = Object.values(marks).map((mark) => ({
    rank: mark.rank !== undefined ? mark.rank : null,
    date: mark.date,
  }));

  // Sort the array based on the 'date' property
  const sortedRanksAndDates = allRanksAndDates.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const ranksData = {
    ranks: [],
    dates: [],
    name: usrName,
  };

  // Iterate through all dates, including those missing for the current user
  datesData.forEach((date) => {
    const matchingEntry = sortedRanksAndDates.find(
      (entry) => entry.date === date
    );
    if (matchingEntry) {
      ranksData.ranks.push(
        matchingEntry.rank === "A" ? null : matchingEntry.rank
      );
    } else {
      // If the date is missing for the current user, add a null value
      ranksData.ranks.push(null);
    }
    ranksData.dates.push(formatDate(date));
  });
  return ranksData;
};

const MultipleProfileRoot = ({ users }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const chartWidth = isSmallScreen ? 400 : 600;
  const chartHeight = isSmallScreen ? 300 : 400;

  const userProfiles = users.map((userName) => FetchUserData(userName));

  var allDatesSet = new Set();

  userProfiles.forEach((user, index) => {
    for (var key in user.marks) {
      if (user.marks.hasOwnProperty(key)) {
        allDatesSet.add(user.marks[key].date);
      }
    }
  });

  var allDates = Array.from(allDatesSet);
  allDates.sort((a, b) => new Date(a) - new Date(b));

  var userRanksData = [];
  userProfiles.forEach((user, index) => {
    if (!user.marks) {
      console.log("sunai deta hai bhera nai hu mai!!");
      return;
    } else {
      const ranksData = getRanksData(user.marks, user.name, allDates);
      userRanksData.push(ranksData);
    }
  });

  const chartColors = ["#49a3f1", "#EC407A", "#FFA726"];
  const rankChartData = {
    labels: allDates.map(formatDate),
    datasets: userRanksData.map((user, index) => {
      const myColor = chartColors[index];
      return {
        borderColor: myColor,
        pointRadius: 2,
        pointBackgroundColor: myColor,
        pointBorderColor: myColor,
        pointHoverBackgroundColor: myColor,
        pointHoverBorderColor: myColor,
        data: user.ranks,
        label: user.name,
        fill: false,
        tension: 0.3,
      };
    }),
  };

  const rankChartOptions = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },

      y: {
        position: "right", // Display ranks on the right side
        reverse: true, // Invert the scale for ranks
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        position: "nearest",
        mode: "index",
        intersect: false,
      },
      title: {
        display: true,
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          pinch: {
            enabled: true, // Enable pinch zooming
          },
          wheel: {
            enabled: true, // Enable wheel zooming
          },
          mode: "x",
        },
      },
    },
  };

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
          <List>
            {userProfiles.map((user) => (
              <ListItem
                key={user.name}
                sx={{ background: "transparent", borderRadius: 2, mt: 1 }}
              >
                <ListItemButton component="a" href={`/profile/?q=${user.name}`}>
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
                        <Typography>{getFirstLetter(user.name)}</Typography>
                      )}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={user.name}
                    secondary={`Class: ${user.class}`}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
            <MKBox width="100%" my={6}>
              <MKTypography variant="subtitle2">RANKS</MKTypography>
              <Line
                data={rankChartData}
                options={rankChartOptions}
                height={chartHeight}
                width={chartWidth}
              />
            </MKBox>
      
        </Card>
      </MKBox>
    </>
  );
};

export default MultipleProfileRoot;
