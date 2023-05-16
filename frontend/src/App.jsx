import { Routes, Route } from "react-router-dom";

// layouts and pages
import Page from "./pages/Page";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </>
  );
};

export default App;
