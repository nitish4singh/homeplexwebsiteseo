import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css"

const Carpenter = () => {
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
      title: 'modular kitchen daraz fitting',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 550,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'modular kitchen daraz fitting',
      subtitle: 'With material Charge',
      extra:"Sq Feet",
      price: "2200-3200",
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Modern bed ',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 650,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Door fitting simple with lock without listi',
      subtitle: 'Only Labour Charge',
      extra:"Nos",
      price: 1200,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Door fitting simple with lock with  listi',
      subtitle: 'Only Labour Charge',
      extra:"Nos",
      price: 1500,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Door fitting simple with door hinges',
      subtitle: 'Only Labour Charge',
      extra:"Nos",
      price: 1000,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'computer table ',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 550,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: ' jhal chaukas ',
      subtitle: 'Only Labour Charge',
      extra:"Kb",
      price: 550,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Door sadha khapa',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 150,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Door check khapa  ',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 300,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'simple chair',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 1500,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'Simple Table',
      subtitle: 'Lenght 3ft width ft heigth 2.6ft with four legs',
      extra:"Nos",
      price: 2000,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'wood parketing ',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 50,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'stair case railing siso wood',
      subtitle: 'Lenght 3ft width ft heigth 2.6ft with four legs , labour charge only ',
      extra:"Running feet",
      price: 750,
      imageUrl: '../images/list/p-6.png',
    },
    {
      title: 'stair case railing sallo wood ',
      subtitle: 'Only Labour Charge',
      extra:"Running feet",
      price: 550,
      imageUrl: '../images/list/p-6.png',
    },

  ];


  return (
    <div className="app">



      <div className="row">
      <div className="column ">
        <FormCard />
        </div>
        <div className="column">
        <div className='pageheading'> Why Homeplex Carpenter? </div>
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
        <div className='headingall'>
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
    </div>
              </div>
              
  );
};

export default Carpenter;
