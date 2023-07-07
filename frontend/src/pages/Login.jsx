import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
  Divider,
} from "@mui/material";

import "../styles/Login.css";

import { useNavigate } from "react-router-dom";

import banner from "../../assets/sphinx.jpg";
import GoogleIcon from "../../assets/google.png";
import { amber } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { supabase } from "../../backend/client";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const tema = useTheme();
  const matches = useMediaQuery(tema.breakpoints.up("md"));

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/intro");
      }
    });
  }, [navigate]);

  const initialState = { email: "", password: "" };
  const [user, setUser] = useState(initialState);

  const loginWithGoogle = async () => {
    const redirectPath = location.origin;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${redirectPath}/signup`,
      },
    });

    if (error) console.log(error);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log(data);

    if (error) {
      toast.error((t) => (
        <span>
          Error
          <Button
            disableRipple
            size="small"
            sx={{
              textTransform: "capitalize",
              ml: 1,
              color: "white",
              background: "#474747",
            }}
            onClick={() => toast.dismiss(t.id)}
          >
            cerrar
          </Button>
        </span>
      ));
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        px: 7,
        pb: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: matches ? "#F7EDD4" : "#FFFFFF",
      }}
    >
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          error: {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          },
        }}
      />
      {matches && (
        <Grid
          item
          height="80%"
          xs={false}
          sm={4}
          md={4}
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
        height="80%"
        xs={12}
        sm={12}
        md={5}
        component={matches && Paper}
        elevation={6}
        sx={{
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          borderTopLeftRadius: { xs: "20px", md: "0px" },
          borderBottomLeftRadius: { xs: "20px", md: "0px" },
          display: "grid",
          placeItems: "center",
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
            sx={{
              mt: 4,
              "& .MuiInputBase-root": {
                background: amber[50],
              },
            }}
          >
            <Stack spacing={2} sx={{ mb: 1 }}>
              <TextField
                required
                size="small"
                id="email"
                label="Email"
                name="email"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                required
                size="small"
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                variant="outlined"
                onChange={handleChange}
              />
            </Stack>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={matches ? "Mantener sesión iniciada" : "Recuérdame"}
            />

            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{
                textTransform: "none",
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
            <Divider sx={{ my: 3 }} />
            <Button
              onClick={loginWithGoogle}
              fullWidth
              variant="contained"
              sx={{
                textTransform: "none",
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
                <img src={GoogleIcon} alt="Google" width="20px" height="20px" />
              }
            >
              {matches ? "Continuar con Google" : undefined}
            </Button>
            <Grid>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  onClick={() => navigate("/signup")}
                  variant="body2"
                  sx={{ 
                    "&:hover": { cursor: "pointer" } }}
                >
                  {"¿No tienes una cuenta? Regístrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
