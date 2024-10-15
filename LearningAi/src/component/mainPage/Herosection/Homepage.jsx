import React from 'react';
import Card from './Card';

const cardData = [
  { image: '/images/python_programming_image.jpeg', title: 'Create course of Python' },
  { image: '/images/ai_image.jpeg', title: 'Create course of AI' },
  { image: '/images/machine_learning.jpeg', title: 'Create course of ML' },
];

const Homepage = () => {
  return (

    
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4 mt-16 mb-20">
    
      {cardData.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} />
      ))}
    </div>
  );
};

export default Homepage;
