import React from "react";
import { useNavigate } from "react-router-dom";
import SliderComponent from "../components/SliderComponent";
import "../styles/Main.css";

function Main() {
  const navigate = useNavigate();

  const handleAdultClick = () => {
    navigate("/form/man");
  };

  const handleChildClick = () => {
    navigate("/form/woman");
  };

  return (
    <div className="main-container">
      <h1 className="dns-logo">DNS</h1>
      <h2 className="title">Генератор подарков</h2>
      <p className="subtitle">
        Заполнив небольшую анкету, мы сможем подобрать лучшие идеи для вашего новогоднего подарка
      </p>
      <SliderComponent />
      <div className="button-container">
        <button className="main-button" onClick={handleChildClick}>
          Подарок Девушке
        </button>
        <button className="main-button" onClick={handleAdultClick}>
          Подарок Мужчине
        </button>
      </div>
    </div>
  );
}

export default Main;
