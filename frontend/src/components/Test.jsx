import { Box, Button, Container, Grid } from "@mui/material";
import { useState } from "react";

import { motion } from "framer-motion";
import defaultPicture from "../../assets/default.png";


const Test = () => {
  const [picture, setPicture] = useState(null);

  const handleFileChange = ({ target }) => {
    const newFile = target.files[0];
    setPicture(URL.createObjectURL(newFile));
  };

  return (
    <Container>
      <Box
        sx={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          rowGap: 3,
        }}
      >
        <Grid
          sx={{
            backgroundImage: picture
              ? `url(${picture})`
              : `url(${defaultPicture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: 250,
            height: 250,
            border: "1px dashed teal",
            borderRadius: "16px",
            boxShadow: "2px 2px 5px teal",
          }}
        />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="contained"
            color="secondary"
            disableRipple
            component="label"
          >
            Cambiar imagen
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Test;
