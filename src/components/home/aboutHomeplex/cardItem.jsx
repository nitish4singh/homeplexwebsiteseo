import React from 'react';

const Card = ({ cardItems }) => {
  return (
    <div className="expertcard-list">
      {cardItems.map((item, index) => (
        <div className="expertcard" key={index}>
               <div className="experticon-container">
            <img src={item.cover} alt="Icon" />
          </div>
          <div className='experth2'>{item.heading}</div >
          <div className='expertp' >{item.subtitle}</div >
        </div>
      ))}
    </div>
  );
};

export default Card;
