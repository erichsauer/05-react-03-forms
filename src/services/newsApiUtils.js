const URL = 'https://newsapi.org/v2/';
const KEY = '6fc3037a9f8943fc97f328277bb6338e';

// everything?q=Apple&from=2021-05-13&sortBy=popularity&apiKey=API_KEY

export const getArticles = async (query) => {
  let res;
  if (query) {
    res = await fetch(
      `${URL}everything?q=Apple&from=2021-05-13&sortBy=popularity&apiKey=${KEY}`
    );
  } else {
    res = await fetch(`${URL}top-headlines?country=us&apiKey=${KEY}`);
  }
  const { articles } = await res.json();
  return articles.map(
    ({ title, urlToImage, description, author, content }) => ({
      title,
      urlToImage,
      description,
      author,
      content,
    })
  );
};
