import React from 'react'
import { useNavigate } from 'react-router-dom'

const IconLogSign = () => {
  const navigate = useNavigate();

  return (
    <div className='flex gap-x-4 absolute top-3 right-2'>
      <button onClick={() => navigate('/Login')}
      className='bg-white text-black hover:bg-zinc-100 px-4 py-2 rounded-lg '>Login</button>
      
      <button onClick={() => navigate('/CreateAcc')}
      className='border-2 border-zinc-600 text-white hover:bg-zinc-800 px-2 py-2 rounded-lg '
      >Create an account</button>
    </div>
  )
}

export default IconLogSign
