import { Box, Typography, Grid } from "@mui/material";
import background from "../../assets/background.png";
import Temas from "../components/Temas";

function IntroPage() {
  return (
    <Box sx={styles.home}>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          background: "rgba(0,0,0,0)",
        }}
      >
        <Box sx={styles.banner} />
        <Box sx={styles.about}>
          <Typography variant="h3">Bienvenido(a) a nilearn</Typography>
          <Typography variant="h5" sx={{ px: "20%", py: 4 }}>
            Sumérgete en el fascinante mundo de los faraones, los dioses y las
            imponentes pirámides que aún nos deslumbran con su grandeza.
            Acompáñanos mientras desenterramos los secretos del Valle de los
            Reyes y descubrimos el poderoso Nilo, el río que dio vida y sustento
            a esta antigua civilización.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: "100%" }}>
        <Temas />
      </Box>
    </Box>
  );
}

export default IntroPage;

const styles = {
  banner: {
    backgroundImage: `url(${background})`,
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    color: "black",
    display: "flex",
    justifyContent: "left",
    padding: "0 2rem",
    overflow: "visible",
    filter: "blur(5px)",
    position: "absolute",
    zIndex: -1,
  },
  about: {
    display: "grid",
    flexDirection: "column",
    textAlign: "center",
    placeContent: "center",
    width: "100%",
    height: "50%",
    px: 8,
    rowGap: 4,
    zIndex: 50,
    textShadow: "1.5px 2px 3px black",
    color: "white",
  },
};
