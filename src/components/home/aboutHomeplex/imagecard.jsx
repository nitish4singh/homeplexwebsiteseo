import React from 'react';
import "../../pages/features/allpage.css";
import Card from './cardItem'; 

const Imagecard = () => {
    const cardItems = [
        { heading: '150+', subtitle: 'Expert HandyMan',cover: "../images/hero/handyman.png", },
        { heading: '2000+', subtitle: 'satisfied Customer',cover: "../images/hero/happy.png", },
        { heading: '500+', subtitle: 'Project Completed', cover: "../images/hero/project.png", },
        { heading: '3000+', subtitle: 'Total Booking',cover: "../images/hero/booking.png", },
        // Add more items as needed
      ];
      return (
    <div className="contactcard ">
     <Card cardItems={cardItems} />
       </div>
  );
};

export default Imagecard;