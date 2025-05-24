import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  primary = true, 
  onClick, 
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-medium text-base transition-all duration-300 transform hover:scale-105 
      ${primary 
        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg' 
        : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-indigo-500'} 
      ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;