import React from 'react';
import "../../pages/features/allpage.css";
import MyImage from './plumber1.png'; 
import Card from './cardItem'; 
const Imagecard = () => {
    const cardItems = [
        { heading: '200+', subtitle: 'Expert HandyMan',cover: "../images/hero/h1.png", },
        { heading: '2000+', subtitle: 'Satified Costumer',cover: "../images/hero/h1.png", },
        { heading: '500+', subtitle: 'Project Completed', cover: "../images/hero/h1.png", },
        { heading: '3000+', subtitle: 'Total Booking',cover: "../images/hero/h1.png", },
        // Add more items as needed
      ];
    
  return (
    <div className="contactcard ">
     <Card cardItems={cardItems} />
    {/* <img src={MyImage} alt="Description of the image" /> */}
    </div>
  );
};

export default Imagecard;