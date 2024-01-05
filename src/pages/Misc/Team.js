import React from "react";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Card from "@mui/material/Card";
import PrimaryColumn from "components/PrimaryColumn/PrimaryColumn";
import HeaderNav from "pages/HeaderNav";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import parthimage from "assets/images/pnikam.jpg";

const Team = () => {
  return (
    <PrimaryColumn>
      <MKBox
        sx={{
          backgroundImage: `linear-gradient(to bottom right, #6527BE, #9681EB, #45CFDD, #A7EDE7)`,
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
            p: 4,
            mb: 8,
            mx: 0,
            borderRadius: 10,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.8),
            backdropFilter: "saturate(300%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKTypography variant="h2" my={2} mx={2}>
            Our Team
          </MKTypography>

          <MKBox
            minHeight="45vh"
            sx={{
              mx: -2,
              my:4,
              backgroundImage: `url(${parthimage})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: "xxl",
              borderRadius: 10,
            }}
          />

          <MKTypography
            sx={{ fontFamily: "Consolas" }}
            gutterBottom
            variant="h4"
            component="div"
          >
            Parth Nikam{" "}
            <MKBox
              component="a"
              href="https://www.instagram.com/parthnikam108/"
            >
              <InstagramIcon
                sx={{
                  width: 25,
                  height: 25,
                  mx: 1,
                }}
              />
            </MKBox>
            <MKBox
              component="a"
              href="https://www.linkedin.com/in/parthnikam108/"
            >
              <LinkedInIcon
                sx={{
                  width: 25,
                  height: 25,
                  mx: 1,
                }}
              />
            </MKBox>
            <MKBox
              component="a"
              href="https://github.com/ParthNikam/"
            >
              <GitHubIcon
                sx={{
                  width: 25,
                  height: 25,
                  mx: 1,
                }}
              />
            </MKBox>
          </MKTypography>
          <MKTypography
            sx={{ my:2, fontFamily: '"Consolas"' }}
            variant="subtitle1"
            component="div"
            fontWeight="bold"
          >
            - Founder TRYM, TopKarega
          </MKTypography>
          <MKTypography
            sx={{fontFamily:"Consolas"}} variant="body1" paragraph
          >
            I started TRYM just for fun. The JITFI score board is open on my
            desktop and my marks are pretty horrendus. I just wanted to see what
            it looked like on a graph. Thats how TRYM was created.
          </MKTypography>

          <MKTypography
            sx={{fontFamily:"Consolas"}} variant="body1" paragraph
          >
            In the coming time, I'm going to add a ton of cool features to TRYM with a killer dashboard for checking out your graphs—think sleek and super easy to use. But wait, there's more! Brace yourself for some AI action, including cool stuff like clustering and performance markers. Yep, you heard it right—AI is crashing the party! Because, hey, what's tech without a bit of AI magic, right? Get ready for a laid-back yet turbocharged TRYM experience! 🚀✨
          </MKTypography>

          <MKTypography
           sx={{fontFamily:"Consolas"}} variant="body1" paragraph
          >
            If you're interesting in talking about progarmming or business or
            even philosophy, hit me up in J10 or LinkedIn.
          </MKTypography>
        </Card>
      </MKBox>
    </PrimaryColumn>
  );
};

export default Team;
