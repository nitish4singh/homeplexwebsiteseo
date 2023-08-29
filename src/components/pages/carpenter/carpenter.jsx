import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css"
import { Helmet } from "react-helmet";
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
  
          const typeData = [
            {
              id: 1,
              title: '1. Soil Testing',

            },
            {
              id: 2,
              title: '2. Material testing',
            },
            {
              id: 3,
              title: '3. Custom home building',
            },
            {
              id: 4,
              title: '4. Commercial construction',
            },
            {
              id: 5,
              title: '5. Residential remodeling',

            },
            {
              id: 6,
              title: '6.Kitchen and bathroom renovations',
            },
            {
              id: 7,
              title: '7. Roofing and siding installation',
            },
            {
              id: 8,
              title: '8. Concrete and masonry work',
            },
            {
              id: 9,
              title: '9.Electrical and plumbing services',
            },
            {
              id: 10,
              title: '10.Painting and finishing work.',
            },
            {
              id: 11,
              title: '11.Green building and sustainability solutions.',
            },
            {
              id: 12,
              title: '12.Project management and consulting..',
            },
            {
              id: 13,
              title: '13.Interior Design',
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
      title: 'modular kitchen daraz/drawer fitting',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 550,
      imageUrl: '../images/serviceimg/c1.png',
    },
    {
      title: 'modular kitchen daraz/drawer fitting',
      subtitle: 'With material Charge',
      extra:"Sq Feet",
      price: "2200-3200",
      imageUrl: '../images/serviceimg/c1.png',
    },
    {
      title: 'Modern bed ',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 650,
      imageUrl: '../images/serviceimg/c2.png',
    },
    {
      title: 'Door fitting simple with lock without listi',
      subtitle: 'Only Labour Charge',
      extra:"Nos",
      price: 1200,
      imageUrl: '../images/serviceimg/c3.png',
    },
    {
      title: 'Door fitting simple with lock with  listi',
      subtitle: 'Only Labour Charge',
      extra:"Nos",
      price: 1500,
      imageUrl: '../images/serviceimg/c4.png',
    },
    {
      title: 'Door fitting simple with door hinges',
      subtitle: 'Only Labour Charge',
      extra:"Nos",
      price: 1000,
      imageUrl: '../images/serviceimg/c5.png',
    },
    {
      title: 'computer table ',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 550,
      imageUrl: '../images/serviceimg/c6.png',
    },
    {
      title: ' jhal chaukosh ',
      subtitle: 'Only Labour Charge',
      extra:"Kb",
      price: 550,
      imageUrl: '../images/serviceimg/c7.png',
    },
    {
      title: 'Door sadha khapa',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 150,
      imageUrl: '../images/serviceimg/c8.png',
    },
    {
      title: 'Door check khapa  ',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 300,
      imageUrl: '../images/serviceimg/c9.png',
    },
    {
      title: 'simple chair',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 1500,
      imageUrl: '../images/serviceimg/c10.png',
    },
    {
      title: 'Simple Table',
      subtitle: 'Lenght 3ft width ft heigth 2.6ft with four legs',
      extra:"Nos",
      price: 2000,
      imageUrl: '../images/serviceimg/c11.png',
    },
    {
      title: 'wood parketing ',
      subtitle: 'Only Labour Charge',
      extra:"Sq Feet",
      price: 50,
      imageUrl: '../images/serviceimg/c12.png',
    },
    {
      title: 'stair case railing siso wood',
      subtitle: 'Lenght 3ft width ft heigth 2.6ft with four legs , labour charge only ',
      extra:"Running feet",
      price: 750,
      imageUrl: '../images/serviceimg/c13.png',
    },
    {
      title: 'stair case railing sallo wood ',
      subtitle: 'Only Labour Charge',
      extra:"Running feet",
      price: 550,
      imageUrl: '../images/serviceimg/c13.png',
    },

  ];


  const aboutList = [
    {
      title: 'Trust us to transform your space with our expert carpentry services',
      subtitle: 'We understand that every carpentry project is unique and requires a personalized approach. That why we take the time to understand your specific needs and work with you to deliver custom solutions that meet your expectations. Our carpenters are experts in designing, building, and installing everything from custom cabinets, shelves, and wardrobes to doors, windows, and furniture.',
      extra:"Site visit Charge ",
      price: 0,
      imageUrl: '../images/list/chouse.jpg',
    },
  ];


  return (
    <>
    <Helmet>
    <meta charset="utf-8" />
    <title>Carpenter Service</title>
    <meta  
      name="description"
      content="Trust us to transform your space with our expert carpentry services.
      Contact us today to schedule your carpentry project and experience the Homeplex difference!"
    />
    <meta 
      name="keywords"
      content="Building and installing cabinets,Installing doors, windows, and frames,Installing hardwood floors, baseboards, and crown molding,Building and repairing wooden fences and decks,Constructing and repairing wooden furniture "
    />
  </Helmet>
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

        <div className="row">
      <div className="column ">
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
        <div className='pageheading2'> About Homeplex Service </div>
        <div className="price-list">
          {aboutList.map((item, index) => (
            <PriceCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
        </div>
   
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

export default Carpenter;
