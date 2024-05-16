import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "../NewsItem";
// import Navbar from "../NavBar";
import { useSearchContext } from "../SearchContext"; // Import the useSearchContext hook

const Home = () => {
  const { searchKeyword } = useSearchContext(); // Access search keyword state

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchKeyword}&apiKey=7162cbcf047e4998a1af47fd339e3eab`
      );
      setArticles(response.data.articles);
    };
    getArticles();
  }, [searchKeyword]); // Update articles when searchKeyword changes

  return (
    <div>
      {/* Display articles */}
      {articles.map((article, index) => (
        <NewsItem
          key={index} // Make sure to add a unique key to each NewsItem
          source={article.source.name}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
        />
      ))}
    </div>
  );
};

export default Home;
