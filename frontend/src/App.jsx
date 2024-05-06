import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {


  const [products, setProducts] = useState([])
  const [error, setError]  = useState(false)
  const [loading, setLoading] = useState(false)
  const [search, setsearch] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setError(false)
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal
        })
        console.log(response.data);
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)) {
          console.log("Request canceled", error.message);
          return
        }
        setError(true)
        setLoading(false)
      }
    })()
    
    //cleanup
    return () => {
      controller.abort()
    }
  }, [search])

  //const [products, error, loading] = customReactquery('/api/products')


  return (
    <>
    <h1>Chai aur API in react</h1>
    <input  
    type='text'
    placeholder='Search'
    value={search}
    onChange={(e) => setsearch(e.target.value)}
    />


    {loading && (<h1>Loading ... </h1>)}
    {error && (<h1>Something went wrong</h1>)}
    <h2>Number of Products are: {products.length}</h2>
    <h1></h1>
    </>
  )
}

export default App

const customReactquery = (urlPath) => {
 

  return [products, error, loading]
}