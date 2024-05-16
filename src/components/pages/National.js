import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "../NewsItem";

// import { useProSidebar } from "react-pro-sidebar";

const National = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=ng&apiKey=7162cbcf047e4998a1af47fd339e3eab"
      );
      console.log(response);

      // collapseSidebar();
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  return (
    <>
      {articles.map((article) => {
        return (
          <NewsItem
            author={article.author}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </>
  );
};

export default National;
