import { Button, Container, Grid, Stack, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Estatua } from "./Estatua";
import { OrbitControls } from "@react-three/drei";

import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, type: "tween" },
      clipPath: ["inset(0 100% 0 0)", "inset(0 0 0 0)"],
    },
  };

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
          <motion.div
            initial={{ y: "-10%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 2,
              delay: 0.5,
              type: "spring",
              bounce: 0.85,
            }}
            style={{ display: "flex", height: "100%" }}
          >
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
          </motion.div>
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
          <motion.p
            style={{
              marginTop: "40px",
              marginBottom: { md: 0, xs: "40px" },
              fontSize: 26,
              textAlign: "center",
            }}
          >
            <motion.span
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{ fontWeight: "bold" }}
            >
              Cultura egipcia
            </motion.span>
            , un aprendizaje sencillo y divertido te espera aquí.
          </motion.p>

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
