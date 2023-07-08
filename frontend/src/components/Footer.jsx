import { Box, Grid, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: "#DBB489",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
          "& .MuiTypography-root": { fontSize: "0.9rem" },
          "& .MuiGrid-item": {
            textAlign: "center",
          },
          mb: 2,
        }}
      >
        <Grid item xs={6} md={3}>
          <Typography onClick={() => navigate("/about")}> <Link>Sobre Nosotros</Link></Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography onClick={() => navigate("/faq")}> <Link>Preguntas Frecuentes</Link></Typography>
        </Grid>
        
      </Grid>
      <Copyright />
    </Box>
  );
};

export default Footer;

const Copyright = () => {
  const date = new Date().getFullYear();
  return (
    <Box >
      <Typography align="center" fontSize="0.9rem" >
        Copyright © <Link>Nilearn</Link> {date}.
      </Typography>
    </Box>
  );
};
