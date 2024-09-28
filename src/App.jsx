import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Detail, Home } from './Pages'
import FetchId from './Fetching/FetchId'




function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product/detail/:product_id' element={<Detail/>}/>
        <Route path='/producto/detail/:pxid' element={<FetchId/>}/>
      </Routes>

    </>
  )
}

export default App
