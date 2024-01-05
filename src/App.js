// App.js

// React compoents
import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";

// Routes
import HomePage from "pages/HomePage";
import ProfilePage from "pages/ProfilePage";
import LeaderBoardPage from "pages/LeaderBoardPage";
import CreateDatabase from "functions/LoadData/CreateDatabase";
import CreateLeaderBoard from "functions/LeaderBoard/CreateLeaderBoard";
import FooterNav from "pages/FooterNav";

import AboutUs from "pages/Misc/AboutUs";
import Team from "pages/Misc/Team";
import PrivacyPolicy from "pages/Misc/PrivacyPolicy";

export default function App() {
  const initializeData = async () => {
    await CreateDatabase();
    await CreateLeaderBoard();
  };

  // Call the initialization function when the component mounts
  useEffect(() => {
    initializeData();
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Just to avoid additional fuckups on deploying something new */}
          <Route path="*" element={<Navigate to="/home" replace />}/>

          <Route path="/home" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/profile/" element={<ProfilePage />} />
          <Route exact path="/leader-board/" element={<LeaderBoardPage />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/team" element={<Team />} />
        </Routes>
        <FooterNav />
      </Router>
    </ThemeProvider>
  );
}
