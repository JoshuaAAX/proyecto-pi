import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../backend/client";
import { Box, Typography } from "@mui/material";

const MainPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/");
      } else {
        setFullName(session.user.user_metadata.full_name);
      }
    });
  }, [navigate]);

  return (
    <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Typography variant="h4">{`Bienvenid@ ${fullName}`}</Typography>
    </Box>
  );
};

export default MainPage;
