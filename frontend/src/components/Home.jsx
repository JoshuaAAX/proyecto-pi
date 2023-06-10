import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"; // Import OrbitControls from the correct location
import { useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

extend({ OrbitControls });
export function Model(props) {
  const { nodes, materials } = useGLTF(
    "../../assets/nefertitis_bust_like_in_the_museum.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}
useGLTF.preload("../../assets/nefertitis_bust_like_in_the_museum.glb");

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => controlsRef.current && controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.1}
      rotateSpeed={0.2}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={1}
      minDistance={20}
      maxDistance={50}
      // Uncomment these lines if you also want to limit the horizontal rotation
      // minAzimuthAngle={-Math.PI / 2}
      // maxAzimuthAngle={Math.PI / 2}
    />
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="x1"
      sx={{
        height: "100%",
        width: "85%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid container>
        <Grid item xs={5} md={4} px={1} sm={12} style={{ height: "300px" }}>
          <Canvas
            shadows
            gl={{ alpha: true }}
            camera={{ position: [-10, 3, 0], fov: 1}}
            style={{ width: "130%", height: "130%" }}
          >
            <ambientLight intensity={0.3} />
            <CameraControls />
            <Model />
          </Canvas>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          px={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h5">
            ¡Donde aprender sobre la cultura egipcia es fácil y divertido!
          </Typography>
          <Stack
            direction={{ xs: "row", md: "column" }}
            spacing={2}
            sx={{
              mt: 5,
              mb: { md: 0, xs: 10 },
              width: { xs: "100%", md: "40%" },
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