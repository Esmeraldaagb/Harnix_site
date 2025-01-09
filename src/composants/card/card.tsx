import React from 'react';

interface CardProps {
  image?: string;  
  title?: string; 
  description?: string;  
  buttonLabel?: string;
  children?: React.ReactNode;
  className?: string; 
  imageClassName?: string; 
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, className, title, description, buttonLabel, imageClassName, onButtonClick }) => {
  return (
    <div>
      <img src={image} className={`object-cover rounded-lg ${imageClassName}`} /> 

      {title && <h3 className="text-lg font-semibold">{title}</h3>}

      {description && <p className="text-sm">{description}</p>}

      {buttonLabel && (
        <button onClick={onButtonClick} className="mt-2 bg-blue-500 text-white rounded px-4 py-2">
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default Card;
