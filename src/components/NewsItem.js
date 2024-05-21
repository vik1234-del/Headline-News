import React from "react";
import styled from "styled-components";

const NewsItemContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto; // Center the item within the grid cell
  transition: transform 0.2s;
  width: 100%; // Make sure the item takes up the full width of the grid cell
  max-width: 400px; // Optionally limit the maximum width
  &:hover {
    transform: translateY(-5px);
  }
  height: 500px;
`;

const NewsItemSource = styled.h2`
  font-size: 1.5em;
  font-family: "Baskerville", serif;
  margin: 16px 16px 0 16px;
`;

const NewsItemAuthor = styled.h3`
  font-size: 1.2em;
  color: #555;
  margin: 0 16px 16px 16px;
`;

const NewsItemImage = styled.img`
  width: 100%;
  height: auto;
`;

const NewsItemContent = styled.div`
  padding: 16px;
`;

const NewsItemTitle = styled.h3`
  font-size: 1.3em;
  font-family: "Baskerville", serif;
`;

const NewsItemLink = styled.a`
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// const NewsItemDescription = styled.p`
//   font-size: 1em;
//   color: #333;
// `;

const NewsItem = ({ source, title, description, url, urlToImage, author }) => {
  return (
    <NewsItemContainer>
      <NewsItemSource>{source}</NewsItemSource>
      <NewsItemAuthor>{author}</NewsItemAuthor>
      <NewsItemImage src={urlToImage} alt={title} />
      <NewsItemContent>
        <NewsItemTitle>
          <NewsItemLink href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </NewsItemLink>
        </NewsItemTitle>
        {/* <NewsItemDescription>{description}</NewsItemDescription> */}
      </NewsItemContent>
    </NewsItemContainer>
  );
};

export default NewsItem;
