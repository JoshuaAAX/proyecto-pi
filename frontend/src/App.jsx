import { Routes, Route } from "react-router-dom";

// layouts and pages
import Page from "./pages/Page";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
//import Profile from "./pages/Profile";
import MainPage from "./pages/MainPage";
import Religion from "./pages/Religion";
import Arquitectura from "./pages/Arquitectura";
import Militar from "./pages/EstrategiaMilitar";
import Arte from "./pages/Arte";
import SistemaPolitico from "./pages/SistemaPolitico";
import Test from "./components/Test";
import IntroPage from "./components/Slider";
import Gastronomia from "./pages/Gastronomia";


import QuizEstrategia from "./pages/QuizEstrategia";
import QuizReligion from "./pages/QuizReligion";
import QuizArte from "./pages/QuizArte";
import QuizSistema from "./pages/QuizSistema";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/religion" element={<Religion />} />
        <Route path="/arquitectura" element={<Arquitectura />} />
        <Route path="/arte" element={<Arte />} />
        <Route path="/quizarte" element={<QuizArte />} />
        <Route path="/quizreligion" element={<QuizReligion />} />
        <Route path="/quizestrategia" element={<QuizEstrategia />} />
        <Route path="/quizpolitica" element={<QuizSistema />} />
        <Route path="/estrategia-militar" element={<Militar />} />
        <Route path="/xd" element={<Test />} />
        <Route path="/gastronomia" element={<Gastronomia />} />
        <Route path="/politica" element={<SistemaPolitico />} />
        <Route path="/arte" element={<Arte />} />
        <Route path="/quizarte" element={<QuizArte />} />
      </Routes>
    </>
  );
};

export default App;
