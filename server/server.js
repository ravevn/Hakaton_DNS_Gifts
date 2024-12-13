const express = require("express");
const axios = require("axios");
const xml2js = require("xml2js");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());


const fetchAndConvertXML = async (url) => {
  const parser = new xml2js.Parser({ explicitArray: false });

  try {
    const response = await axios.get(url);
    const xmlData = response.data;
    const jsonData = await parser.parseStringPromise(xmlData);
    return jsonData;
  } catch (error) {
    console.error(`Ошибка обработки ${url}:, error.message`);
    throw error;
  }
};

// Создаем API для получения данных
app.get("/api/data", async (req, res) => {
  const urls = [
    "https://www.dns-shop.ru/sitemap.xml",
    "https://www.dns-shop.ru/products1.xml",
  ];

  try {
    const results = {};

    for (const url of urls) {
      results[url] = await fetchAndConvertXML(url);
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Ошибка загрузки данных" });
  }
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});