import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NewsBoard from './components/NewsBoard'

function App() {

  const [category, setCategory] = useState('Business')

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer />
    </>
  )
}

export default App
