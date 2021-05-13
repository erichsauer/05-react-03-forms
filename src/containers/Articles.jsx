import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Controls from '../components/articles/controls';
import { getArticles } from '../services/newsApiUtils';

export default class Articles extends Component {
  state = {
    loading: true,
    articles: [],
    query: '',
  };

  async componentDidMount() {
    const articles = await getArticles();
    this.setState({
      articles,
      loading: false,
    });
  }

  handleQuery = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const articles = await getArticles(this.state.query);
    this.setState({ articles });
  };

  render() {
    const { loading, query, articles } = this.state;
    if (loading) return <div>Loading...</div>;
    return (
      <>
        <Controls
          query={query}
          onFormSubmit={this.handleSubmit}
          onQueryChange={this.handleQuery}
        />
        <ul aria-label="articles">
          <ArticleList articles={articles} />
        </ul>
      </>
    );
  }
}
