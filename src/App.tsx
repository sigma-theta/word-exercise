import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import SubjectEntry from "./pages/SubjectEntry";
import VerbEntry from "./pages/VerbEntry";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/SubjectEntry" element={<SubjectEntry />} />
          <Route path="/VerbEntry" element={<VerbEntry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
