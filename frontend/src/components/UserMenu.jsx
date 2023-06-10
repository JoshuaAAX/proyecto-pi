import * as React from "react";
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import DashboardRounded from "@mui/icons-material/DashboardRounded";
import Person from "@mui/icons-material/Person";

import { Link } from "react-router-dom";
import { supabase } from "../../backend/client";
import avatar_default from "../../assets/default.png";

// eslint-disable-next-line react/prop-types
const UserMenu = ({ bgcolor, session, handleLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


 


  // eslint-disable-next-line react/prop-types
  const nickname = (session.user.user_metadata.nickname);

  return (
    <React.Fragment>
      {!session ? null : (
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                disableRipple
              >
                <Avatar
                  alt=".defaul.png"  
                  src = {avatar_default}
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: bgcolor,
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              fontFamily: "Montserrat",
              backgroundColor: bgcolor,
              sx: {
                overflow: "hidden",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  ml: -0.5,
                  mr: 1,
                },
                "& .MuiMenuItem-root": {
                  fontFamily: "Montserrat",
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>
            <Avatar alt=".defaul.png"  src = {avatar_default} sx={{ width: 32, height: 32 }} />
              {
                <span style={{ color: "gray", fontWeight: "bold", marginLeft: "10px" }}>
                  {"usuario"}
                </span>
              }
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DashboardRounded fontSize="small" />
              </ListItemIcon>
              Dashboard
            </MenuItem>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem>
                <ListItemIcon>
                  <Person fontSize="small" />
                </ListItemIcon>
                Mi perfil
              </MenuItem>
            </Link>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Ajustes
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout
                  fontSize="small"
                  sx={{ color: bgcolor, fontWeight: "bold" }}
                />
              </ListItemIcon>
              <span style={{ color: bgcolor, fontWeight: "bold" }}>
                Cerrar sesión
              </span>
            </MenuItem>
          </Menu>
        </div>
      )}
    </React.Fragment>
  );
};

export default UserMenu;
