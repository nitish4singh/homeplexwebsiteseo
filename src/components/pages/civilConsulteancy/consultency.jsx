import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css"

const Consultency = () => {
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
      title: 'Tile Installation',
      subtitle: 'Labour Cost only',
      extra:"",
      price: 40,
      imageUrl: '../images/serviceimg/con1.png',
    },
    {
      title: 'skirting',
      subtitle: 'Labour Cost only',
      extra:"",
      price: 45,
      imageUrl: '../images/serviceimg/con2.png',
    },
    {
      title: 'Marble Installation',
      subtitle: 'Labour Cost only',
      extra:"",
      price: 70,
      imageUrl: '../images/serviceimg/con3.png',
    },
    {
      title: 'Molding',
      subtitle: 'Labour Cost only',
      extra:"",
      price: 75,
      imageUrl: '../images/serviceimg/con4.png',
    },
    {
      title: 'Granite installation',
      subtitle: 'Labour Cost only',
      extra:"",
      price: 90,
      imageUrl: '../images/serviceimg/con5.png',
    },
    {
      title: '4" wall construction',
      subtitle: 'Labour Cost only',
      extra:"",
      price: 35,
      imageUrl: '../images/serviceimg/con6.png',
    },
    {
      title: '9" wall construction',
      subtitle: 'Labour Cost only',
      extra:"",
      price: 65,
      imageUrl: '../images/serviceimg/con6.png',
    },
    {
      title: 'Plaster works',
      subtitle: 'Labour Cost only',
      extra:"",
      price: 30,
      imageUrl: '../images/serviceimg/con7.png',
    },
  ];


  return (
    <div className="app">



      <div className="row">
      <div className="column ">
        <FormCard />
        </div>
        <div className="column">
        <div className='pageheading'> Why Homeplex Consultency? </div>
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

export default Consultency;
