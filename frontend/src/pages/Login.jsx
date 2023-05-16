import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import "../styles/Login.css";

import { useNavigate } from "react-router-dom";

import banner from "../../assets/sphinx.jpg";
import GoogleIcon from "../../assets/google.png";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

const Login = () => {
  const navigate = useNavigate();
  const tema = useTheme();
  const matches = useMediaQuery(tema.breakpoints.up("md"));

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          height: "100vh",
          px: 7,
          pb: 8,
          pt: 2,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F7EDD4",
        }}
      >
        {matches && (
          <Grid
            item
            height="95%"
            xs={false}
            sm={4}
            md={5}
            sx={{
              backgroundImage: `url(${banner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
          />
        )}
        <Grid
          item
          height="95%"
          xs={12}
          sm={12}
          md={6}
          component={Paper}
          elevation={6}
          sx={{
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            borderTopLeftRadius: { xs: "20px", md: "0px" },
            borderBottomLeftRadius: { xs: "20px", md: "0px" },
            display:"flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              my: 6,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography fontSize="1.8rem" fontWeight={600} color="#987E62">
              Iniciar sesión
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: matches ? "70%" : "80%" }}
            >
              <TextField
                required
                size="small"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                variant="filled"
                sx={{ mt: 1, mb: 2 }}
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    borderRadius: 10,
                    border: "1px solid darkgrey",
                  },
                }}
              />
              <TextField
                required
                size="small"
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="filled"
                sx={{ mb: 1 }}
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    borderRadius: 10,
                    border: "1px solid darkgrey",
                  },
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={matches ? "Mantener sesión iniciada" : "Recuérdame"}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  py: 1,
                  borderRadius: "20px",
                  backgroundColor: "#DBB489",
                  fontSize: "1rem",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "darkslategrey",
                  },
                }}
              >
                Ingresar
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                textTransform="capitalize"
                sx={{
                  mt: 2,
                  mb: 2,
                  py: 1,
                  borderRadius: "20px",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: "1rem",
                  fontWeight: 200,
                  "&:hover": { color: "white" },
                }}
                startIcon={
                  <img
                    src={GoogleIcon}
                    alt="Google"
                    width="20px"
                    height="20px"
                  />
                }
              >
                Continuar con Google
              </Button>
              <Grid>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"No tienes una cuenta? Regístrate"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
