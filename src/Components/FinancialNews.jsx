// src/components/FinancialNews.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";



const FinancialNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "5bb7c4cf6d534a66947e9bca9d2f47db"; // Replace with your actual key
// async ensures that the code running does not hold up other codes or the app from being run
// await is used before a promise to pause execution until it resolves
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=business&apikey=${API_KEY}`
          );
          
        setNews(response.data.articles);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container" >
      <h2 className="text-xl font-bold mb-4" style={{ textAlign:"center" }}>📈 Latest Financial News</h2>
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <ul className="space-y-4">
                {news.map((item, index) => (
        <div key={index} className="news-card">
            <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="news-title"
            >
            {item.title}
            </a>
            <p className="news-date">{new Date(item.publishedAt).toLocaleDateString()}</p>
            <p className="news-description">{item.description}</p>
            {item.urlToImage && (
            <img src={item.urlToImage} alt={item.title} className="news-image" />
            )}
        </div>
        ))}
        </ul>
      )}
    </div>
  );
};

export default FinancialNews;
