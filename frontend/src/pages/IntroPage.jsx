import { Box, Typography, Grid } from "@mui/material";
import background from "../../assets/background.png";
import { amber } from "@mui/material/colors";
import Temas from "../components/Temas";

function IntroPage() {
  return (
    <Box sx={styles.home}>
      <Box sx={styles.container}>
        <Grid sx={styles.banner}>
          <Box sx={styles.about}>
            <Typography variant="h4">Bienvenido(a) a nilearn</Typography>
            <Typography variant="h6">
              Sumérgete en el fascinante mundo de los faraones, los dioses y las
              imponentes pirámides que aún nos deslumbran con su grandeza.
              Acompáñanos mientras desenterramos los secretos del Valle de los
              Reyes y descubrimos el poderoso Nilo, el río que dio vida y
              sustento a esta antigua civilización.
            </Typography>
          </Box>
        </Grid>
      </Box>
      <Box sx={{ height: "100%", background: amber[100] }}>
        <Temas />
      </Box>
    </Box>
  );
}

export default IntroPage;

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
    color: "black",
    display: "flex",
    justifyContent: "left",
    padding: "0 2rem",
    overflow: "visible",
  },
  about: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    position: "absolute",
    top: "25%",
    px: 8,
    rowGap: 4,
  },
};