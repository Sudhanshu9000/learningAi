import React from 'react'

const Card = ({ image, title }) => {
  return (
         
    
    <div className=' rounded-lg border-8 border-zinc-800 overflow-hidden transform transition-transform  hover:scale-105'>
      <img src= {image}
       alt= {title}  
       className='w-full h-56 object-cover object-center'/>
      <div className='p-4 bg-zinc-800'>
            <h2 className='text-white text-lg font-semibold'>{title}</h2>
      </div>
    </div>
  )
}

export default Card;
