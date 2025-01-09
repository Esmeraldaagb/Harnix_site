import React from 'react';

interface TextProps {
  title?: string;  
  subtitle?: string; 
  className?: string; 
}

const Text: React.FC<TextProps> = ({ title, subtitle, className }) => {
  return (

    <div className={className}>
      {title && <h2 className="text-xl font-bold">{title}</h2>} 
      {subtitle && <h3 className="text-lg text-gray-400">{subtitle}</h3>} 
    </div>
  );
};

export default Text;
