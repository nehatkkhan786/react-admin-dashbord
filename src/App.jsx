import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import New from './pages/new/New'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/new' element={<New/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App