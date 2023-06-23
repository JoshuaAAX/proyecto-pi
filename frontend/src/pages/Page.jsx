import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Home from "../components/Home";
import { amber } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "../../backend/client";

function Page() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/mainpage");
      }
    });
  }, [navigate]);
  return (
    <>
      <Box
        sx={{
          height: "90vh",
          overflow: "hidden",
          position: "relative",
          backgroundColor: amber[50],
        }}
      >
        <Box sx={{ height: { md: "70%", xs: "60%" } }}>
          <Home />
        </Box>
        {/* <Box>
          <About />
        </Box> */}
      </Box>
      <Footer />
    </>
  );
}

export default Page;
