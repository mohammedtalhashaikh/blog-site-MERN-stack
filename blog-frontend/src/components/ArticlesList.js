import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Link
          to={`/article/${article.name}`}
          className="article-list-item"
          key={article.name}
        >
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
};

export default ArticlesList;
