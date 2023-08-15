import React from 'react';
import "./allpage.css"

const PriceCard = ({ title, subtitle, price, imageUrl,extra }) => {
  return (
    <div className="ratecard">
            <div  style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={imageUrl}  style={{ width: '100px', height: '100px', marginRight: '10px' }} />
          <div>
          <div className='serviceh2'>{title}</div>
            <div className='servicep'>{subtitle}</div>
            <div className='rateprice'>Rs. {price}</div>
            <div className='extrah'>{extra}</div>
                     </div>
        </div>
    </div>
  );
};

export default PriceCard;
