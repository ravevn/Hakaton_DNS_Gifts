import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Form.css";

const WomanForm = () => {
  const questions = [
    "вопрос 1 для женщины",
    "вопрос 2 для женщины",
    "вопрос 3 для женщины",
    "вопрос 4 для женщины",
    "вопрос 5 для женщины",
  ];

  const options = [
    ["1", "2", "3", "4", "5"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4"],
    ["1", "2", "3", "4", "5"],
    ["1", "2", "3", "4"],
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate(); 

  const handleAnswerSelect = (option, index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswers([...answers, options[currentQuestion][selectedOption]]);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        navigate("/results", { state: { answers } }); // Переход на Result.js
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setAnswers(answers.slice(0, -1));
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <div className={`form-container ${currentQuestion === 0 ? "first-form" : ""}`}>
      <button className="back-button" onClick={handleGoHome}>
        На главную
      </button>
      <div className="form-content">
        <h2 className="form-question">{questions[currentQuestion]}</h2>
        <div className="form-options">
          {options[currentQuestion].map((option, index) => (
            <div
              key={index}
              className={`form-option ${selectedOption === index ? "selected" : ""}`}
              onClick={() => handleAnswerSelect(option, index)}
            >
              <input
                type="radio"
                id={`option-${index}`}
                name="option"
                value={option}
                checked={selectedOption === index}
                readOnly
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <div className="form-buttons">
          {currentQuestion !== 0 && (
            <button className="nav-button" onClick={handleBack}>
              ← Назад
            </button>
          )}
          <button
            className="nav-button"
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            Далее →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WomanForm;
