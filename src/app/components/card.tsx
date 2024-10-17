import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      width: '200px',
      textAlign: 'center'
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
