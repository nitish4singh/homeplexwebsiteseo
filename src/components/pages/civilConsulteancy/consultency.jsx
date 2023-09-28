import React from 'react';
import FormCard from '../features/FormCard';
import PriceCard from '../features/PriceCard';
import "../features/allpage.css"
import { Helmet } from "react-helmet";
const Consultency = () => {
    const images = [
      {
        id: 1,
        imageUrl: '../images/list/shouse.jpeg',
        title: 'Completed Construction',
      },
      {
        id: 2,
        imageUrl: '../images/list/inhouse.png',
        title: 'Construction project',
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
  const typeData = [
    {
      id: 1,
      title: '1. Building and installing cabinets',

    },
    {
      id: 2,
      title: '2. Installing doors, windows, and frames ',
    },
    {
      id: 3,
      title: '3. Constructing and repairing wooden furniture',
    },
    {
      id: 4,
      title: '4. Installing hardwood floors, baseboards, and crown molding',
    },
    {
      id: 5,
      title: '5. Building and installing wooden stairs and handrails',

    },
    {
      id: 6,
      title: '6. Repairing and replacing damaged woodwork',
    },
    {
      id: 7,
      title: '7. Constructing and installing custom shelving and bookcases',
    },
    {
      id: 8,
      title: '8. Building and repairing wooden fences and decks',
    },
    {
      id: 9,
      title: '9.Building and installing wooden pergolas, trellises, and other outdoor structures',
    },
    {
      id: 10,
      title: '10.Repairing and installing wooden roofs, including shingle or metal roofing.',
    },
  ];
  const aboutList = [
    {
      title: 'Homeplex Construction Service provides reliable, high-quality construction services near you. Trust us for all your construction needs.',
      subtitle: ' Homeplex - the leading online construction service provider in kathmandu  that offers high-quality construction solutions to customers across the country.Homeplex  allows you to easily schedule an appointment with our experienced and skilled construction team, and well work with you every step of the way  to ensure your project is completed on time and on budget. At Homeplex, we offer a wide range of construction services, including remodeling,renovations, new construction, and more. We re committed to providing exceptional customer service and satisfaction, using only the best materials and equipment to ensure that your project meets the highest standards of quality. Choose Homeplex for all your construction needs and experience the convenience and peace of mind that comes with our online services.',
      extra:"Site visit Charge ",
      price: 0,
      imageUrl: '../images/serviceimg/c1.png',
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
    <>
    <Helmet>
    <meta charset="utf-8" />
    <title>Expert Construction Services: From Design to Completion</title>
    <meta  
      name="description"
      content="Discover our top-notch construction services, covering everything from initial design to flawless project completion."
    />
    <meta 
      name="keywords"
      content="construction services, Reliable Construction Services,Construction Company Kathmandu,Residential Construction Experts,Commercial Building Solutions,Custom Home Construction"
    />
  </Helmet>
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
        <div className="row">
      <div className="column ">
      <div className='pageheading2'> Construction services offered by Homeplex</div>
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
        <div className='pageheading2'> About Homeplex </div>
        <div className="price-list">
          {aboutList.map((item, index) => (
            <PriceCard
              key={index}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
        </div>
   
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
              </>
  );
};

export default Consultency;
