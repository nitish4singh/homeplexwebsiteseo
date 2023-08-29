
import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css";
import { Helmet } from "react-helmet";
const RepairMaintance = () => {
    // const images = [
    //   {
    //     id: 1,
    //     imageUrl: '../images/serviceimg/int1.png',
    //     title: 'Office Room Design By Ar.Tulsi for Client ',
    //   },
    //   {
    //     id: 2,
    //     imageUrl: '../images/serviceimg/int2.png',
    //     title: 'Design By Ar.Tulsi for Client ',
    //   },
    //   {
    //     id: 3,
    //     imageUrl: '../images/serviceimg/int3.png',
    //     title: 'living Room Design By  Ar. Tulsi ',
    //   },
    //   {
    //     id: 4,
    //     imageUrl: '../images/serviceimg/int4.png',
    //     title: 'Tv Room Design By Ar. Tulsi',
    //   },
    //   {
    //     id: 5,
    //     imageUrl: '../images/serviceimg/int5.png',
    //     title: 'Tvs Showrooms Design By Ar.Tulsi',
    //   },
    //   {
    //     id: 6,
    //     imageUrl: '../images/serviceimg/int6.png',
    //     title: 'Tvs Showrooms Design By Ar.Tulsi',
    //   },
    //       ];
          const typeData = [
            {
              id: 1,
              title: '1. Plumbing repairs and installations',

            },
            {
              id: 2,
              title: '2. Electrical repairs and installations ',
            },
            {
              id: 3,
              title: '3. HVAC repairs and maintenance',
            },
            {
              id: 4,
              title: '4. Lighting design and selection',
            },
            {
              id: 5,
              title: '5. Flooring and wall covering selections',

            },
            {
              id: 6,
              title: '6. Roof repairs and replacements',
            },
            {
              id: 7,
              title: '7. Painting and drywall repairs',
            },
            {
              id: 8,
              title: '8. Carpentry and woodworking',
            },
            {
              id: 9,
              title: '9.Landscaping and lawn care',
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
      title: 'Homeplex House repair & Maintainance',
      subtitle: 'make  an appointment with our experienced and certified team of professionals, who will quickly diagnose and repair any issues you may be experiencing with your home.',
      extra:"Site visit Charge ",
      price: 500,
      imageUrl: '../images/serviceimg/renovation.png',
    },
  ];


  return (
    <>
    <Helmet>
    <meta charset="utf-8" />
    <title>House repair & Maintainance</title>
    <meta  
      name="description"
      content=" 
      Homeplex offers top-notch home repair services in kathmandu valley with skilled engineers.
       Click now to get the best service for your home."
    />
    <meta 
      name="keywords"
      content="Homeplex Repair Services,House Maintenance Solutions,Residential Renovation Experts,Homeplex Handyman Services,Emergency Home Repairs,Fix and Flip Property Repairs,Efficient House Repairs"
    />
  </Helmet>
    <div className="app">
      <div className="row">
      <div className="column ">
        <FormCard />
        </div>
        <div className="column">
        <div className='pageheading'> Why Homeplex Repair  & Maintance Service ? </div>
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
        <div className="row">
      <div className="column ">
      <div className='pageheading2'> Homeplex Repair & Maintainance services </div>
        <div>
            {typeData.map(service => (
              <div key={service.id} className="service-item2">
                            <div>
                  <div className='serviceh3'>{service.title}</div>
            
                </div>
              </div>
            ))}
    </div>

        </div>
        <div className="column">
        <div className='pageheading2'> Homeplex Rate </div>
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
        {/* <div className='headingall'>
          Homeplex Design 
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

export default RepairMaintance;
