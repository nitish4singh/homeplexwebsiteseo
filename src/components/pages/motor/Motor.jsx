import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css"
import { Helmet } from "react-helmet";
const MotorService = () => {
    const images = [
      {
        id: 1,
        imageUrl: '../images/banner.png',
        title: 'Image 1',
      },
      {
        id: 2,
        imageUrl: '../images/banner.png',
        title: 'Image 2',
      },
          ];
  

  const servicesData = [
    {
      id: 1,
      title: 'On Budgets / No More rates',
      subtitle: 'We offer budget-friendly options without compromising quality. ',
      imageSrc: "../images/bill.png",
    },
    {
      id: 2,
      title: 'On Time Services',
      subtitle: '2 hrs Response time with  punctual and reliable services ',
      imageSrc: '../images/ontime.png',
    },
    {
      id: 3,
      title: 'Service Warranty',
      subtitle: 'We provide a one-month service warranty on the same issue.',
      imageSrc: '../images/qualify.png',
    },
    {
      id: 4,
      title: 'Verified Experts',
      subtitle: 'Highly trained & Dicipline professionals',
      imageSrc: '../images/24hrs.png',
    },
  ];
  
  const priceList = [
    {
      title: 'The Homeplex team will visit your location to identify the issue and provide an estimate for the necessary repairs or solutions.',
      subtitle: '',
      extra:"visiting Charge ",
      price: 500,
      imageUrl: '../images/serviceimg/m1.png',
    },
  ];

  return (
    <>
    <Helmet>
    <meta charset="utf-8" />
    <title>Motor Pumps in Kathmandu: Reliable Solutions for Water Needs</title>
    <meta  
      name="description"
      content="Explore our reliable motor pumps in Kathmandu for efficient water solutions. Trust us for quality and performance"
    />
    <meta 
      name="keywords"
      content="motor pumps in kathmandu, motor pump service in kathmandu, Electric Motor pump ,Submersible Pump repair and maintainance service  in kathmandu"
    />
  </Helmet>
    <div className="app">



      <div className="row">
      <div className="column ">
        <FormCard />
        </div>
        <div className="column">
        <div className='pageheading'> Why Homeplex MotorService? </div>
        <div>
            {servicesData.map(service => (
              <div key={service.id} className="service-item">
                <img src={service.imageSrc} alt={service.title} />
                <div>
                  <div className='serviceh2'>{service.title}</div>
                  <div className='servicep'>{service.subtitle}</div>
                </div>
              </div>
            ))}
    </div>
   
        </div>
        </div>

        <div className='headingall'>
          See Our Rates
        </div>
        <div className="column ">
        <div className="price-list">
          {priceList.map((item, index) => (
            <PriceCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              extra={item.extra}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        </div>
        {/* <div className='headingall'>
         Our Works 
        </div>
        <div className="card-container">
      {images.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt="Card" className="card-image" />
          <div className="card-content">
          <div className='serviceh2'>{card.title}</div>
          </div>
        </div>
      ))}
    </div> */}
              </div>
              </>
              
  );
};

export default MotorService;
