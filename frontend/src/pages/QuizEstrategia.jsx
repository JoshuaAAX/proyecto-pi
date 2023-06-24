import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";
import QuestionCard from "../components/QuestionCard";
import { useEffect, useRef, useState } from "react";

import cat from "../../assets/complete_cat.png";

const QuizEstrategia = () => {
  const navigate = useNavigate();

  const [points, setPoints] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      question:
        "1. ¿Cuál era el título del máximo comandante militar en el antiguo Egipto?",
      options: [
        "General de los ejércitos",
        "Visir",
        "Faraón",
        "Sumo sacerdote",
      ],
      correctAnswer: "Faraón",
    },
    {
      question:
        "2. ¿Qué función desempeñaban los carros de guerra en el antiguo Egipto?",
      options: [
        "Llevar a los soldados heridos fuera del campo de batalla",
        "Transporte logístico de suministros militares",
        "Símbolos de estatus para los líderes militares",
        "Unidades móviles de combate",
      ],
      correctAnswer: "Unidades móviles de combate",
    },
    {
      question:
        "3. ¿Cuál era el arma principal utilizada por la infantería en el antiguo Egipto?",
      options: [
        "El arco y flecha",
        "La lanza o la espada",
        "El escudo",
        "El hacha de guerra",
      ],
      correctAnswer: "La lanza o la espada",
    },
    {
      question:
        "4. ¿Cuál era el principal río en el que se utilizaba la flota naval en el antiguo Egipto?",
      options: ["Rio Nilo", "Mar Mediterráneo", "Mar Rojo", "Rio Tigris"],
      correctAnswer: "Rio Nilo",
    },
    {
      question:
        "5. ¿Cuál era la actitud general del antiguo Egipto hacia la guerra y la diplomacia?",
      options: [
        "Buscaba la guerra como solución inmediata a cualquier conflicto",
        "No practicaba la diplomacia y siempre se involucraba en conflictos militares",
        "Referían la diplomacia como primera opción para resolver conflictos y la guerra se consideraba como último recurso",
        "Dejaba que otras naciones decidieran sobre el uso de la guerra o la diplomacia",
      ],
      correctAnswer:
        "Referían la diplomacia como primera opción para resolver conflictos y la guerra se consideraba como último recurso",
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
            Quiz Estrategia Militar
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

export default QuizEstrategia;

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
