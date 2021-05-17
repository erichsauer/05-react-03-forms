import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

function ArticleList({ articles }) {
  return articles.map((article, i) => {
    return (
      <li key={article.title + i}>
        <Article {...article} />;
      </li>
    );
  });
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      urlToImage: PropTypes.string,
      description: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default ArticleList;
