import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css"

const Electrician = () => {
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
      title: 'Whole building Ele',
      subtitle: 'Our experienced Ele will come to the site,  and give a cost estimate.',
      extra:"free Visit",
      price: 0,
      imageUrl: '../images/serviceimg/pan1.png',
    },
    {
      title: 'Installation / replace bulbs or tubelight',
      subtitle: 'Light point fitting /Holder repair and replacement / power Socket / energy meter',
      extra:"per Point",
      price: 325,
      imageUrl: '../images/serviceimg/e1.png',
    },
    {
      title: 'Installation of decortive light',
      subtitle: 'Repair or replacement',
      extra:"per Point",
      price: 375,
      imageUrl: '../images/serviceimg/e2.png',
    },
    {
      title: '2x2 Light Replacement',
      subtitle: 'Includes light installation with wiring upto 7 meter',
      extra:"per Point",
      price: 350,
      imageUrl: '../images/serviceimg/e3.png',
    },
    {
      title: 'Focus Light Installation',
      subtitle: 'Includes light installation with wiring upto 7 meter',
      extra:"per Point",
      price: 550 ,
      imageUrl: '../images/serviceimg/e4.png',
    },
    {
      title: 'Install / Replace or Repair Power Socket ',
      subtitle: 'Includes power socket and PVC box installation ',
      extra:"per Point",
      price: 400,
      imageUrl: '../images/serviceimg/e5.png',
    },
    {
      title: 'Install / Repair / Replace Switch board',
      subtitle: 'Repair or replacement',
      extra:"per Point",
      price: 520,
      imageUrl: '../images/serviceimg/e6.png',
    },
    {
      title: 'Telephone Socket Installation',
      subtitle: 'Repair or replacement ',
      extra:"per Point",
      price: 500,
      imageUrl: '../images/serviceimg/e7.png',
    },
    {
      title: 'SP / DP MCB Installation ',
      subtitle: 'Includes MCB Intallation with wiring',
      extra:"per Point",
      price: 520,
      imageUrl: '../images/serviceimg/e8.png',
    },
    {
      title: 'TPN Fuse, MCB repair and replacement three phase',
      subtitle: 'Includes MCB change or distribution board wire issue',
      extra:"per Point",
      price: 700,
      imageUrl: '../images/serviceimg/e9.png',
    },
    {
      title: 'Energy meter Installation / Replacement  single phase',
      subtitle: 'Includes Energy Meter install with wiring ',
      extra:"per Point",
      price: '520 / 300',
      imageUrl: '../images/serviceimg/e10.png',
    },
    {
      title: ' Fan Installation ',
      subtitle: 'Celling fan /Wall Fan installation and regulator with wiring  ',
      extra:"per Point",
      price: '520',
      imageUrl: '../images/serviceimg/e11.png',
    },
    {
      title: 'Inverter Installation (12v) / (24v)',
      subtitle: 'inverter connection and supply ',
      extra:"per Point",
      price: '550',
      imageUrl: '../images/serviceimg/e12.png',
    },
    {
      title: 'Television Installation',
      subtitle: 'inverter connection and supply ',
      extra:"per Point",
      price: '1000 / 1500',
      imageUrl: '../images/serviceimg/e13.png',
    },

  ];


  return (
    <div className="app">



      <div className="row">
      <div className="column ">
        <FormCard />
        </div>
        <div className="column">
        <div className='pageheading'> Why Homeplex Electrician? </div>
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

export default Electrician;
