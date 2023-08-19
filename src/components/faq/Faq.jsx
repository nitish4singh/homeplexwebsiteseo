import React, { useState } from "react";
import { faq } from "../data/Data";
import './faq.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <section className='faq'>
      <div className='containerf'>
        <div className="headingfaq">
        Frequently Asked Question
        </div>
        {faq.map((val, index) => (
          <div className={`boxf ${openIndex === index ? 'open' : ''}`} key={index}>
            <button className='' onClick={() => toggle(index)}>
              <h2>{val.title}</h2>
              <span><i className={`fa fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i></span>
            </button>
            {openIndex === index ? (
              <div className='text'>
                <p>{val.desc}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
