import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, urlToImage, description, author, content }) {
  return (
    <>
      <h1>{title}</h1>
      <figure>
        <img style={{ width: 200 }} src={urlToImage} alt={title} />
        <figcaption>{description}</figcaption>
      </figure>
      <h3>{author}</h3>
      <p>{content}</p>
    </>
  );
}

Article.propTypes = {
  title: PropTypes.string,
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
};

export default Article;
