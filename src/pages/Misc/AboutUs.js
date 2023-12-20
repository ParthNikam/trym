import React from "react";



import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
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
         About Us
          </MKTypography>

              <MKTypography sx={{fontFamily:"Consolas"}} variant="h5" component="div" gutterBottom>
                Welcome to TRYM by Parth Nikam.
              </MKTypography>
              <MKTypography sx={{fontFamily:"Consolas"}} variant="body1" paragraph>
                Hi there! I'm Parth Nikam, the founder of TopKarega, and I'm
                excited to introduce you to my latest app: TRYM - Track
                Your Marks.
              </MKTypography>
              <MKTypography sx={{fontFamily:"Consolas"}} variant="body1" paragraph>
                TRYM is designed with one goal in mind — helping students gain
                valuable insights into their academic performance. It's a tool
                that goes beyond traditional grade tracking by providing a
                graphical representation of your marks.
              </MKTypography>
              <MKTypography sx={{fontFamily:"Consolas"}} variant="body1" paragraph>
                With TRYM, you can not only track your performance but also
                compare your marks with friends and see the average performance
                of your class. It's an incredible resource for anyone seeking a
                deeper understanding of their academic journey.
              </MKTypography>
              <MKTypography sx={{fontFamily:"Consolas"}} variant="body1" paragraph>
                As of November 30th, TRYM was built in just a week! It's a
                testament to my commitment to delivering practical solutions
                for students. Although it's already a powerful tool, we have big
                plans for its future development.
              </MKTypography>
              <MKTypography sx={{fontFamily:"Consolas"}} variant="body1" paragraph>
                Looking ahead, my vision for TRYM involves leveraging AI to analyze student data and provide actionable
                insights. 
              </MKTypography>
              <MKTypography sx={{fontFamily:"Consolas"}} variant="body1">
                Thank you for being a part of the TRYM journey. Stay tuned for
                exciting updates and enhancements as I continue to refine and
                expand this valuable tool.
              </MKTypography>
        </Card>
      </MKBox>
    </PrimaryColumn>    
  );
};

export default AboutUs;
