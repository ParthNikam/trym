import React from "react";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import PrimaryColumn from "components/PrimaryColumn/PrimaryColumn";
import HeaderNav from "pages/HeaderNav";

const AboutUs = () => {
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
          zIndex:1000,
          pt:1
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
          <MKTypography variant="h2" my={4} mx={2}>
            Privacy Policy
          </MKTypography>
          <MKTypography
            sx={{ fontFamily: "Consolas" }}
            variant="h5"
            component="div"
            gutterBottom
          >
            Legal Stuff, cause we gotta have it.
          </MKTypography>
          <MKTypography variant="body1" paragraph sx={{ fontFamily: '"Consolas"' }}>
            At TRYM, we prioritize the privacy and security of our users. Please
            read the following points to understand how we handle user data:
          </MKTypography>
          <MKTypography variant="body1" paragraph sx={{ fontFamily: '"Consolas"' }}>
            1. <strong>Data Integrity:</strong> We do not tamper with user data.
            Your information is stored securely, and we take all necessary
            measures to ensure its integrity.
          </MKTypography>
          <MKTypography variant="body1" paragraph sx={{ fontFamily: '"Consolas"' }}>
            2. <strong>No Bullying Policy:</strong> We strictly prohibit any
            form of bullying based on user marks. Our platform is meant to
            encourage positive engagement and support among users.
          </MKTypography>
          <MKTypography variant="body1" paragraph sx={{ fontFamily: '"Consolas"' }}>
            3. <strong>Non-Commercial Use:</strong> We do not use user data for
            commercial purposes. Your data is solely used for analytics within
            the TRYM platform.
          </MKTypography>
          <MKTypography variant="body1" paragraph sx={{ fontFamily: '"Consolas"' }}>
            4. <strong>Data Accessibility:</strong> All data on TRYM is public
            by nature, eliminating any concerns regarding the transparency of
            our services.
          </MKTypography>
          <MKTypography variant="body1" paragraph sx={{ fontFamily: '"Consolas"' }}>
            5. <strong>Data Corrections:</strong> If you notice any missing or
            inaccurate data, please contact us through Instagram, LinkedIn, or
            in person to address the issue promptly.
          </MKTypography>
          <MKTypography variant="body1" paragraph sx={{ fontFamily: '"Consolas"' }}>
            6. <strong>Profile Picture Changes:</strong> Please note that
            changing your profile picture is a feature only available to
            personal friends of Parth Nikam. Don't feel sad if you're not a
            verified user. Thats just cause you're not friends with Parth Nikam.
          </MKTypography>
          <MKTypography variant="body1">
            7. <strong>Data Analytics Platform:</strong> TRYM is a data
            analytics platform. We do not create any of the data displayed on
            the platform; our goal is to provide users with insights into their
            academic performance through data analysis.
          </MKTypography>
          <MKTypography variant="body2">
            By using TRYM, you agree to abide by this privacy policy. We may
            update this policy from time to time, and any changes will be
            communicated to users. If you have any concerns or questions, feel
            free to reach out to us.
          </MKTypography>
        </Card>
      </MKBox>
    </PrimaryColumn>
  );
};

export default AboutUs;
