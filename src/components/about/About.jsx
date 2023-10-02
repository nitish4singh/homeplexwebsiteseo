import React from "react"
import Back from "../common/Back"
import img from "../images/banner2.png"
import "./about.css";
import Parrot from "./handyman.json";
import Lottie from "lottie-react";
import AboutHomeplex from "../home/aboutHomeplex/aboutHomeplex";
import Awards from "../home/workingProcess/Wokingprocess";
import { Helmet } from "react-helmet";

const About = () => {
  const typeData = [
    {
      id: 1,
      title: 'Easy to make an appointment with us.',
    },
    {
      id: 2,
      title: '  Hi-Tech Solution',
    },
    {
      id: 3,
      title: 'Free Consultation',
    },
    {
      id: 4,
      title: ' On Budget /Affordable pricing',
    },
    {
      id: 5,
      title: ' No wastage materials', 
    },
    {
      id: 6,
      title: 'Fast and reliable service',
    },
    {
      id: 7,
      title: 'Transparent and upfront pricing',
    },
    {
      id: 8,
      title: ' Quality workmanship',
    },
    {
      id: 9,
      title: ' 24/7 availability with Cutting-edge technology and equipment',
    },
    {
      id: 10,
      title: '. No, any Hidden Charge',
    },
    {
      id: 11,
      title: 'Special Offer up to 25 % on service fee for Maintenace Works',
    },
    {
      id: 12,
      title: ' 5 years of free service on plumbing works in New Buildings/Housework',
    },
  ];
  return (
    <>
    <Helmet>
    <meta charset="utf-8" />
    <title> About Custom Home Builders - Homeplex </title>
    <meta  
      name="description"
      content="Discover Homeplex: Expert custom home builders dedicated to making your dream home a reality. Learn all about custom home builders here!"
    /> 
    <meta 
      name="keywords"
      content="custom home builders, House Repair Service, Home interior design Kathmandu, Commercial interior design Kathmandu
      "
    />
  </Helmet>
      <section className='about'>
        <Back name='' title=' ' cover={img} />

                <div className="row">
      <div className="column ">
      <div className='aboutheading2'> Know About Homeplex </div>
<p>
         Homeplex is a comprehensive solution for all your home-related needs in Kathmandu. With a range
         of services including house repair and maintenance, construction, house inspection,
        finding  more, Homeplex has got you covered.
         Homeplex’s use of cutting-edge technology and a highly organized team of engineers 
         and professionals sets it apart. The company is committed to using the latest tools 
         and techniques to ensure that every job is done efficiently and to the highest standards.
         Whether you need a small repair or a major construction project, Homeplex has the 
         expertise and resources to handle it all. The team comprises skilled professionals 
         with years of experience in their respective fields, ensuring that every job 
         is done with precision and attention to detail.
         Moreover, Homeplex is dedicated to providing its customers excellent service
         and support. From the moment you contact them to completing the job, 
        the team is always available to answer your questions and address any concerns.
</p>
        </div>
        <div className="column">
        <div className="aboutimg">
        <div style={{ width: "90%"}}>
        <img src="../images/homeplexman1.png" />
              </div>
        </div>
        </div>
        </div>
        <div className="row">
      <div className="column ">
      <div className="aboutimg">
        <div style={{ width: "90%"}}>
                <Lottie loop={true} animationData={Parrot} />
              </div>
        </div>
        </div>
        <div className="column">
        <div className='aboutheading'> Why to Choose Homeplex? </div>
        <div>
            {typeData.map(service => (
              <div key={service.id} className="about-item">
                <div className="icon1">
                <span class=" fa fa-star "> </span>
                </div>
                 <div>
                 <div className='abouth2'>{service.title}</div>
                </div>
              </div>
            ))}
    </div>
        </div>
        </div>
       <AboutHomeplex/>
<Awards/>
        <div className='locationheading'>  Homeplex Location </div>
        <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.12241566796644!2d85.30427784460795!3d27.675769184947214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19879baa91c9%3A0x2ae094f823bbb11d!2sHomeplex!5e0!3m2!1sen!2snp!4v1692214406243!5m2!1sen!2snp" 
     width="600"
     height="450"
     style={{ border: "0" }}
     allowfullscreen=""
     loading="lazy"></iframe>
    </div>
      </section>
    </>
  )
}

export default About
