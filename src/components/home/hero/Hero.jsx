import React, { useState, useEffect } from "react";
import "./hero.css";
import { Typewriter } from "react-simple-typewriter";
import Parrot from "./h.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <>
    <div className="bannerhero">
      <div className="column left">
        <div className="heroheadingmf">
        <Typewriter
                words={["WELCOME TO HOMEPLEX."]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={70}
                delaySpeed={1000}
              />
</div>
          <div className="heroheadingtf">
             Change the way  <br />
              of Calling the  Handyman <br />
            Services<br />
            </div>
        {/* <div className="herobuttonf">
              <div className="herobuttonf">
              <li>
              <a href="/service"> Get Started <i className="fa fa-long-arrow-alt-right"></i></a>
                </li>
              </div>
              
            </div> */}
          
      </div>
      <div className="column right">
        <div className="heroimgf">
        <div style={{ width: "90%"}}>
                <Lottie loop={true} animationData={Parrot} />
              </div>
        </div>
    
      </div>
    </div>
    </>
  );
};

export default Hero;

















