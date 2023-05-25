import { Routes, Route, useNavigate } from "react-router-dom";

// layouts and pages
import Page from "./pages/Page";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
//import Profile from "./pages/Profile";
import MainPage from "./pages/MainPage";

import { supabase } from "../backend/client";
import { useEffect } from "react";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<MainPage/>} />
        v<Route path="/profile" element={<Profile />} />
     
      </Routes>
    </>
  );
};

export default App;
