import { Grid, Typography, Box, Paper } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import { Gato } from "../components/gato";
import { amber } from "@mui/material/colors";

import sistema from "../../assets/mainIcons/sp.png";
import arte from "../../assets/mainIcons/arteR.png";
import religion from "../../assets/mainIcons/ReligionR.png";
import gastronomia from "../../assets/mainIcons/gastronomia.png";
import arquitectura from "../../assets/mainIcons/arqui.png";
import estrategia from "../../assets/mainIcons/estrategia.png";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        background: amber[100],
        display: "flex",
        alignItems: "center",
        placeContent: "center",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          background: amber[100],
          display: "grid",
          placeContent: "center",
        }}
      >
        <Grid item md={12} mb={4}>
          <Typography variant="h4" textAlign={"center"}>
            Elige el tema de tu preferencia
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
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
                height: "60px",
                width: "60px",
                "&:hover": { background: amber[200], cursor: "pointer" },
              },
            },
          }}
        >
          <Grid item md={12} onClick={() => navigate("/politica")}>
            <Paper sx={{ borderColor: "black", border: "2px solid" }}>
              <img src={sistema} height={"40px"} style={{ marginTop: "8px" }} />
            </Paper>
            Sistema político
          </Grid>
          <Grid item md={6}onClick={() => navigate("/arte")}>
            <Paper sx={{ borderColor: "black", border: "2px solid" }}>
              <img src={arte} height={"40px"} style={{ marginTop: "8px" }} />
            </Paper>
            Arte
          </Grid>

          <Grid item md={6} onClick={() => navigate("/religion")}>
            <Paper sx={{ borderColor: "black", border: "2px solid" }}>
              <img
                src={religion}
                height={"40px"}
                style={{ marginTop: "8px" }}
              />
            </Paper>
            Religión
          </Grid>
          <Grid item md={4} onClick={() => navigate("/gastronomia")}>
            <Paper sx={{ borderColor: "black", border: "2px solid" }}>
              <img
                src={gastronomia}
                height={"40px"}
                style={{ marginTop: "8px" }}
              />
            </Paper>
            Gastronomia
          </Grid>
          <Grid item md={4} onClick={() => navigate("/arquitectura")}>
            <Paper sx={{ borderColor: "black", border: "2px solid" }}>
              <img
                src={arquitectura}
                height={"40px"}
                style={{ marginTop: "8px" }}
              />
            </Paper>
            Arquitectura
          </Grid>
          <Grid item md={4} onClick={() => navigate("/estrategia-militar")}>
            <Paper sx={{ borderColor: "black", border: "2px solid" }}>
              <img
                src={estrategia}
                height={"40px"}
                style={{ marginTop: "8px" }}
              />
            </Paper>
            Estrategia militar
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        sx={{
          mt: 5,
          ml: 20,

          mb: { md: 10, xs: 0 },
          width: "20%",
          height: "50%",
        }}
      >
        <Canvas
          shadows
          gl={{ alpha: true }}
          camera={{ position: [0, 0, 10], fov: 80 }}
          style={{ width: "100%", height: "100%" }}
        >
          {/* eslint-disable-next-line react/no-unknown-property*/}
          <ambientLight intensity={2} color="white" />
          {/* Nueva luz ambiental */}
          <OrbitControls makeDefault minPolarAngle={1} maxPolarAngle={2} />
          <Gato />
        </Canvas>
      </Grid>
    </Box>
  );
};

export default MainPage;
