import React from 'react';
import './FancyCard.css'; // Import the CSS file

const FancyCard = ({ imageSrc, title, description }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={imageSrc} alt="Background" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default FancyCard;
