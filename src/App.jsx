import { useState } from 'react'
import './App.css'
import Router from './Router/Router'
import Header from './Components/Header'
import { AuthProvider } from './context/AuthContext'



function App() {


  return (
    <>
    <AuthProvider>
    <Header/>
    <Router/>
    </AuthProvider>

    </>
  )
}

export default App
