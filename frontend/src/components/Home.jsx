import { Button, Container, Grid, Stack, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import {Canvas, useThree} from "@react-three/fiber"
import { AmbientLight } from "three";
import React, {Suspense,useRef, useEffect } from "react";
import {Estatua} from "./Estatua"
import { OrbitControls } from "@react-three/drei";


const Home = () => {
  const navigate = useNavigate();
  const controlsRef = useRef();



  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100%",
        width: "100%",
        display: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container   sx={{
              mt: 5,
              ml:-20,
              
              mb: { md: 10, xs: 0},
              width: "70%", 
              height: "80%"
              
            }}>
        <Canvas shadows
            gl={{ alpha: true }}
            camera={{ position: [0, 0, 30], fov: 100 }}
            style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.7} />
      <OrbitControls  enableZoom={true} minDistance={25} maxDistance={40} enableRotate={true} />
     
          <Estatua />

        </Canvas>

      
      </Grid>
      <Grid
          item
          xs={100}
          mr={30}
          md={8}
          px={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4"  sx={{
              mt: 5,
              mb: { md: 0, xs: 10 },
              width: { xs: "100%", md: "120%" }
              
            }}>
            ¡Donde aprender sobre la cultura egipcia es fácil y divertido!
          </Typography>
          <Stack
            direction={{ xs: "row", md: "column" }}
            spacing={2}
            sx={{
              mt: 5,
              mb: { md: 0, xs: 10 },
              width: { xs: "100%", md: "100%" },
              "& .MuiButton-root": {
                color: "brown",
                outline: "1px solid #DBB489",
                backgroundColor: "rgba(219, 180, 137, 0.1)",
              },
            }}
          >
            <Button onClick={() => navigate("/signup")}>
              Crear una cuenta
            </Button>
            <Button onClick={() => navigate("/login")}>
              Ya tengo una cuenta
            </Button>
          </Stack>
           
           </Grid>
          
    </Container>
  );
};

export default Home;