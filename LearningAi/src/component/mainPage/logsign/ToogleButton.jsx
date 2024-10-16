import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'


const ToogleButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if(location.pathname === '/Login'){
            navigate('/CreateAcc')
        }else {
            navigate('/Login')
        }
    };

  return (
    <button onClick={handleClick} className='text-green-600 hover:underline'>
        {location.pathname === '/Login'
        ? "Create Account"
    : "Log in"}
    </button>
        
  )
}

export default ToogleButton
