import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Canvas from "../components/Home";

function Page() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          backgroundColor: "#F7EDD4",
        }}
      >
        <Canvas />
        {/* <Box>
          <About />
        </Box> */}
      </Box>
      <Footer />
    </>
  );
}

export default Page;
