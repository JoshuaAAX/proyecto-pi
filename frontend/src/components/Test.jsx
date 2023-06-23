import { Box, Button, Container, Grid, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import defaultPicture from "../../assets/default.png";
import { supabase } from "../../backend/client";
import { toast } from "react-hot-toast";

const Test = () => {
  const [picture, setPicture] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleDownload = async () => {
    const { data: downloadData, error: downloadError } = await supabase.storage
      .from("profile_pictures")
      .download(`public/kevin.png`);
    downloadData && !picture && setPicture(URL.createObjectURL(downloadData));
    if (downloadError) toast.error(downloadError.message);
  };

  useEffect(() => {
    handleDownload();
    setUploaded(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploaded]);

  const handleFileChange = async ({ target }) => {
    const newFile = target.files[0];

    const { error: uploadError } = await supabase.storage
      .from("profile_pictures")
      .upload(`public/kevin.png`, newFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      toast.error(uploadError.message);
      const { error: updateError } = await supabase.storage
        .from("profile_pictures")
        .update(`public/kevin.png`, newFile, {
          cacheControl: "3600",
          upsert: true,
        });
      updateError ? toast.error(updateError.message) : setUploaded(true);
    } else {
      setUploaded(true);
    }
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
        {uploaded ? (
          <Skeleton />
        ) : (
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
        )}
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
