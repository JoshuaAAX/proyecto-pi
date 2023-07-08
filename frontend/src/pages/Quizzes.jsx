/* eslint-disable react/prop-types */
import { Box, Button, Card, Chip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { supabase } from "../../backend/client";
import { useNavigate } from "react-router-dom";
import { amber } from "@mui/material/colors";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);

  const getQuizzes = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("quizzes")
      .select()
      .eq("user", user.id);
    setQuizzes(data);
  };

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        background: amber[50],
      }}
    >
      <Typography variant="h4">Quices realizados</Typography>
      {quizzes.map((quiz) => (
        <QuizCard quiz={quiz} key={quiz.quiz_id} />
      ))}
    </Box>
  );
};

export default Quizzes;

const QuizCard = ({ quiz }) => {
  const navigate = useNavigate();

  return (
    <Card
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 8,
        py: 4,
        gap: 4,
      }}
    >
      <Typography variant="h5">{quiz.quiz_name.toUpperCase()}</Typography>
      <Typography variant="body1">Puntaje: {quiz.puntaje}</Typography>
      <Chip
        sx={{ background: quiz.is_completed ? "green" : "red" }}
        label={quiz.is_completed ? "Completado" : "No completado"}
      />
      <Button variant="outlined" onClick={() => navigate("/quizreligion")}>
        Volver a intentar
      </Button>
    </Card>
  );
};
