import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import axios from  'axios';
import newsImg from '../assets/newsImg.jpg'

function NewsBoard({category}) {

  const [news, setNews] = useState([]);
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b9653251debb4c40b8e1a407b7eb7392`

  useEffect(() => {
    const fetchNews = async () => {
        try {
            const response = await axios.get(url)
            console.log(response.data.articles)
            setNews(response.data.articles)
        } catch (error) {
            console.log('Error fetching news:', error);
        }
    }
    fetchNews()
  }, [category])

  return (
    <>
    <div className=''>
    <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 place-items-center'>
    {news.map((data,index) => (
         <div className='p-5' key={index}>
            <NewsCard title={data.title} img={data.urlToImage ?  data.urlToImage : newsImg} description={data.description} url={data.url} />
        </div>
    ))}
    </div>
    </div>
    </>
  )
}

export default NewsBoard