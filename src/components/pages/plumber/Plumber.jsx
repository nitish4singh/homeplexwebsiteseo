import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css"

const Plumber = () => {
    const images = [
      {
        id: 1,
        imageUrl: '../images/serviceimg/pw1.png',
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

  const NewpriceList = [
    {
      title: 'Double line bathroom fitting',
      subtitle: 'sanitary & c.p fiftting for bathroom ',
      extra:"per Point",
      price: '10000 -13000',
      imageUrl: '../images/serviceimg/p9.png',
    },
    {
      title: 'Double line kitchen fitting ',
      subtitle: 'New Installation',
      extra:"per Point",
      price: 400,
      imageUrl: '../images/serviceimg/pp9.png',
    },
    {
      title: 'Single line bathroom fitting  ',
      subtitle: 'New Installation',
      extra:"per Point",
      price: 7000,
      imageUrl: '../images/serviceimg/SP1.png',
    },
    {
      title: 'Single line kitchen fitting',
      subtitle: 'New Replacement or Installation ',
      extra:"per Point",
      price: 2500,
      imageUrl: '../images/serviceimg/pk1.png',
    },
    {
      title: 'Roof top tank fitting ',
      subtitle: 'New Replacement or Installation',
      extra:"per Point",
      price: 3000,
      imageUrl: '../images/serviceimg/p15.png',
    },
    {
      title: 'Water pump fitting ',
      subtitle: 'water pump fitting & suction pipe line connection',
      extra:"per Point",
      price: 2500,
      imageUrl: '../images/serviceimg/p12.png',
    },
    {
      title: 'Extra basin fitting',
      subtitle: 'New Replacement or Installation',
      extra:"per Point",
      price: 1300,
      imageUrl: '../images/serviceimg/pb13.png',
    },
    {
      title: 'Extra toilet fitting',
      subtitle: 'New Replacement or Installation',
      extra:"per Point",
      price: 3000,
      imageUrl: '../images/serviceimg/p14.png',
    },
  ];

  const priceList = [
    {
      title: 'Common Repair & maintanance',
      subtitle: 'Price for a single, simple repair is 500 for one point, and for the other point',
      extra:"per Point",
      price: 200,
      imageUrl: '../images/serviceimg/pul1.png',
    },
    {
      title: 'Tap installation ',
      subtitle: 'New Installation',
      extra:"per Point",
      price: 400,
      imageUrl: '../images/serviceimg/p2.png',
    },
    {
      title: 'Tap Water Blockage ',
      subtitle: 'Low Pressure in tap',
      extra:"per Point",
      price: 2400,
      imageUrl: '../images/serviceimg/p3.png',
    },
    {
      title: 'flush tank replacement simple',
      subtitle: 'New Replacement or Installation ',
      extra:"per Point",
      price: 800,
      imageUrl: '../images/serviceimg/p4.png',
    },
    {
      title: 'Urinal Flush ',
      subtitle: 'blockage,repair,leackage',
      extra:"per Point",
      price: 800,
      imageUrl: '../images/serviceimg/p5.png',
    },
    {
      title: 'Over Head Tank Cleaning',
      subtitle: 'up to 1000 ltr',
      extra:"per number",
      price: 2000,
      imageUrl: '../images/serviceimg/p6.png',
    },

    {
      title: 'Solar Tube Replacement',
      subtitle: 'New Replacement or Installation',
      extra:"per Point",
      price: 1400,
      imageUrl: '../images/serviceimg/p7.png',
    },
    {
      title: 'Shower Head Installation',
      subtitle: ' ',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/serviceimg/p8.png',
    },
  ];


  return (
    <div className="app">
      <div className="row">
      <div className="column ">
        <FormCard />
        </div>
        <div className="column">
        <div className='pageheading'> Why Homeplex plumber? </div>
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
        New Replacement or Installation
        </div>
        <div className="column ">
        <div className="price-list">
          {NewpriceList.map((item, index) => (
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
              
  );
};

export default Plumber;
