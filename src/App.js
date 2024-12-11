import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Main from "./pages/Main";
import ResultsPage from "./pages/Result";
import AdultForm from "./components/ManForm"; 
import ChildForm from "./components/WomanForm"; 
import Slider from "./components/SliderComponent";



function App() {
  return (
    <Router>
      <Search />
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/form/adult" element={<AdultForm />} /> 
        <Route path="/form/child" element={<ChildForm />} /> 
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
      <Slider>
        <div className="App">
        </div>
      </Slider> 
    </Router>
  );
}

export default App;
