/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { amber } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import cat from "../../assets/cat.png";

const QuizzReligion = ({ question, options }) => {
  const [value, setValue] = useState();

  const handleChange = ({ target }) => {
    const { value } = target;
    setValue(value);
  };

  const navigate = useNavigate();
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 6 }}>
        Quizz Religión
      </Typography>
      <Stack sx={{ width: "50%" }}>
        <Box sx={styles.questionContainer}>
          {/* <Box sx={{ position: "absolute", top: "60%", left: "50%" }}>
            Opción seleccionada: {value}
          </Box> */}
          <Grid container>
            <Grid item md={4} sx={styles.assistant} />
            <Grid item md={8} sx={styles.questionText}>
              <Typography {...styles.question}>
                {question}
                ¿Quién era el dios del Sol?
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={styles.optionsContainer}>
          {options}
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={value}
              onChange={handleChange}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Ra"
                control={<Radio color="secondary" />}
                label="Ra"
              />
              <FormControlLabel
                value="Seth"
                control={<Radio color="secondary" />}
                label="Seth"
              />
              <FormControlLabel
                value="Osiris"
                control={<Radio color="secondary" />}
                label="Osiris"
              />
              <FormControlLabel
                value="Isis"
                control={<Radio color="secondary" />}
                label="Isis"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button onClick={() => navigate("/mainpage")} sx={styles.returnButton}>
          Ir a la pagina principal
        </Button>
      </motion.div>
    </Box>
  );
};
export default QuizzReligion;

const styles = {
  returnButton: {
    color: "brown",
    outline: "1px solid #DBB489",
    backgroundColor: "rgba(219, 180, 137, 0.1)",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    background: amber[50],
    height: "90vh",
  },
  questionContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "auto",
    background: "#DBB489",
    display: "flex",
    alignItems: "center",
  },
  assistant: {
    width: "100px",
    height: "100px",
    backgroundImage: `url(${cat})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  questionText: {
    display: "grid",
    placeItems: "center",
  },
  question: {
    variant: "h6",
    sx: { textAlign: "center", width: "80%", whiteSpace: "pre-wrap" },
  },
  optionsContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    background: amber[100],
    py: 2,
    px: 8,
  },
};
