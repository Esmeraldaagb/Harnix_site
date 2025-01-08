import React from 'react';

interface CardProps {
  image?: string;  
  title?: string; 
  description?: string;  
  buttonLabel?: string;
  children?:React.ReactNode;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonLabel, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={onButtonClick}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;
