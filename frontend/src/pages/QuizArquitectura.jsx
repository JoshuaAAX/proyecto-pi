import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";
import QuestionCard from "../components/QuestionCard";
import { useEffect, useRef, useState } from "react";

import cat from "../../assets/complete_cat.png";

const QuizzArquitectura = () => {
  const navigate = useNavigate();

  const [points, setPoints] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      question:
        "1. Cuales eran los materiales que utilizaban los egipcios en sus estructuras? ",
      options: [
        "Barro y arcilla",
        "Madera y piedra",
        "Caliza y granito",
        "Bahareque y paja",
      ],
      correctAnswer: "Caliza y granito",
    },
    {
      question:
        "2. Cuales eran los centros de la vida religiosa y social en el Antiguo Egipto?",
      options: [
        "Las piramides",
        "Los obelisco",
        "Las esfinge",
        "Los templos",
      ],
      correctAnswer:   "Los templos",
    },
    {
      question:
        "3. Cual era la decoracion que usaban los antiguos egipcios en las paredes de los templos?",
      options: [
        "Cortinas de seda",
        "jeroglíficos",
        "Pedestales y jarrones",
        "Incrustaciones de pequeñas piezas de oro",
      ],
      correctAnswer: "jeroglíficos",
    },
    {
      question:
        "4. ¿Cuál era la función principal de las pirámides en la arquitectura del antiguo Egipto?",
      options: ["Observatorios astronómicos", "Fortalezas defensivas", "Tumbas para los faraones", "Escuelas de enseñanza"],
      correctAnswer: "Tumbas para los faraones",
    },
    {
      question:
        "5. ¿Cuál era el propósito de los obeliscos en la arquitectura del antiguo Egipto?",
      options: [
        "Simbolizaban rayos de sol petrificados",
        "Marcadores para delimitar las fronteras del territorio egipcio.",
        "Monumentos conmemorativos para honrar a los faraones fallecidos ",
        "Estructuras residenciales para los sacerdotes.",
      ],
      correctAnswer:
      "Simbolizaban rayos de sol petrificados",
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
            Quiz Arquitectura
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

export default QuizzArquitectura;

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
