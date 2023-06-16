import { Box, Grid, Paper, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        background: amber[100],
        display: "grid",
        placeContent: "center",
      }}
    >
      <Grid item md={12} mb={6}>
        <Typography variant="h3" textAlign={"center"}>
          Elige el tema de tu preferencia
        </Typography>
      </Grid>
      <Grid
        container
        spacing={4}
        sx={{
          textAlign: "center",
          "& .MuiGrid-item": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 2,
            "& .MuiPaper-root": {
              background: amber[50],
              borderRadius: 100,
              "&:hover": { background: amber[200], cursor: "pointer" },
            },
          },
        }}
      >
        <Grid item md={12}>
          <Paper sx={{ height: "100px", width: "100px" }} /> Sistema político
        </Grid>
        <Grid item md={6}>
          <Paper sx={{ height: "100px", width: "100px" }} />
          Arte
        </Grid>
        <Grid item md={6}
        onClick={() => navigate('/religion')}
        >
          <Paper sx={{ height: "100px", width: "100px" }} />
          Religión
        </Grid>
        <Grid item md={4}>
          <Paper sx={{ height: "100px", width: "100px" }} /> Gastronomia
        </Grid>
        <Grid item md={4}  onClick={() => navigate('/arquitectura')} >
          <Paper sx={{ height: "100px", width: "100px" }} /> Arquitectura
        </Grid>
        <Grid item md={4}  onClick={() => navigate('/estrategia-militar')} >
          <Paper sx={{ height: "100px", width: "100px" }} /> Estrategia militar
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
