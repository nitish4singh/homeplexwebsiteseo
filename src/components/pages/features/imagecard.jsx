import React from 'react';
import "./allpage.css"

const ImageCard = ({ title, subtitle, price, imageUrl }) => {
  return (
    <div className="imagecard">
      <div  style={{ display: 'flex',  marginBottom: '20px' }}>
          <img src={imageUrl}  style={{ width: '1000px', height: '500px', marginRight: '30px' }} />
          <div>
            <h4 style={{ margin: '4' }}>{title}</h4>
            <p style={{ margin: '0' }}>{subtitle}</p>
            <span>{price}</span> 
          </div>
        </div>
    </div>
  );
};
export default ImageCard;
