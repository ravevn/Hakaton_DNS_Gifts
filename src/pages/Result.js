import React, { useState, useEffect, useCallback } from "react";
import axios from "axios"; // API
import { useLocation, useNavigate } from "react-router-dom"; 
import "../styles/Result.css";

const Result = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [answers, setAnswers] = useState([]); //хранение ответов
  const [gifts, setGifts] = useState([]); //хранение подарков
  const [loading, setLoading] = useState(true); //отслеживание загрузки данных

  //ответы
  useEffect(() => {
    if (location.state && location.state.answers) {
      setAnswers(location.state.answers); 
    }
  }, [location.state]);


  const fetchGifts = useCallback(async () => {
    try {
    
      const response = await axios.post("https://example.com/api/get-gifts", {
        answers: answers, 
      });

      // Сохраняем полученные данные (подарки)
      setGifts(response.data.gifts); 
    } catch (error) {
      console.error("Error fetching gifts:", error);
    } finally {
      setLoading(false); 
    }
  }, [answers]); 

  // загрузка подарков по ответам
  useEffect(() => {
    if (answers.length > 0) {
      fetchGifts(); 
    }
  }, [answers, fetchGifts]); 

  const handleGoHome = () => {
    navigate("/"); 
  };

  return (
    <div className="result-container">
      <div className="dns-logo">DNS</div>

      <h2 className="title">Результаты</h2>
      <div className="gifts">
        {loading ? (
          <p>Загрузка подарков...</p>
        ) : (
          <div className="gifts-container">
            {gifts.length > 0 ? (
              gifts.map((gift, index) => (
                <div key={index} className="gift-item">
                  <img src={gift.imageUrl} alt={gift.name} />
                  <h3>{gift.name}</h3>
                  <p>{gift.description}</p>
                </div>
              ))
            ) : (
              <p>Нет подарков для ваших ответов.</p>
            )}
          </div>
        )}
      </div>

      <button className="back-button" onClick={handleGoHome}>
        На главную
      </button>
    </div>
  );
};

export default Result;
