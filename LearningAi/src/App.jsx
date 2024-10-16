import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './component/mainPage/Mainpage';  // Main home page
import Login from './component/mainPage/logsign/Login';  // Login component
import CreateAcc from './component/mainPage/logsign/CreateAcc';  // Create an account component

function App() {

  return (
      <Routes>
        {/* Route for the Main Page */}
        <Route path="/" element={<Mainpage/>} />
        
        {/* Route for Login Page */}
        <Route path="/Login" element={<Login/>} />

        {/* Route for Create Account Page */}
        <Route path="/CreateAcc" element={<CreateAcc/>} />
      </Routes>
  );
}

export default App
