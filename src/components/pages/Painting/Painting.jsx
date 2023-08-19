import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css"

const Painting = () => {
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
      title: 'Whole building panting',
      subtitle: 'Our experienced panting will come to the site,  and give a cost estimate.',
      extra:"free Visit",
      price: 0,
      imageUrl: '../images/serviceimg/pan1.png',
    },
    {
      title: 'Wall color',
      subtitle: 'Include Labour charges only',
      extra:"Exterior , Interior",
      price: "7-7",
      imageUrl: '../images/serviceimg/pan1.png',
    },
    {
      title: 'Silcon Paint',
      subtitle: 'Include Labour charges only',
      extra:"Exterior , Interior",
      price: "12-11",
      imageUrl: '../images/serviceimg/pan2.png',
    },
    {
      title: 'Wall Putting',
      subtitle: 'Include Labour charges only',
      extra:"Exterior , Interior",
      price: "10 ,9",
      imageUrl: '../images/serviceimg/pan3.png',
    },
    {
      title: 'Enamel Paint',
      subtitle: 'Include Labour charges only',
      extra:"Exterior , Interior",
      price: "17 ,16",
      imageUrl: '../images/serviceimg/pan4.png',
    },
    {
      title: 'Wall putting + color',
      subtitle: 'Include Labour charges only',
      extra:"Exterior , Interior",
      price: "18 ,15",
      imageUrl: '../images/serviceimg/pan5.png',
    },
    {
      title: 'polish major for wooden works',
      subtitle: 'Include Labour charges only',
      extra:"",
      price: 32,
      imageUrl: '../images/serviceimg/pan6.png',
    },
    {
      title: 'Carness',
      subtitle: 'Include Labour charges only',
      extra:"Exterior , Interior",
      price: 30,
      imageUrl: '../images/serviceimg/pan7.png',
    },
  ];


  return (
    <div className="app">
      <div className="row">
      <div className="column ">
        <FormCard />
        </div>
        <div className="column">
        <div className='pageheading'> Why Homeplex Painting? </div>
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
    );
};
export default Painting;
