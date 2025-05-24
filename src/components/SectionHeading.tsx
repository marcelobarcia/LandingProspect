import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  emoji?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  children, 
  emoji, 
  className = '',
  centered = false
}) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold mb-6 leading-tight ${centered ? 'text-center' : ''} ${className}`}>
      {emoji && <span className="mr-2">{emoji}</span>}
      {children}
    </h2>
  );
};

export default SectionHeading;