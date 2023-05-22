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
  Tooltip,
} from "@mui/material";

import "../styles/Login.css";

import { amber } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

import banner from "../../assets/egypt-pyramid.jpg";
import GoogleIcon from "../../assets/google.png";
import { useEffect, useState } from "react";
import { supabase } from "./../../backend/client";
import { Toaster, toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const tema = useTheme();
  const matches = useMediaQuery(tema.breakpoints.up("md"));

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/mainpage");
      }
    });
  }, [navigate]);

  const initialState = { nickname: "", full_name: "", email: "", password: "" };
  const [user, setUser] = useState(initialState);

  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/signup",
      },
    });

    if (error) console.log(error);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { nickname, full_name, email, password } = user;

    if (!nickname || !full_name || !email || !password) {
      toast.error((t) => (
        <span>
          Llena todos los campos
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

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { nickname, full_name },
        },
      });

      if (error) {
        console.log(error);
      } else {
        await supabase.from("users").insert({ nickname, full_name, email });
        toast.success("Usuario registrado!", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      console.log(error);
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
        backgroundColor: "#F7EDD4",
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

      <Grid
        item
        height="80%"
        xs={12}
        sm={12}
        md={5}
        component={matches && Paper}
        elevation={6}
        sx={{
          borderTopLeftRadius: "20px",
          borderBottomLeftRadius: "20px",
          borderTopRightRadius: { xs: "20px", md: "0px" },
          borderBottomRightRadius: { xs: "20px", md: "0px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            my: 6,
            mx: { md: 4, xs: 0 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography fontSize="1.8rem" fontWeight={600} color="#987E62">
            Registrarse
          </Typography>
          <Box
            sx={{
              width: "100%",
              mt: 4,
              "& .MuiInputBase-root": {
                background: amber[50],
              },
            }}
          >
            <Stack spacing={2}>
              <TextField
                required
                size="small"
                fullWidth
                name="username"
                label="Usuario"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                required
                size="small"
                fullWidth
                name="full_name"
                label="Nombre y apellidos"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                required
                size="small"
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                onChange={handleChange}
              />
              <TextField
                required
                size="small"
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                variant="outlined"
                onChange={handleChange}
              />
            </Stack>

            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
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
              Registrarte
            </Button>
            <Tooltip title="No funciona en producción" placement="right">
              <span>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={loginWithGoogle}
                  disabled
                  sx={{
                    textTransform: "none",
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
              </span>
            </Tooltip>
            <Grid item>
              <Link
                onClick={() => navigate("/login")}
                variant="body2"
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                {"¿Ya tienes una cuenta? Inicia sesión"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Grid>
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
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        />
      )}
    </Grid>
  );
};

export default Signup;
