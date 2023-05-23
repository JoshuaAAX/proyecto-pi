import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../backend/client";
import { Box, Typography } from "@mui/material";

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Typography variant="h3">Main Page</Typography>
    </Box>
  );
};

export default MainPage;
