import { Button, Container, Grid, Stack, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Canvas, useThree } from "@react-three/fiber";
import { AmbientLight } from "three";
import React, { Suspense, useRef, useEffect } from "react";
import { Estatua } from "./Estatua";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  const navigate = useNavigate();

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
      <Grid
        container
        sx={{
          mt: 5,
          mb: { md: 10, xs: 0 },
          width: "100%",
          height: "80%",
        }}
      >
        <Grid item md={5} xs={12}>
          <Canvas
            shadows
            gl={{ alpha: true }}
            camera={{ position: [0, 0, 30], fov: 100 }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={0.7} />
            <OrbitControls
              makeDefault
              minDistance={28}
              maxDistance={28}
              minPolarAngle={1}
              maxPolarAngle={1.5}
              enablePan={false}
            />
            <Estatua />
          </Canvas>
        </Grid>
        <Grid
          item
          md={7}
          px={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
    sx={{
      mt: 5,
      mb: { md: 0, xs: 5 },
      width: { xs: "100%", md: "120%" },
      fontSize: { xs: 20, md: 30 },
      textAlign: "center",
    }}
    dangerouslySetInnerHTML={{
      __html: '<b>Cultura egipcia</b>, un aprendizaje sencillo y ameno te espera aquí.',
    }}
  />
          <Stack
            direction={{ xs: "row", md: "column" }}
            spacing={2}
            sx={{
              mt: { xs: 0, md: 5 },
              mb: { md: 0, xs: 10 },
              width: { xs: "100%", md: "60%" },
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
      </Grid>
    </Container>
  );
};

export default Home;
