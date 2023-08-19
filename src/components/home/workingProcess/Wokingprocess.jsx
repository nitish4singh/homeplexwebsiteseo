import React from "react"
import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import "./workingprocess.css"

const Awards = () => {
  return (
    <>
    
      <section
        className="services-section-two"
       
      >
        <div className="wmainheading">Homeplex Working Process</div>
        <div className="workrow">
          <div className="workcolumn">
            <div className="workcontent">
              <img
                src="../images/appointment.png"
                alt="Image 1"
                className="workimage"
              />
              <h2 className="workheading">Make a Appointment </h2>
              <h4 className="workheading2">
 To make the Apportmment fill the form with problem or either Call us.
              </h4>
            </div>
          </div>
          <div className="connector">
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 12h8" />
              <path d="M6 10l2 2-2 2" />
            </svg>
          </div>
          <div className="workcolumn">
            <div className="workcontent">
              <img
                src="../images/confirm.png"
                alt="Image 2"
                className="workimage"
              />
              <h2 className="workheading">Confirm</h2>
              <h4 className="workheading2">
              
The Homeplex team will call and verify your order within a few minutes to half an hour.
              </h4>
            </div>
          </div>
          <div className="connector">
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 12h8" />
              <path d="M6 10l2 2-2 2" />
            </svg>
          </div>
          <div className="workcolumn">
            <div className="workcontent">
              <img
                src="../images/ontime.png"
                alt="Image 3"
                className="workimage"
              />
              <h2 className="workheading">Arrive Within 2 hrs</h2>
              <h4 className="workheading2">
              After verifying your order, we will aim to arrive at your doorstep within 2 hours. We will then provide an estimate for the billing based on the work needed.
              </h4>
            </div>
          </div>
          <div className="connector">
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 12h8" />
              <path d="M6 10l2 2-2 2" />
            </svg>
          </div>
          <div className="workcolumn">
            <div className="workcontent">
              <img
                src="../images/solved.png"
                alt="Image 3"
                className="workimage"
              />
              <h2 className="workheading">Your Problem Solved</h2>
              <h4 className="workheading2">
              Homeplex experts solve your problems carefully without causing any damage or displaying unusual behaviors.
              </h4>
            </div>
          </div>
          <div className="connector">
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 12h8" />
              <path d="M6 10l2 2-2 2" />
            </svg>
          </div>
          <div className="workcolumn">
            <div className="workcontent">
              <img
                src="../images/billing.png"
                alt="Image 3"
                className="workimage"
              />
              <h2 className="workheading">Billing </h2>
              <h4 className="workheading2">
              We will charge according to our rates with a discount applied. If you encounter a situation where the homeplex experts are charging higher rates, please contact Homeplex for assistance.
              </h4>
            </div>
          </div>
        </div>
   
      </section>
    </>
  );
};

export default Awards
