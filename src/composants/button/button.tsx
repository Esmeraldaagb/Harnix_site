
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({ width,height,label, onClick,className }) => {
  return (
    <button onClick={onClick}
     className={className}>
      {label}
    </button>
  );
};

export default Button;