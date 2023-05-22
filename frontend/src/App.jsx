import { Routes, Route, useNavigate } from "react-router-dom";

// layouts and pages
import Page from "./pages/Page";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { supabase } from "../backend/client";
import { useEffect } from "react";

function Prueba() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1>HOLA</h1>
    </div>
  );
}
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<Prueba />} />
      </Routes>
    </>
  );
};

export default App;
