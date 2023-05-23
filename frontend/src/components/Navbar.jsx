import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

import logo from "../../assets/pyramid.png";

import { supabase } from "./../../backend/client";
import { useState } from "react";
import { useEffect } from "react";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const routes = ["/login", "/signup"];

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
          {routes.includes(path) && (
            <IconButton disableRipple onClick={() => navigate("/")}>
              <HomeIcon sx={{ color: "black" }} />
            </IconButton>
          )}
          {session ? (
            <UserMenu
              bgcolor="slategray"
              session={session}
              handleLogout={handleLogout}
            />
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
