import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../backend/client";
import { Avatar, Divider, Box, Typography, Card, Grid, Stack, TextField, CardContent, Button, Slider } from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/");
      } else {
        setFullName(session.user.user_metadata.full_name);
        setNickname(session.user.user_metadata.nickname);
        setEmail(session.user.email);
      }
    });
  }, [navigate]);

  return (
    <Grid justifyContent="center">
      <Box m={4} display="flex" justifyContent="center" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Card sx={{ width: 900, borderRadius: "20px" }}>
          <CardContent sx={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Typography fontSize="1.8rem" fontWeight={600} color="#987E62">
              Cuenta de usuario
            </Typography>

            <Box my={2} display="flex" justifyContent="center">
              <Avatar alt="Remy Sharp" sx={{ width: 130, height: 130 }} />
            </Box>
            
            <Divider />

            <Typography fontSize="1.8rem" fontWeight={600} color="#987E62">
              Progreso
            </Typography>

            <Typography id="non-linear-slider" gutterBottom>
              Porcentaje de progreso: {"0%"}
            </Typography>

            <Slider disabled defaultValue={0} aria-label="Disabled slider" color="secondary" />

            <Typography id="non-linear-slider" gutterBottom>
              Temas completados: {"0/6"}
            </Typography>

            <Typography id="non-linear-slider" gutterBottom>
              Puntaje por Tema: {"0.0"}
            </Typography>

            <Divider />

            <Typography fontSize="1.8rem" fontWeight={600} color="#987E62">
              Editar Perfil
            </Typography>

            <Stack spacing={2} sx={{ mb: 1 }}>
              <TextField
                required
                size="small"
                id="nickname"
                label={nickname}
                name="nickname"
                variant="outlined"
                inputProps={{
                  style: {
                    backgroundColor: '#FFF8E1',
                  },
                }}
              />

              <TextField
                required
                size="small"
                id="fullname"
                label={fullName}
                name="fullname"
                variant="outlined"
                inputProps={{
                  style: {
                    backgroundColor: '#FFF8E1',
                  },
                }}
              />

              <TextField
                required
                size="small"
                id="email"
                label={email}
                name="email"
                variant="outlined"
                inputProps={{
                  style: {
                    backgroundColor: '#FFF8E1',
                  },
                }}
              />
            </Stack>

            <Box mt={3} display="flex" justifyContent="space-between">
              <Button
                variant="contained"
                color="error"
                sx={{
                  textTransform: "none",
                  py: 1,
                  borderRadius: "20px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#8B0000",
                  },
                }}
              >
                Borrar
              </Button>

              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
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
                Guardar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default Profile;
