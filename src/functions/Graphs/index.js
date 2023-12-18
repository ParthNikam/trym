import React, { useEffect, useState } from "react";
import MKBox from "components/MKBox";
import Grid from "@material-ui/core/Grid";
import MKTypography from "components/MKTypography";
import Divider from "@mui/material/Divider";

import Card from "@mui/material/Card";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import Chart from "chart.js/auto";
Chart.register(zoomPlugin);

// Assuming formatDate is a function that formats the date as needed
function formatDate(dateString) {
  const options = { day: "numeric", month: "short" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}

const getMarksData = (marks, type) => {
  const Marks = Object.values(marks)
    .filter((mark) => mark.type === type)
    .map((mark) => ({
      math: mark.math !== undefined ? mark.math : null,
      phsx: mark.phsx !== undefined ? mark.phsx : null,
      chem: mark.chem !== undefined ? mark.chem : null,
      total: mark.total !== undefined ? mark.total : null,
      date: mark.date,
    }));

  // Sort the array based on the 'date' property
  const sortedMarks = Marks.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Initialize an object to store arrays for math, phsx, chem, total, and dates
  const MarksData = {
    math: [],
    phsx: [],
    chem: [],
    total: [],
    dates: [],
  };

  // Populate the arrays in mainsData
  sortedMarks.forEach((entry) => {
    MarksData.math.push(entry.math);
    MarksData.phsx.push(entry.phsx);
    MarksData.chem.push(entry.chem);
    MarksData.total.push(entry.total);
    MarksData.dates.push(formatDate(entry.date));
  });

  return MarksData;
};

const getRanksData = (marks) => {
  const allRanksAndDates = Object.values(marks).map((mark) => ({
    rank: mark.rank !== undefined ? mark.rank : null,
    date: mark.date,
  }));

  // Sort the array based on the 'date' property
  const sortedRanksAndDates = allRanksAndDates.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const ranksData = {
    ranks: sortedRanksAndDates.map((entry) => entry.rank), // Keep ranks as they are
    dates: sortedRanksAndDates.map((entry) => formatDate(entry.date)),
  };

  return ranksData;
};

const stichMarksTogether = (marks) => {
  const ranksData = getRanksData(marks);
  const mainsData = getMarksData(marks, "mains");
  const advanceData = getMarksData(marks, "advance");

  const rankChartData = {
    labels: ranksData.dates,
    datasets: [{ data: ranksData.ranks, label: "Rank", tension: 0.3 }],
  };

  const mainsChartData = {
    labels: mainsData.dates,
    datasets: [
      { data: mainsData.math, label: "Math", tension: 0.3 },
      { data: mainsData.phsx, label: "Physics", tension: 0.3 },
      { data: mainsData.chem, label: "Chemistry", tension: 0.3 },
      { data: mainsData.total, label: "Total", tension: 0.3 },
    ],
  };

  const advanceChartData = {
    labels: advanceData.dates,
    datasets: [
      { data: advanceData.math, label: "Math", tension: 0.3 },
      { data: advanceData.phsx, label: "Physics", tension: 0.3 },
      { data: advanceData.chem, label: "Chemistry", tension: 0.3 },
      { data: advanceData.total, label: "Total", tension: 0.3 },
    ],
  };

  return { rankChartData, mainsChartData, advanceChartData };
};

const Graphs = ({ marks }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const chartWidth = 600;
  const chartHeight = isSmallScreen ? 500 : 400;

  if (!marks) {
    // Handle the case when marks is undefined
    return (
      <MKTypography variant="body2" color="error">
        FUXXKED UPP!
      </MKTypography>
    );
  }

  const { rankChartData, mainsChartData, advanceChartData } =
    stichMarksTogether(marks);

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

  const mainsChartOptions = {
    scales: {
      x: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
      y: {
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

  return (
    <>
      <Card
        sx={{
          p: 2,
          mb: 4,
          mx: -2,
          borderRadius: 3,
          background:"rgba(250,250,250,0.5)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox width="100%" sx={{ mt: 5 }}>
          <MKTypography variant="subtitle2">RANKS</MKTypography>
          <Line
            data={rankChartData}
            options={rankChartOptions}
            height={chartHeight}
            width={chartWidth}
          />
        </MKBox>
      </Card>

      <Card
        sx={{
          p: 2,
          mb: 4,
          mx: -2,
          borderRadius: 3,
          background:"rgba(250,250,250,0.5)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox width="100%" sx={{ mt: 5 }}>
          <MKTypography variant="subtitle2">MAINS SCORE</MKTypography>
          <Line
            data={mainsChartData}
            options={mainsChartOptions}
            height={chartHeight}
            width={chartWidth}
          />
        </MKBox>
      </Card>

      <Card
        sx={{
          p: 2,
          mb: 4,
          mx: -2,
          borderRadius: 3,
          background: "transparent",
          background:"rgba(250,250,250,0.5)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox width="100%" sx={{ mt: 5 }}>
          <MKTypography variant="subtitle2">ADVANCE SCORE</MKTypography>
          <Line
            data={advanceChartData}
            options={mainsChartOptions}
            height={chartHeight}
            width={chartWidth}
          />
        </MKBox>
      </Card>
    </>
  );
};

export default Graphs;
