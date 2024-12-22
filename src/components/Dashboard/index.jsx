import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizIcon from "@mui/icons-material/Quiz";
import ArticleIcon from "@mui/icons-material/Article";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import PollIcon from "@mui/icons-material/Poll";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import NoteIcon from "@mui/icons-material/Note";

import Asosiy from "../Asosiy/index.jsx";
import Test from "../Test/index.jsx";
import Natijalar from "../Natijalar/index.jsx";
import Pedagog from "../Pedagog/index.jsx";
import Dasturchi from "../Dasturchi/index.jsx";
import { AppProvider } from "@toolpad/core";
import Eslatma from "../Eslatma/index.jsx";
import { AccountCircle } from "@mui/icons-material";
import Hisob from "../Hisob/index.jsx";
import LoginPage from "../Login/index.jsx";


const NAVIGATION = [
  {
    kind: "header",
    title: "Asosiy sahifalar",
  },
  {
    segment: "",
    title: "Asosiy",
    icon: <DashboardIcon />,
  },
  {
    segment: "Test",
    title: "Test Ishlash",
    icon: <QuizIcon />,
  },
  {
    segment: "Natijalar",
    title: "Natijalar",
    icon: <PollIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Qoshimcha",
  },
  {
    segment: "qoshimcha",
    title: "Blog",
    icon: <ArticleIcon />,
    children: [
      {
        segment: "Pedagog",
        title: "Pedagog",
        icon: <SchoolIcon />,
      },
      {
        segment: "Dasturchi",
        title: "Dasturchi",
        icon: <CodeIcon />,
      },
      {
        segment: "Eslatma",
        title: "Eslatma",
        icon: <NoteIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Dasturchiga Qo'llab-quvvatlash",
    icon: <ThumbUpIcon />,
  },
  {
    segment: "Signup",
    title: "Account",
    icon: <AccountCircle />,
  }
];

// Tema va boshqalar
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  
});

function DemoPageContent() {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Click: 8802 5112 4013 0843</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider navigation={NAVIGATION} theme={demoTheme} window={demoWindow}>
      <Router basename="/">
        <DashboardLayout>
          {/* Top bar with Logo and Sign Up button */}
          

          {/* Routing */}
          <Routes>
            <Route path="/" element={<Asosiy />} />
            <Route path="/Test" element={<Test />} />
            <Route path="/Natijalar" element={<Natijalar />} />
            <Route path="/integrations" element={<DemoPageContent />} />
            <Route path="/qoshimcha/Pedagog" element={<Pedagog />} />
            <Route path="/qoshimcha/Dasturchi" element={<Dasturchi />} />
            <Route path="/qoshimcha/eslatma" element={<Eslatma />} />
            <Route path="/Signup" element={<Hisob />} />
            <Route path="/Login" element={<LoginPage />} />
          </Routes>
        </DashboardLayout>
      </Router>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
