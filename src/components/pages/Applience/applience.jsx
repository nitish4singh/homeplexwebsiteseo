import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css"
import { Helmet } from "react-helmet";
const Applience = () => {
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
      price: 300,
      imageUrl: '../images/serviceimg/ea1.png',
    },
    {
      title: 'Wall Mounted A/C Machine Servicing',
      subtitle: 'upto 2 Ton Capacity',
      extra:"per Point",
      price:  1900,
      imageUrl: '../images/serviceimg/ea2.png',
    },
    {
      title: 'Wall Mounted A/C Installation',
      subtitle: 'Both Indoor and Outdoor Unit  Wall mounted A/C up to 2 Ton ',
      extra:"per Point",
      price: 2800,
      imageUrl: '../images/serviceimg/ea2.png',
    },
    {
      title: 'Water purifier RO Water filter ',
      subtitle: 'Repair, Maintenance and Servicing',
      extra:"per unit",
      price: "1000 -2000",
      imageUrl: '../images/serviceimg/ea3.png',
    },
    {
      title: 'Washing Machine Installation',
      subtitle: 'Install or replace',
      extra:"per Poiper unit",
      price: 800,
      imageUrl: '../images/serviceimg/ea4.png',
    },

  ];


  return (
    <>
    <Helmet>
    <meta charset="utf-8" />
    <title>Applience Repair Service</title>
    <meta  
      name="description"
      content="Home repair Service in kathmandu ,Washing machine repair ,fridge repair in kathmandu,Gas geasure repair in kathmandu,Water purifier RO Water filte in kathmandu "
    />
    <meta 
      name="keywords"
      content="Home repair Service in kathmandu ,Washing machine repair ,fridge repair in kathmandu,Gas geasure repair in kathmandu,Water purifier RO Water filte in kathmandu "
    />
  </Helmet>

    <div className="app">
      <div className="row">
      <div className="column ">
        <FormCard />
        </div>
        <div className="column">
        <div className='pageheading'> Why Homeplex Applience? </div>
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
       
              </div>
              </>
  );
};

export default Applience;
