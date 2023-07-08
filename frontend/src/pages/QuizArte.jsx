import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";
import QuestionCard from "../components/QuestionCard";
import { useEffect, useRef, useState } from "react";

import cat from "../../assets/complete_cat.png";

const QuizArte = () => {
  const navigate = useNavigate();

  const [points, setPoints] = useState(0);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
      question:
        "1. ¿Cuál era una característica distintiva del arte egipcio?",
      options: [
        "Estilo abstracto y abstracto.",
        "Uso predominante de colores pastel.",
        "Representación precisa y jerárquica de figuras humanas y divinas.",
        "Uso de técnicas de sombreado y perspectiva.",
      ],
      correctAnswer:    "Representación precisa y jerárquica de figuras humanas y divinas.",
    },
    {
      question:
        "2. ¿En qué se enfocaba principalmente la pintura egipcia?",
      options: [
        "Escenas mitológicas.",
        "Paisajes naturales.",
        "Retratos realistas.",
        "Murales en tumbas y templos.",
      ],
      correctAnswer:   "Murales en tumbas y templos.",
    },
    {
      question:
        "3. ¿Cuál era el propósito principal del arte funerario en el antiguo Egipto?",
      options: [
        "Exhibir la riqueza y el estatus social.",
        "Decorar los espacios públicos.",
        "Representar escenas de la vida cotidiana.",
        "Asegurar una vida placentera y eterna para el difunto en el más allá.",
      ],
      correctAnswer: "Asegurar una vida placentera y eterna para el difunto en el más allá.",
    },
    {
      question:
        "4. ¿Cuál de las siguientes afirmaciones es verdadera sobre la joyería en el antiguo Egipto?",
      options: [
      "Se utilizaban principalmente metales como el hierro y el cobre.", 
      "Las joyas eran exclusivamente para la nobleza y la élite.", 
      "Se utilizaban piedras preciosas y vidrio coloreado.", 
      "La joyería no tenía ningún significado simbólico o religioso."],
      correctAnswer:       "Se utilizaban piedras preciosas y vidrio coloreado.", 
    },
    {
      question:
        "5. ¿Cuál es el legado duradero del arte egipcio?",
      options: [
        "No ha dejado ningún impacto en las culturas posteriores.",
        "Sus obras de arte se han perdido con el tiempo.",
        "Ha influido en muchas culturas posteriores y ha dejado ejemplos sobrevivientes.",
        "Su estilo artístico ha sido olvidado y no se considera relevante en la actualidad.",
      ],
      correctAnswer:
      "Ha influido en muchas culturas posteriores y ha dejado ejemplos sobrevivientes.",
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
            Quiz Arte
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

export default QuizArte;

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
