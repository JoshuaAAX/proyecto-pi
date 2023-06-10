/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
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
  CircularProgress,
} from "@mui/material";

//pagina de perfil
const Profile = () => {
  const navigate = useNavigate();

  //useState de la informacion que sera traida del backend

  const [fullName, setFullName] = useState("");
  const [nickName, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [id, setid] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);

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
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("email", email)
          .limit(1);
        if (error) {
          console.error("Error al obtener los datos de usuarios:", error);
        } else {
          if (data && data.length > 0) {
            setUsersData(data[0].id);

            console.log(data[0].id);
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

  const [avatar, setAvatar] = useState(null);
  const [file, setFile] = useState(null);

  const test = async () => {
    const { data: userData } = await supabase.auth.getUser();
    const userID = userData.user.id;

    const { data: downloadData, error } = await supabase.storage
      .from("profile_pictures")
      .download(`public/${userID}.png`);
    downloadData && !avatar && setAvatar(URL.createObjectURL(downloadData));
  };

  useEffect(() => {
    test();
  }, []);

  //contenido dentro de los texfield
  const [textfield_name, setTextfield_name] = useState("");
  const [textfield_nick, setTextfield_nick] = useState("");

  //evento del boton de gurdar que realiza la actualizacion al usuario
  const handleUpdateUser = async (event) => {
    try {
      event.preventDefault();

      handleUpdateimg();

      const { data, error } = await supabase
        .from("users")
        .update({ nickname: textfield_nick, full_name: textfield_name })
        .eq("email", email);

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

  const handleUpdateimg = async () => {
    const { error } = await supabase.storage
      .from("profile_pictures")
      .update(`public/${usersData}.png`, file, {
        cacheControl: "3600",
        upsert: true,
      });
    console.log(error);
  };

  return (
    <Grid justifyContent="center">
      <Box
        m={4}
        display="flex"
        justifyContent="center"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Card sx={{ width: 900, borderRadius: "20px", mt: 8 }} elevation={4}>
          <CardContent
            sx={{
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            <Typography fontSize="1.8rem" fontWeight={600} color="#987E62">
              Cuenta de usuario
            </Typography>

            <Box my={2} display="flex" justifyContent="center">
              <UploadableAvatar
                avatar={avatar}
                setAvatar={setAvatar}
                usersData={usersData}
                file={file}
                setFile={setFile}
              />
            </Box>

            <Divider />

            <Typography fontSize="1.8rem" fontWeight={600} color="#987E62">
              Progreso
            </Typography>

            <Typography id="non-linear-slider" gutterBottom>
              Porcentaje de progreso: {"0%"}
            </Typography>

            <Slider
              disabled
              defaultValue={0}
              aria-label="Disabled slider"
              color="secondary"
            />

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
                size="small"
                id="nickname"
                label="Nickname"
                InputLabelProps={{ shrink: true }}
                value={nickName}
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
                size="small"
                id="fullname"
                label={"Nombre"}
                name="fullname"
                value={fullName}
                InputLabelProps={{ shrink: true }}
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
            <Dialog
              open={showConfirmation}
              onClose={() => setShowConfirmation(false)}
            >
              <DialogTitle>
                ¿Estás seguro que quieres borrar tu cuenta?
              </DialogTitle>
              <DialogContent>
                <Typography>
                  Esta acción no se puede deshacer y los datos de tu cuenta
                  serán eliminados permanentemente.
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
            <Snackbar
              open={showAlert}
              autoHideDuration={3000}
              onClose={handleCloseAlert}
            >
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

import { styled } from "@mui/system";
import React from "react";

const HiddenFileInput = styled("input")({
  display: "none",
});

function UploadableAvatar({ usersData, avatar, setAvatar, file, setFile }) {
  const handleFileChange = async (event) => {
    const newFile = event.target.files[0];
    setFile(newFile);
    setAvatar(URL.createObjectURL(newFile));

    const { error } = await supabase.storage
      .from("profile_pictures")
      .upload(`public/${usersData}.png`, newFile, {
        cacheControl: "3600",
        upsert: false,
      });
  };

  const fileInput = useRef();

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <Stack>
      <HiddenFileInput
        accept="image/*"
        id="contained-button-file"
        type="file"
        ref={fileInput}
        onChange={handleFileChange}
      />
      <Avatar
        alt="Profile Picture"
        src={avatar}
        onClick={handleClick}
        sx={{
          height: "150px",
          width: "150px",
          "&:hover": { cursor: "pointer" },
        }}
      />
    </Stack>
  );
}
