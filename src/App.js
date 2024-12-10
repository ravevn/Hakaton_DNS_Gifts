import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import ResultsPage from "./pages/Result";
import AdultForm from "./components/AdultForm"; 
import ChildForm from "./components/ChildForm"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/form/adult" element={<AdultForm />} /> 
        <Route path="/form/child" element={<ChildForm />} /> 
        <Route path="/results" element={<ResultsPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
