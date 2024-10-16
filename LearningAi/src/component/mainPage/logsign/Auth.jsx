import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import CreateAcc from './CreateAcc'

const Auth = () => {
  return (
    
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/CreateAcc" element={<CreateAcc/>}/>
    </Routes>
    
  )
}

export default Auth
