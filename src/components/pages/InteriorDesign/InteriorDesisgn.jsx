import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css"


const InteriorDesign = () => {
    const images = [
      {
        id: 1,
        imageUrl: '../images/serviceimg/int1.png',
        title: 'Office Room Design By Er.Tulsi for Client ',
      },
      {
        id: 2,
        imageUrl: '../images/serviceimg/int2.png',
        title: 'Design By Er.Tulsi for Client ',
      },
      {
        id: 3,
        imageUrl: '../images/serviceimg/int3.png',
        title: 'living Room Design By Tulsi ',
      },
      {
        id: 4,
        imageUrl: '../images/serviceimg/int4.png',
        title: 'Tv Room Design By Tulsi',
      },
      {
        id: 5,
        imageUrl: '../images/serviceimg/int5.png',
        title: 'Tvs Showrooms Design By Er.Tulsi',
      },
      {
        id: 6,
        imageUrl: '../images/serviceimg/int6.png',
        title: 'Tvs Showrooms Design By Er.Tulsi',
      },
          ];
          const typeData = [
            {
              id: 1,
              title: '1. Space planning and layout',

            },
            {
              id: 2,
              title: '2. Furniture selection and arrangement',
            },
            {
              id: 3,
              title: '3. Colour consultation and selection',
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
              title: '6. Window treatment selection and installation',
            },
            {
              id: 7,
              title: '7. Custom millwork and cabinetry design',
            },
            {
              id: 8,
              title: '8. Artwork and accessory selection and placement',
            },
            {
              id: 9,
              title: '9. Textile selection (such as curtains, upholstery, and bedding)',
            },
            {
              id: 10,
              title: '10. 3D renderings and visualizations',
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
      title: 'Homeplex Interior design inside  valley',
      subtitle: 'We specialize in high-quality interior design services that turn your living spaces into attractive, useful surroundings that represent your own style and personality.',
      extra:"Site visit Charge ",
      price: 3000,
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
        <div className='pageheading'> Why Homeplex InteriorDesign? </div>
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
      <div className='pageheading2'> Homeplex Interior Design services </div>
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
        <div className='headingall'>
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
    </div>
              </div>
              
  );
};

export default InteriorDesign;
