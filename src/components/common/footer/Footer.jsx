import React from "react";
import styled from "styled-components";
import { FaLinkedin,FaInstagram, FaFacebook,FaPhone,FaYoutube  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdMail } from 'react-icons/io';
import { BiTimeFive } from 'react-icons/bi';
import "./footer.css"
const Footer = () => {
  return (
    <Wrapper>
     

      {/* footer section  */}

      <footer>
        <div className="container gridf grid-four-column">
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
          <Link  target="_blank" to="/plumber-service-homeplex-solution"> <div className="footertext">  Plumbing  </div> </Link>
          <Link target="_blank"  to="/electric-service/"> <div className="footertext">  Electrician  </div> </Link>
          <Link target="_blank"  to="/home-appliance-servic"> <div className="footertext">  Electrical Applience  </div> </Link>
          <Link  target="_blank" to="/motorService"> <div className="footertext">  Motor Service  </div> </Link>
          <Link target="_blank"  to="/painting-service/"> <div className="footertext">  Panting  </div> </Link>
          <Link target="_blank"  to="/carpenter-service-in-kathmandu/"> <div className="footertext">  Carpenter </div> </Link>
          <Link target="_blank"  to="/interior-design-by-homeplex/"> <div className="footertext">  2d /3d Design  </div> </Link>
          <Link target="_blank"  to="/gharNaksa"> <div className="footertext">  Ghar Naska  </div> </Link>
          <Link target="_blank"  to="/construction-service/"> <div className="footertext">  Construction Service  </div> </Link>
          </div>
       {/* 3rs column  */}
       <div className="footer-product">
               <div  className="footerh">Homeplex Subscription</div>
               <Link target="_blank"  to="/subscription"> <div className="footertext">  Residence  </div> </Link>
               <Link target="_blank" to="/subscription"> <div className="footertext"> Hotel & Restuants  </div> </Link>
               <Link  target="_blank" to="/subscription"> <div className="footertext">  Office & Institute  </div> </Link>
               <Link target="_blank"  to="/subscription"> <div className="footertext">  Residence Flat </div> </Link>
                     </div>
          {/* 3rs column  */}
          <div className="footer-social">
          <div  className="footerh">Follows Us</div>
            <div className="footer-social--icons">
              <div>
                <FaLinkedin className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: "#0a1435";
    border-radius: 1rem;
    box-shadow: "#0a1435";
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 3rem 0 3rem 0;
    background-color: #008383;

    h3 {
      color:"#FFFFFF";
      margin-bottom: 1rem;
    }
    p {
      color: "#0a1435";
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid "#0a1435";

        .icons {
          color: "#0a1435";
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

 .footer-bottom--section {
  padding-top: 2rem;
  margin-left: auto;
  margin-right: auto;

  hr {
    margin-bottom: 2rem;
    color: white;
    height: 0.2px;
  }

  span {
    color: white;
    font-size: 24px; /* Adjust the font size as needed */
  }
}
  }

  @media (max-width:{ mobile: "768px", tab: "998px" }) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;


export default Footer;