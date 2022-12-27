export const getNews = async () =>
  await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2022-11-27&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`,
  )
