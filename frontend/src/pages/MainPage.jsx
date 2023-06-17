import { Button, Container, Grid, Stack, Typography ,Box,Paper} from "@mui/material";

import { useNavigate } from "react-router-dom";
import {Canvas, useThree} from "@react-three/fiber"
import { AmbientLight } from "three";
import React, {Suspense,useRef, useEffect } from "react";

import { OrbitControls } from "@react-three/drei";
import {Gato} from "../components/gato"
import { amber } from "@mui/material/colors";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{
      height: "100vh",
      background: amber[100],
      display: "flex",
      alignItems:"center",
      placeContent: "center",
    }}>
       
  
    <Box
      sx={{
        height: "100vh",
        background: amber[100],
        display: "grid",
        placeContent: "center",
      }}
    >
      <Grid item md={12} mb={10}>
        <Typography variant="h3" textAlign={"center"}>
          Elige el tema de tu preferencia
        </Typography>
      </Grid>
      <Grid
        container


        spacing={3}
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
    
    <Grid container   sx={{
              mt: 5,
              ml:20,
         
              mb: { md: 10, xs: 0},
              width: "20%", 
              height: "50%"
              
            }}>
        <Canvas shadows
            gl={{ alpha: true }}
            camera={{ position: [0, 0, 10], fov: 80 }}
            style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={2} color="white" /> {/* Nueva luz ambiental */}
      <OrbitControls  enableZoom={true} minDistance={0} maxDistance={5} enableRotate={true} />
     
   <Gato/>

        </Canvas>

      
      </Grid></Box>
  );
};

export default MainPage;
