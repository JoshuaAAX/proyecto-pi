import { Box, Button, Grid,Typography } from "@mui/material";
import { amber } from "@mui/material/colors";
import React from "react"
import { useNavigate } from "react-router-dom";

const QuizzReligion = () => {
    const navigate = useNavigate();
return ( 
    <Box>
        
<Button
        onClick={() => navigate('/mainpage')}
          sx={{
            color: "brown",
            outline: "1px solid #DBB489",
            backgroundColor: "rgba(219, 180, 137, 0.1)",
            display: "block",
            mx: "auto",
            mt: 4,
          }}
        >
          Ir a la pagina principal
</Button>
<Typography variant="h2" textAlign="center" sx={{ mb: 6 }}>
            Proximamente...
        </Typography>
</Box>
);
};
export default QuizzReligion;
