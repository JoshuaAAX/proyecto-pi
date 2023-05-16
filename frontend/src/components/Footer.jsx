import { Box, Container, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        backgroundColor: "#DBB489",
        position: "static",
        bottom: 0,
        width: "100%",
        height: "100px"
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
          <Typography>Contacto</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography>Términos y condiciones</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography>Políticas de Privacidad</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <Typography>Guía de Uso</Typography>
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
    <Box>
      <Typography align="center" fontSize="0.9rem">
        Copyright © <Link>Nilearn</Link> {date}.
      </Typography>
    </Box>
  );
};
