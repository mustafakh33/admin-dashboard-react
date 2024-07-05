import { Box, CssBaseline, Typography, styled } from "@mui/material";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./Theme";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = useState( localStorage.getItem("mode") ||'light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  localStorage.setItem("mode", mode);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar  setMode={setMode} open={open} handleDrawerOpen={handleDrawerOpen} />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
