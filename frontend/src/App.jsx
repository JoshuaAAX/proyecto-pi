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
import QuizzReligion from "./pages/QuizzReligion.jsx";
import Arquitectura from "./pages/Arquitectura";
import QuizzArquitectura from "./pages/QuizzArquitectura.jsx";
import Militar from "./pages/EstrategiaMilitar";

import Test from "./components/Test";
import IntroPage from "./components/Slider";
import Gastronomia from "./pages/Gastronomia";
import QuizzGastronomia from "./pages/QuizzGastronomia"
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
        <Route path="/quizzreligion" element={<QuizzReligion />} />
        <Route path="/quizzarquitectura" element={<QuizzArquitectura />} />
        <Route path="/estrategia-militar" element={<Militar />} />
        <Route path="/xd" element={<Test />} />
        <Route path="/gastronomia" element={<Gastronomia/>}/>
        <Route path="/quizzgastronomia" element={<QuizzGastronomia/>}/>
      </Routes>
    </>
  );
};

export default App;
