import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import "../styles/Form.css";

const WomanForm = () => {
  const questions = [
    "Какой тип электронной техники интересует вашего близкого человека?",
    "Для каких целей ваш близкий человек планирует использовать этот подарок?",
    "Какой ценовой диапазон вас интересует?",
    "Какой бренд предпочитает ваш близкий человек?",
    "Какое увлечение у вашего близкого человека?",
  ];

  const options = [
    ["Смартфоны", "Ноутбуки", "Планшеты", "Умные часы", "Аудио-устройства", "Другой"],
    ["Работа и учеба", "Развлечение", "Спорт и фитнес", "Домашний комфорт", "Другое"],
    ["До 5000 рублей", "5000-15000 рублей", "15000-30000 рублей", "Более 30000 рублей"],
    ["Apple", "Samsung", "Xiaomi", "Sony", "Другой"],
    ["Игры", "Музыка", "Фильмы и сериалы", "Спорт", "Творчество"],
  ];

  const gifts = {
    "Смартфоны": ["iPhone 14", "Samsung Galaxy S21", "Xiaomi Mi 11", "Google Pixel 6", "OnePlus 9", "Sony Xperia 5 III"],
    "Ноутбуки": ["MacBook Air", "Dell XPS 13", "HP Spectre x360", "Lenovo ThinkPad X1 Carbon", "Asus ZenBook 14", "Microsoft Surface Laptop 4"],
    "Планшеты": ["iPad Pro", "Samsung Galaxy Tab", "Microsoft Surface", "Amazon Fire HD 10", "Lenovo Tab P11", "Huawei MatePad Pro"],
    "Умные часы": ["Apple Watch", "Samsung Galaxy Watch", "Fitbit Versa", "Garmin Forerunner 245", "Amazfit Bip U Pro", "Fossil Gen 5"],
    "Аудио-устройства": ["Sony WH-1000XM4", "Bose QuietComfort 35 II", "JBL Flip 5", "Apple AirPods Pro", "Sennheiser HD 450BT", "Anker Soundcore Life Q30"],
    "Другой": ["Подарочная карта", "Книга", "Аксессуары", "Настольная игра", "Кулинарная книга", "Подарочный набор"],
  };

  const purposeGifts = {
    "Работа и учеба": ["Ноутбук", "Планшет", "Книга", "Аксессуары для работы"],
    "Развлечение": ["Смартфон", "Аудио-устройство", "Игровая консоль", "Наушники"],
    "Спорт и фитнес": ["Умные часы", "Фитнес-браслет", "Спортивная сумка", "Аксессуары для спорта"],
    "Домашний комфорт": ["Умный динамик", "Кофеварка", "Робот-пылесос", "Аксессуары для дома"],
    "Другое": ["Подарочная карта", "Настольная игра", "Кулинарная книга", "Подарочный набор"],
  };

  const brandGifts = {
    "Apple": {
      "До 5000 рублей": ["Чехол для iPhone", "Старая модель AirPods", "Адаптер для наушников"],
      "5000-15000 рублей": ["AirPods (новая модель)", "iPad (базовая модель)", "Apple Watch (бюджетная модель)"],
      "15000-30000 рублей": ["iPhone SE (новая модель)", "iPad Air", "MacBook Air (б/у)"],
      "Более 30000 рублей": ["iPhone 14 Pro", "MacBook Pro", "iPad Pro"],
    },
    "Samsung": {
      "До 5000 рублей": ["Чехол для Galaxy", "Galaxy Buds (старые модели)", "Зарядное устройство"],
      "5000-15000 рублей": ["Galaxy A-серия (бюджетные смартфоны)", "Galaxy Watch (базовая модель)", "Наушники Galaxy Buds+"],
      "15000-30000 рублей": ["Galaxy S21 (б/у)", "Galaxy Tab S6 Lite", "Samsung Galaxy Watch Active2"],
      "Более 30000 рублей": ["Samsung Galaxy Z Fold 4", "Samsung Galaxy S22 Ultra", "Samsung QLED TV"],
    },
    "Xiaomi": {
      "До 5000 рублей": ["Чехол для Mi-смартфона", "Mi Band (старая модель)", "Пауэрбанк"],
      "5000-15000 рублей": ["Xiaomi Mi 10 Lite", "Redmi Note 10", "Умные часы Mi Watch"],
      "15000-30000 рублей": ["Xiaomi Mi 11", "Redmi K40", "Xiaomi Mi Pad 5"],
      "Более 30000 рублей": ["Xiaomi Mi 12 Pro", "Xiaomi Mi Mix 4", "Умный телевизор Xiaomi"],
    },
    "Sony": {
      "До 5000 рублей": ["Чехол для Xperia", "Наушники проводные Sony", "Беспроводные колонки (бюджетные модели)"],
      "5000-15000 рублей": ["Наушники Sony WH-CH710N", "Смартфон Sony Xperia 10", "Портативная колонка Sony SRS-XB12"],
      "15000-30000 рублей": ["Sony Xperia 5 II", "Наушники Sony WH-1000XM3", "Портативная камера Sony ZV-1"],
      "Более 30000 рублей": ["Sony A7 III (камера)", "Sony WH-1000XM4 (наушники)", "Sony PlayStation 5"],
    },
    "Другой": {
      "До 5000 рублей": ["Подарочная карта", "Книга", "Аксессуары для техники"],
      "5000-15000 рублей": ["Подарочный сертификат", "Настольная игра", "Аксессуары для компьютера"],
      "15000-30000 рублей": ["Курс по интересам", "Подарочный сертификат на мастер-класс", "Билеты на концерт"],
      "Более 30000 рублей": ["Подарочный сертификат на отдых", "Подарочная карта в магазин электроники", "Профессиональный курс по интересам"],
    },
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [selectedGifts, setSelectedGifts] = useState([]);
  const navigate = useNavigate();

  const handleAnswerSelect = (option, index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const selectedAnswer = options[currentQuestion][selectedOption];
      setAnswers([...answers, selectedAnswer]);
  
      // Логика для выбора подарков
      if (currentQuestion === 0) {
        const randomGift = gifts[selectedAnswer][Math.floor(Math.random() * gifts[selectedAnswer].length)];
        setSelectedGifts([randomGift]);
      } else if (currentQuestion === 1) {
        const purposeGift = purposeGifts[selectedAnswer][Math.floor(Math.random() * purposeGifts[selectedAnswer].length)];
        setSelectedGifts((prevGifts) => [...prevGifts, purposeGift]);
      } else if (currentQuestion === 2) {
        // Выбор подарка на основе ценового диапазона
        const allBrandGifts = Object.keys(brandGifts).flatMap(brand => brandGifts[brand][selectedAnswer]);
        const randomPriceGift = allBrandGifts[Math.floor(Math.random() * allBrandGifts.length)];
        setSelectedGifts((prevGifts) => [...prevGifts, randomPriceGift]);
      } else if (currentQuestion === 3) {
        // Выбор подарка на основе бренда
        const brandGiftsForSelectedAnswer = brandGifts[selectedAnswer];
        const selectedPriceGift = selectedGifts[2]; // Подарок из третьего вопроса
        let availableGifts = [];
  
        // Собираем все подарки для выбранного бренда
        for (const priceRange in brandGiftsForSelectedAnswer) {
          availableGifts = availableGifts.concat(brandGiftsForSelectedAnswer[priceRange]);
        }
  
        // Убираем подарок из третьего вопроса, если он есть в доступных подарках
        if (selectedPriceGift) {
          availableGifts = availableGifts.filter(gift => gift !== selectedPriceGift);
        }
  
        // Выбираем случайный подарок, если доступные подарки есть
        if (availableGifts.length > 0) {
          const randomBrandGift = availableGifts[Math.floor(Math.random() * availableGifts.length)];
          setSelectedGifts((prevGifts) => [...prevGifts, randomBrandGift]);
        }
      }
  
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        navigate("/results", { state: { answers, selectedGifts } });
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
{/*       {selectedGifts.length > 0 && currentQuestion === questions.length - 1 && (
        <div className="gift-suggestions">
          <h3>Рекомендуемые подарки:</h3>
          <ul>
            {selectedGifts.map((gift, index) => (
              <li key={index}>{gift}</li>
            ))}
          </ul>
        </div>
      )} */}
      <div className="snowflakes">
        <span className="snowflake">❄</span>
        <span className="snowflake">❄</span>
        <span className="snowflake">❄</span>
        <span className="snowflake">❄</span>
        <span className="snowflake">❄</span>
      </div>
    </div>
  );
};

export default WomanForm;
