import React, { useCallback, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import './NewsItem.css'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const captalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = useCallback(async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);

    try {
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(50);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setLoading(false);
      props.setProgress(100);
    }
  }, [props.country, props.category, props.apiKey, props.pagesize, page]);

  useEffect(() => {
    document.title = `${captalize(props.category)} - NewsElephant`;
    updateNews();
  }, [props.category, updateNews]);




  const fetchMoreData = useCallback(async () => {
    setTimeout(async () => {
      const newPage = page + 1;
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${newPage}&pagesize=${props.pagesize}`;
      try {
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(prevArticles => [...prevArticles, ...parsedData.articles]);
        setTotalResults(parsedData.totalResults);
      } catch (error) {
        console.error("Failed to fetch more news:", error);
      }
    }, 1000); // Delay by 2 seconds
  }, [page, props.country, props.category, props.apiKey, props.pagesize]);

  return (
    <>
      <h1 className='text-center' style={{ marginTop: "90px", marginBottom: "20px" }}>{captalize(props.category)}</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        >
        <div className="container">
          <div className="row ">
            {articles.map((element) => (
              <div key={element.url} className="col-md-4">
                <NewsItem
                  source={element.source.name}
                  author={element.author}
                  date={element.publishedAt.slice(0, 10)}
                  title={element.title || ""}
                  description={element.description || ""}
                  imgUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
