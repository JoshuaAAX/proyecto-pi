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


  return (
    <Box sx={{ mb: "60px", width: "100vw" }}>
      <AppBar
        position="fixed"
        top={0}
        right={0}
        height="60px"
        sx={{ backgroundColor: "#DBB489" }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate("/mainpage")}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={() => navigate("/mainpage")}
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
          </Box>
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
