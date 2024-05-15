import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [category, setCategory] = useState("business")

  const getNews = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b9653251debb4c40b8e1a407b7eb7392`)
      .then((response) => {
        console.log(response);
        setData(response.data.articles)
      })
  }

  useEffect(() => {
    getNews()
  }, [category])

  return (
    <>
      <div className='grid gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2'>
        {
          data.map((news, index) => (
            <div 
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
            justify-center">
                <img className="rounded-t-lg" src={news.urlToImage} alt="" />
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{news.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{(news.description)}</p>
                <a href={news.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default App
