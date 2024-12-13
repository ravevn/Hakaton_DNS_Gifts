import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Result.css";
import presents from '../pages/presents.json';

const ResultsAndAPI = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState([]);
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGifts, setSelectedGifts] = useState([]);

  useEffect(() => {
    if (location.state) {
      setAnswers(location.state.answers || []);
      setSelectedGifts(location.state.selectedGifts || []);
    }
  }, [location.state]);

  const fetchGifts = useCallback(async () => {
    try {
      const response = await axios.post("https://example.com/api/get-gifts", {
        answers: answers,
      });
      setGifts(response.data.gifts.slice(0, 5)); 
    } catch (error) {
      console.error("Error fetching gifts:", error);
    } finally {
      setLoading(false);
    }
  }, [answers]);

  useEffect(() => {
    if (answers.length > 0) {
      fetchGifts();
    }
  }, [answers, fetchGifts]);

  const filteredPresents = presents.filter((present) => {
    return (
      (answers[0] === present.category || answers[0] === "Другой") &&
      (answers[3] === present.brand || answers[3] === "Другой")
    );
  }).slice(0, 5);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="result-container">
      <div className="dns-logo">DNS</div>
      <h2 className="title">Результаты</h2>

      <div className="local-gifts">
        <h3>Рекомендации на основе ваших ответов:</h3>
        <div className="gifts-container">
          {filteredPresents.map((present) => (
            <div key={present.id} className="gift-item">
              <h3>{present.title}</h3>
              <p>{present.description}</p>
              <p>Цена: {present.price} рублей</p>
            </div>
          ))}
        </div>
      </div>

      <div className="selected-gifts">
        <h3>Выбранные подарки:</h3>
        <div className="gifts-container">
          {selectedGifts.length > 0 ? (
            selectedGifts.map((gift, index) => (
              <div key={index} className="gift-item">
                <h3>{gift}</h3>
              </div>
            ))
          ) : (
            <p>Нет выбранных подарков.</p>
          )}
        </div>
      </div>

      <button className="back-button" onClick={handleGoHome}>
        На главную
      </button>
    </div>
  );
};

export default ResultsAndAPI;