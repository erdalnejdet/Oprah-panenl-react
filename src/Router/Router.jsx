import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext' 

import Signin from '../auth/Signin'
import Login from '../auth/Login'
import Home from '../pages/Home'
import SeansTakvimi from '../pages/SeansTakvimi'


function Router() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='üye-ol' element={<Signin/>}/>
        <Route path='Giris-yap' element={<Login/>}/>
        {/* Kullanıcı giriş yapmamışsa SeansTakvimi'ne erişmeye çalışırken login sayfasına yönlendirilir */}
        <Route
          path='Seans-takvimi'
          element={isAuthenticated ? <SeansTakvimi/> : <Navigate to="/Giris-yap" />}
        />
        <Route path='home' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Router;
