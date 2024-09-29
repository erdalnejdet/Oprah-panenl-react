import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Signin from '../auth/Signin'
import Login from '../auth/Login'

import Home from '../pages/Home'
import SeansTakvimi from '../pages/SeansTakvimi'


function Router() {
  return (
    <div>


        
        <Routes>
        <Route path='/' element={<Home/>}/>
            <Route path='üye-ol' element={<Signin/>}/>
            <Route path='Seans-takvimi' element={<SeansTakvimi/>}/>
             <Route path='Giris-yap' element={<Login/>}/>
             <Route path='home' element={<Home/>}/>

        </Routes>
    </div>
  )
}

export default Router