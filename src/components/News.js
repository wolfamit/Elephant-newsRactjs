import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import './NewsItem.css'
import InfiniteScroll from "react-infinite-scroll-component";





 const News = (props)=> {
  const[articles , setArticles] = useState([]);
  const[loading , setLoading] = useState(true);
  const[page , setPage] = useState(1);
  const[totalResults , setTotalResults] = useState(0);



 const captalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading (true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  };

  useEffect(()=>{
    document.title = `${captalize(props.category)} - NewsElephant`;
    updateNews();
  },[])


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pagesize}`;
    setPage(page+ 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
  };

    return (
<>
        <h1 className='text-center' style={{marginTop:"90px" , marginBottom:"20px"}}> {captalize(props.category)}</h1>

         {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader = {<Spinner/>}>
          <div className="container">
            <div className="row ">
              {articles.map((element) => {
                return <div key={element.url} className="col-md-4">
                  <NewsItem source={element.source.name} author={element.author} date={element.publishedAt.slice(0, 10)} title={element.title? element.title:""} discription={element.description ? element.description : ""} imgUrl={element.urlToImage} url={element.url}  />
                </div>
              })};
            </div>
          </div>
        </InfiniteScroll >
  
</>
)};

  News.defaultProps = {
    country: 'in',
    pagesize: 8,
    category: 'general',


   
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  
}




export default News;
