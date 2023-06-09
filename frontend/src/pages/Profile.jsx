import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../backend/client";
import {
  Alert,
  Avatar,
  Divider,
  Slider,
  Box,
  Typography,
  Card,
  Grid,
  Stack,
  TextField,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
} from "@mui/material";

  
import avatar_default from "../../assets/default.png";


  //pagina de perfil
  const Profile = () => {

  const navigate = useNavigate();


  //useState de la informacion que sera traida del backend 

  const [fullName, setFullName] = useState("");
  const [nickName, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [id, setid] = useState("");

  //useState del mensaje de alerte
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  //traer los datos de authentication
  useEffect(() => {

    //de autenticacion toma el id y el email
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/");
      } else {
        //setFullName(session.user.user_metadata.full_name);
        //setNickname(session.user.user_metadata.nickname);
        setEmail(session.user.email);
        setid(session.user.id);
      }
    });

  }, [navigate]);


  //traer lo datos de la tabla de usuarios
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const { data, error } = await supabase.from("users").select("*").eq('email', email).limit(1);
        if (error) {
          console.error("Error al obtener los datos de usuarios:", error);
        } else {
          if (data && data.length > 0) {
            setUsersData(data[0].nickname);
            setFullName(data[0].full_name);
            setNickname(data[0].nickname);
        
            setTextfield_name(data[0].full_name);
            setTextfield_nick(data[0].nickname);
          }
        }
      } catch (error) {
        console.error("Error al obtener los datos de usuarios:", error);
      }
    };

    fetchUsersData();
  }, [email]);


  //contenido dentro de los texfield
  const [textfield_name, setTextfield_name] = useState("");
  const [textfield_nick, setTextfield_nick] = useState("");

  //evento del boton de gurdar que realiza la actualizacion al usuario
  const handleUpdateUser = async (event) => {
    try {
      event.preventDefault();

      const param_name = textfield_name;
      const param_nick = textfield_nick;

      const { data, error } = await supabase
      .from('users')
      .update({ nickname: textfield_nick, full_name: textfield_name })
      .eq('email', email)

      if (error) {
        console.error("Error al actualizar:", error);
      } else {
        console.log("Actualización exitosa");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  //evento del boton de borrar que elimina la cuenta del usuario
  const handleDeleteUser = async () => {
    try {
      await supabase.from("users").delete().eq("email", email);
      await supabase.auth.admin.deleteUser(id);
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };


  return (
    <Grid justifyContent="center">
      <Box m={4} display="flex" justifyContent="center" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Card sx={{ width: 900, borderRadius: "20px" }}>
          <CardContent sx={{ padding: "30px", display: "flex", flexDirection: "column", flexGrow: 1 }}>

            <Typography fontSize="1.8rem" fontWeight={600} color="#987E62">
              Cuenta de usuario
            </Typography>

            <Box my={2} display="flex" justifyContent="center">
              <Avatar alt=".defaul.png"  src = {avatar_default} sx={{ width: 130, height: 130 }} />
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
                label={nickName}
                name="nickname"
                variant="outlined"
                inputProps={{
                  style: {
                    backgroundColor: "#FFF8E1",
                  },
                }}
                onChange={(e) => setTextfield_nick(e.target.value)}
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
                    backgroundColor: "#FFF8E1",
                  },
                }}
                onChange={(e) => setTextfield_name(e.target.value)}
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
                    backgroundColor: "#FFF8E1",
                  },
                }}
                disabled
              />
            </Stack>

            <Box mt={3} display="flex" justifyContent="space-between">
              <Button
                onClick={handleUpdateUser}
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
              <Button
                variant="contained"
                color="error"
                onClick={() => setShowConfirmation(true)}
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
                Borrar Cuenta
              </Button>
            </Box>
            {/* Confirmation Dialog */}
            <Dialog open={showConfirmation} onClose={() => setShowConfirmation(false)}>
              <DialogTitle>¿Estás seguro que quieres borrar tu cuenta?</DialogTitle>
              <DialogContent>
                <Typography>
                  Esta acción no se puede deshacer y los datos de tu cuenta serán eliminados permanentemente.
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setShowConfirmation(false)}>No</Button>
                <Button onClick={handleDeleteUser} autoFocus>
                  Sí
                </Button>
              </DialogActions>
            </Dialog>

            {/* Alert Snackbar */}
            <Snackbar open={showAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
              <Alert onClose={handleCloseAlert} severity="success">
                Actualización exitosa
              </Alert>
            </Snackbar>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default Profile;