import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Main from "./pages/Main";
import ResultsPage from "./pages/Result";
import ManForm from "./components/ManForm"; 
import WomanForm from "./components/WomanForm"; 
import NewPage from "./pages/NewPage";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Search />   
              <Main />
             
            </>
          } 
        /> 
        <Route path="/form/man" element={<ManForm />} /> 
        <Route path="/form/woman" element={<WomanForm />} /> 
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/newPage" element={<NewPage />} /> 
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
