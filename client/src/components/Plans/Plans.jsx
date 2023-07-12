import React from 'react';
import './Plans.css'; // Import CSS file for styling

const PlanCard = ({ title, price, features }) => {
  return (
    <div className="plan-card">
      <h3 className="plan-title">{title}</h3>
      <p className="plan-price">${price}</p>
      <ul className="plan-features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="plan-button">Select Plan</button>
    </div>
  );
};

export default PlanCard;
