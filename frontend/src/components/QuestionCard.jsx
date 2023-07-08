/* eslint-disable react/prop-types */
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { amber } from "@mui/material/colors";
import { useEffect, useState } from "react";

import cat from "../../assets/cat.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const QuestionCard = ({ data, points, setPoints }) => {
  const [value, setValue] = useState();
  const [previousValue, setPreviousValue] = useState();

  const { question, options, correctAnswer } = data;

  const handleChange = ({ target }) => {
    const { value } = target;
    setValue(value);

    if (previousValue !== correctAnswer && correctAnswer === value) {
      setPoints(points + 1);
    } else if (previousValue === correctAnswer && correctAnswer !== value) {
      setPoints(points - 1);
    }

    setPreviousValue(value);
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 1, type: "spring" },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, type: "spring", bounce: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={styles.card}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      <Stack sx={{ width: "50%" }}>
        <Box sx={styles.questionContainer}>
          <Grid container>
            <Grid item md={4} sx={styles.assistant} />
            <Grid item md={8} sx={styles.questionText}>
              <Typography {...styles.question}>{question}</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={styles.optionsContainer}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={value}
              onChange={handleChange}
              name="radio-buttons-group"
            >
              {options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio color="secondary" />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </motion.div>
  );
};
export default QuestionCard;

const styles = {
  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "30vh",
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
