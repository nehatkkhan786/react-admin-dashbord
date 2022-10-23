import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import New from './pages/new/New'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import List from './pages/list/List'
import Single from './pages/single/Single'


const App = () => {
  
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/new' element={<New/>}/>
    <Route path='/users' element={<List/>}/>
    <Route path='/users/:id' element={<Single/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App