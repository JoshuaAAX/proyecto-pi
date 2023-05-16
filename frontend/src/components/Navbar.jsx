import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

//import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../assets/pyramid.png";

const Navbar = () => {
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
          <Button sx={{color: "brown", outline: "1px solid brown"}}>
            Ingresar
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
