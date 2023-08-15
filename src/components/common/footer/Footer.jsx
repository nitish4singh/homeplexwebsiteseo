import React from "react";
import styled from "styled-components";
import { FaLinkedin,FaInstagram, FaFacebook,FaPhone } from "react-icons/fa";

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
            <h3>Company Address</h3>
            <div className="icon-text-row">
      <FaPhone className="footericon" />
      <span className="footertext">9808338255</span>
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
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Sisnovate Service</h3>
            <div className="footertext">Plumbing</div>
            <div className="footertext">Electrician</div>
            <div className="footertext">Electrical Applience</div>
            <div className="footertext"> Painting</div>
            <div className="footertext">Carpenter</div>
            <div className="footertext">Interior Design</div>
            <div className="footertext">2d /3d Design</div>
            <div className="footertext"> Ghar Naska</div>
            <div className="footertext">Civil Consultancy</div>
          </div>
       {/* 3rs column  */}
       <div className="footer-product">
        
            <h3>Homeplex Subscription</h3>
            <div className="footertext"> Resicident </div>
            <div className="footertext">Hotel & Restudent</div>
            <div className="footertext">Office & Institute</div>
            <div className="footertext"> Resicident Flat</div>
           
          </div>
          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaLinkedin className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100090306072100"
                  target="_blank">
                  <FaFacebook className="icons" />
                </a>
              </div>
            </div>
          </div>
         
        </div>

        {/* bottom section  */}
        <div className="center-text">
            <p>
              @{new Date().getFullYear()} Sisnovate. All Rights Reserved
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
      color:"#0a1435";
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