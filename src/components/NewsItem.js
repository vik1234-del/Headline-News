import React from "react";

const NewsItem = ({ author, source, title, description, url, urlToImage }) => {
  return (
    <div className="pa4 ma4 shadow-1">
      <div className="bg-white pa4 br3 ba b--black-10">
        <h2 className="f2 lh-solid fw6 near-black">{source}</h2>
        <h3>{author}</h3>
        <img src={urlToImage} className="pa2" alt={urlToImage} />
        <div className="ml4">
          <h3 className="f3 lh-copy near-black">
            <a href={url} className="link dim near-black">
              {title}
            </a>
          </h3>
          <p className="f4 lh-copy">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
