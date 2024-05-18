import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import News from './components/News'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
        <Route path='/' element={<News/>} />
        <Route path='/Bussiness' element={<News/>} />
      </Route>
    )
  )

  return (
   <RouterProvider router={router}/>
  )
}
export default App
