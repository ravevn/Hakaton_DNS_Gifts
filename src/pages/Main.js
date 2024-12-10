import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Main.css";

function Main() {
  const navigate = useNavigate();

  const handleAdultClick = () => {
    navigate("/form/adult");  // форма для взрослого
  };

  const handleChildClick = () => {
    navigate("/form/child"); // форма для чилдрена
  };

  return (
    <div className="main-container">
      <h1 className="dns-logo">DNS</h1>
      <h2 className="title">Генератор подарков</h2>
      <p className="subtitle">
        Заполните небольшую анкету, и мы предложим Вам несколько идей для подарка
      </p>
      <div className="button-container">
        <button className="main-button" onClick={handleAdultClick}>Взрослому</button>
        <button className="main-button" onClick={handleChildClick}>Ребенку</button>
      </div>
    </div>
  );
}

export default Main;
