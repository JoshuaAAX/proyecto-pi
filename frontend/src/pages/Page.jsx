import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Home from "../components/Home";
import { amber } from "@mui/material/colors";

function Page() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
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
