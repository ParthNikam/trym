import React from "react";
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import PrimaryColumn from "components/PrimaryColumn/PrimaryColumn";

// Components
import SearchBar from "functions/SearchBar";
import HeaderNav from "pages/HeaderNav";
import FetchRandomUser from "functions/LoadData/FetchRandomUser";
import Banner from "./Banner";
import bgImage from "assets/images/bg1.jpg";

const HomePageRoot = () => {
  const navigate = useNavigate();
  const randomUser = FetchRandomUser();
  const handleClick = () => {
    if (randomUser) {
      navigate(`/profile/?q=${encodeURIComponent(randomUser.name)}`);
    }
  };

  return (
    <>
      <PrimaryColumn>
        <MKBox>
          <MKBox
            minHeight="45vh"
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: "xxl",
              borderRadius: "2%",
            }}
          >
            <MKBox sx={{ pt: 1 }}>
              <HeaderNav />
            </MKBox>
          </MKBox>

          <MKBox sx={{ mt: -20 }}>
            <Card
              sx={{
                p: 2,
                mb: 8,
                mx: 0,
                borderRadius: 10,
                backgroundColor: ({
                  palette: { white },
                  functions: { rgba },
                }) => rgba(white.main, 0.8),
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: ({ boxShadows: { xxl } }) => xxl,
              }}
            >
              <SearchBar />
              <MKBox
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <MKBox sx={{ flex: 1, marginLeft:4 }}>
                  <MKButton onClick={handleClick} color="primary">Surprise Me!</MKButton>
                </MKBox>
              </MKBox>

              <Banner Text={"TRYM"} Subtitle={"Track Your Marks"} />
              <MKBox minHeight="30vh" />
            </Card>
          </MKBox>
        </MKBox>
      </PrimaryColumn>
    </>
  );
};

export default HomePageRoot;
