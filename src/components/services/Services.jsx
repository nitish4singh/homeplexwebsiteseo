import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import Featured from "../home/featured/Featured"
import Imagecard from "../home/aboutHomeplex/imagecard"

const Services = () => {

  const servicesData = [
    {
      id: 1,
      title: 'On Budgets / No More rates',
      subtitle: 'We offer budget-friendly options without compromising quality. ',
      imageSrc: "../images/bill.png",
    },
    {
      id: 2,
      title: 'Fast Reliable Service',
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
      title: 'Skill & Trained  Handyman',
      subtitle: 'Highly trained & Dicipline professionals',
      imageSrc: '../images/24hrs.png',
    },
  ];
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className="row">
<div className="column ">
  <Imagecard />
  </div>
  <div className="column">
  <div className='pageheading'> Why Homeplex Service? </div>
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
        <div className='featured container'>

          <Featured />
        </div>
      </section>
    </>
  )
}

export default Services
