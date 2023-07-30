import React from 'react';

const Card = ({ cardItems }) => {
  return (
    <div className="expertcard-list">
      {cardItems.map((item, index) => (
        <div className="expertcard" key={index}>
               <div className="experticon-container">
            <img src={item.cover} alt="Icon" />
          </div>
          <h2>{item.heading}</h2>
          <p>{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
