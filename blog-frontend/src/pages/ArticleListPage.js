import React from "react";
import articles from "./article-content";
import ArticlesList from "../components/ArticlesList";

const ArticleListPage = () => {
  return (
    <>
      <ArticlesList articles={articles} />
    </>
  );
};

export default ArticleListPage;
