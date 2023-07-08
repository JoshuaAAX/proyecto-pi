import { Box } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
