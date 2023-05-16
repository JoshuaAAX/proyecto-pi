import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";

import { useLocation } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

import logo from "../../assets/pyramid.png";

const Navbar = () => {
  const path = useLocation().pathname;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#DBB489" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            disableRipple
          >
            <img src={logo} alt="Nilearn Logo" height={"40px"} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            color="black"
            sx={{ flexGrow: 1 }}
          >
            Nilearn
          </Typography>
          {path === "/login" && (
            <IconButton disableRipple>
              <HomeIcon sx={{ color: "black" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
