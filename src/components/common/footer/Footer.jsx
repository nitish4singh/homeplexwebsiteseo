import React from "react";
import styled from "styled-components";
import { FaLinkedin,FaInstagram, FaFacebook,FaPhone,FaYoutube  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdMail } from 'react-icons/io';
import { BiTimeFive } from 'react-icons/bi';
import "./footer.css"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="fcontainer gridf grid-four-column">
          <div className="footer-about">
            <div  className="footerh">Company Address</div >
            <div className="icon-text-row">
      <FaPhone className="footericon" />
      <span className="footertext">9808338255</span>
      
    </div>
    <div className="icon-text-row">
      <FaPhone className="footericon" />
      <span className="footertext">9818018051</span>
      
    </div>
    <div className="icon-text-row">
     
      <span className="footertext">Dhobigath-lalitpur ,senapa</span>
    </div>

    <div className="icon-text-row">
      <IoMdMail className="footericon" />
      <span className="footertext">support@homeplexnepal.com</span>
    </div>
 
    <div className="icon-text-row">
      <BiTimeFive className="footericon" />
      <span className="footertext">Working Time -7am -7Pm</span>
    </div>
    <div className="map-containesr">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.12241566796644!2d85.30427784460795!3d27.675769184947214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19879baa91c9%3A0x2ae094f823bbb11d!2sHomeplex!5e0!3m2!1sen!2snp!4v1692214406243!5m2!1sen!2snp" 
     width="350"
     height="300"
     style={{ border: "0" }}
     allowfullscreen=""
     loading="lazy"></iframe>
    </div>
          </div>
          {/* 2nd column */}
          <div className="footer-subscribe">
          <div  className="footerh">  Homeplex Service</div >
          <Link  to="/plumbing-services-in-kathmandu/"> <div className="footertext">  Plumbing  </div> </Link>
          <Link  to="/electrician-services-in-kathmandu/"> <div className="footertext">  Electrician  </div> </Link>
          <Link  to="/electrical-appliance-in-kathmandu/"> <div className="footertext">  Electrical Applience  </div> </Link>
          <Link  to="/motor-pumps-in-kathmandu"> <div className="footertext">  Motor Service  </div> </Link>
          <Link  to="/house-painting-in-kathmandu/"> <div className="footertext">  Panting  </div> </Link>
          <Link  to="/carpenter-services-in-kathmandu/"> <div className="footertext">  Carpenter </div> </Link>
          <Link  to="/interior-design-services/"> <div className="footertext">  2d /3d Design  </div> </Link>
          <Link  to="/ghar-naksa-in-kathmandu"> <div className="footertext">  Ghar Naska  </div> </Link>
          <Link  to="/construction-services/"> <div className="footertext">  Construction Service  </div> </Link>
          <Link  to="/house-repair-and-maintenance"> <div className="footertext">  Repair & Maintenance </div> </Link>
          </div>
       {/* 3rs column  */}
       <div className="footer-product">
               <div  className="footerh">Homeplex Subscription</div>
               <Link  to="/subscription"> <div className="footertext">  Residence  </div> </Link>
               <Link to="/subscription"> <div className="footertext"> Hotel & Restuants  </div> </Link>
               <Link  to="/subscription"> <div className="footertext">  Office & Institute  </div> </Link>
               <Link  to="/subscription"> <div className="footertext">  Residence Flat </div> </Link>
                     </div>
          {/* 3rs column  */}
          <div className="footer-social">
          <div  className="footerh">Follows Us</div>
            <div className="footer-social--icons">
              <div>
                <a
                href="https://www.linkedin.com/in/homeplex-nepal-83a262284/"
                target="_blank">
                <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <a 
                href="https://www.instagram.com/homeplex_nepal/"
            target="_blank">
                <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/homeplexnepal.np"
                  target="_blank">
                  <FaFacebook className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/@homeplex"
                  target="_blank">
                  <FaYoutube  className="icons" />
                </a>
              </div>
            </div>
          </div>
         
        </div>

        {/* bottom section  */}
        <div className="center-text">
            <p>
              @{new Date().getFullYear()} Homeplex. All Rights Reserved
            </p>
          </div>
     
      </footer>
    </>
  );
};
export default Footer;