import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../backend/client";
import { Box, Typography, Card, Grid, Stack, TextField, CardContent, Button } from "@mui/material";

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
        //console.log(session.user)
        setFullName(session.user.user_metadata.full_name);
        setNickname(session.user.user_metadata.nickname);
        setEmail(session.user.email);
      }
    });
  }, [navigate]);

  return (
    <Grid  justifyContent="center" >
       <Box m={4} display="flex" justifyContent="center" sx={{ display: "flex", flexDirection: "column", alignItems: "center"  }}>
         <Card  sx={{ width: 900, height: 700, borderRadius: "20px"}}>
         <CardContent sx={{ padding: '30px' }}>

          <Typography fontSize="1.8rem" fontWeight={600} color="#987E62">
           Perfil de cuenta
          </Typography>
        
          <Stack spacing={2} sx={{ mb: 1 }}>
          <TextField
                required
                size="small"
                id="nikname"
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

         <Button
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
              guardar
            </Button>

         </CardContent>
        </Card>
       </Box>
    </Grid>
    
  );
};

export default Profile;
