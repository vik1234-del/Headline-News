import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "../NewsItem"; // Ensure the correct import path

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); // Adjust the min-width as needed
  gap: 16px; // Space between grid items
  padding: 16px; // Padding around the grid
`;

const Business = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://eventregistry.org/api/v1/article/getArticles";
    const data = {
      query: {
        $query: {
          $and: [
            {
              categoryUri: "news/Business",
            },
          ],
        },
        $filter: {
          forceMaxDataTimeWindow: "31",
        },
      },
      resultType: "articles",
      articlesSortBy: "date",
      apiKey: "9269ec65-21db-4a48-80be-879354a41097",
    };

    const getArticles = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData); // Log the response data
        const articles = responseData.articles.results;
        setArticles(articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <GridContainer>
      {articles.map((article, index) => (
        <NewsItem
          key={index}
          source={article.source?.title || "Unknown Source"}
          title={article.title}
          description={article.body}
          url={article.url}
          urlToImage={article.image}
          author={
            article.authors?.length > 0
              ? article.authors[0].name
              : "Unknown Author"
          }
        />
      ))}
    </GridContainer>
  );
};

export default Business;
