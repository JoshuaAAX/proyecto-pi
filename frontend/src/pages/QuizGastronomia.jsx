import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";
import QuestionCard from "../components/QuestionCard";
import { useEffect, useRef, useState } from "react";

import cat from "../../assets/complete_cat.png";

const QuizGastronomia = () => {
  const navigate = useNavigate();

  const [points, setPoints] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      question:
        "1. ¿Cuál era la base de la dieta egipcia antigua?",
      options: [
        "Los alimentos disponibles en el bosque",
        "Los alimentos disponibles en el mar",
        "Los alimentos que caian del cielo",
        "Los alimentos y productos disponibles en la región del río Nilo.",
      ],
      correctAnswer: "Los alimentos y productos disponibles en la región del río Nilo.",
    },
    {
      question:
        "2. ¿Qué alimento era fundamental en la dieta egipcia antigua y se elaboraba principalmente con trigo?",
      options: [
        "El pan",
        "El buñuelo",
        "El pastel",
        "El pescado",
      ],
      correctAnswer:   "El pan",
    },
    {
      question:
        "3. ¿Cuál era la bebida más común en el antiguo Egipto y se elaboraba a partir de cebada?",
      options: [
        "La limonada",
        "La Gaseosa",
        "La Cerveza",
        "El Café",
      ],
      correctAnswer:         "La Cerveza",
    },
    {
      question:
        "4. ¿Qué bebida estaba más asociada con la élite y las clases altas en el antiguo Egipto y se producía a partir de uvas?",
      options: ["La Cerveza", "El Vino", "El Agua", "El Jugo"],
      correctAnswer: "El Vino", 
    },
    {
      question:
        "5.¿Qué fuente de alimento proporcionaba el río Nilo en la dieta egipcia antigua?",
      options: [
        "Pescado del Nilo.",
        "Camarón.",
        "Langosta ",
        "Cangrejo",
      ],
      correctAnswer:
      "Pescado del Nilo.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [indice, setIndice] = useState(0);

  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIndice(Number(entry.target.id));
        }
      });
    });

    const elements = Array.from({ length: 5 }, (_, i) =>
      document.getElementById(i.toString())
    );

    elements.forEach((element) => observer.current.observe(element));

    return () => {
      if (observer.current) {
        elements.forEach((element) => observer.current.unobserve(element));
      }
    };
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    let about = document.getElementById(`${indice + 1}`);
    about && about.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handlePrev = (e) => {
    e.preventDefault();
    let about = document.getElementById(`${indice - 1}`);
    about && about.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1, type: "spring" },
    },
  };

  return (
    <>
      {finished ? (
        <Box sx={styles.finished.container}>
          <Paper {...styles.finished.body}>
            <Box sx={styles.finished.image} />
            <Typography {...styles.finished.header}>
              ¡Has finalizado el quiz!
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: points <= 2 ? "#fa0000" : "#32CD32",
                textShadow: points <= 2 ? "none" : "1px 1px 2px greenyellow",
              }}
            >
              Puntaje: {points}
            </Typography>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={() => navigate("/mainpage")}
                sx={styles.returnButton}
              >
                Página principal
              </Button>
            </motion.div>
          </Paper>
        </Box>
      ) : (
        <Box sx={styles.container}>
          <Typography variant="h4" textAlign="center" sx={{ mb: 6 }}>
            Quiz Gastronomia
          </Typography>
          <Box sx={styles.questions}>
            {questions.map((question, index) => (
              <div id={index} key={index} style={styles.questions}>
                <QuestionCard
                  data={question}
                  points={points}
                  setPoints={setPoints}
                />
              </div>
            ))}
          </Box>
          <motion.div
            variants={variants}
            initial="visible"
            animate={{
              opacity: 0,
              transition: { duration: 1, type: "spring", delay: 1 },
            }}
            whileHover="visible"
          >
            <Box sx={styles.buttons.container}>
              <Paper
                variant="outlined"
                sx={styles.buttons.previous}
                onClick={handlePrev}
              >
                {"<"}
              </Paper>
              <Paper
                variant="outlined"
                sx={styles.buttons.next}
                onClick={handleNext}
              >
                {">"}
              </Paper>
            </Box>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button onClick={() => setFinished(true)} sx={styles.finishButton}>
              Finalizar quiz
            </Button>
          </motion.div>
        </Box>
      )}
    </>
  );
};

export default QuizGastronomia;

const styles = {
  returnButton: {
    textTransform: "capitalize",
    color: "brown",
    outline: "1px solid #fff  ",
    backgroundColor: "rgba(219, 180, 137, 0.1)",
    mt: 3,
    px: 3,
    width: "70%",
  },
  finishButton: {
    color: "brown",
    outline: "1px solid #DBB489",
    backgroundColor: "rgba(219, 180, 137, 0.1)",
    marginTop: "8%",
    px: 3,
  },
  container: {
    display: "flex",
    rowGap: 2,
    alignItems: "center",
    flexDirection: "column",
    background: amber[50],
    py: 5,
    overflow: "hidden",
  },
  questions: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "30vh",
    mb: "10vh",
  },
  finished: {
    container: {
      display: "grid",
      placeItems: "center",
      height: "90vh",
      background: amber[50],
    },
    body: {
      elevation: 6,
      sx: {
        background: "#DBB489",
        p: 8,
        textAlign: "center",
        borderRadius: 8,
      },
    },
    image: {
      height: "160px",
      backgroundImage: `url(${cat})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    },
    header: {
      variant: "h5",
      sx: { color: "#fff", textShadow: "1px 2px 2px #000" },
    },
  },

  buttons: {
    container: {
      display: "flex",
      flexDirection: "row",
      columnGap: 3,
      alignItems: "center",
      position: "fixed",
      top: "90vh",
      right: "2%",
    },
    previous: {
      height: "40px",
      background: "transparent",
      width: "40px",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      borderRadius: 8,
      outline: "1px solid #DBB489",
      color: "#DBB489",
      fontWeight: "bold",
      "&:hover": {
        boxShadow: "2px 2px 5px 2px #DBB489",
      },
    },
    next: {
      height: "40px",
      width: "40px",
      background: "transparent",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
      borderRadius: 8,
      outline: "1px solid #DBB489",
      color: "#DBB489",
      fontWeight: "bold",
      "&:hover": {
        boxShadow: "2px 2px 5px 2px #DBB489",
      },
    },
  },
};
