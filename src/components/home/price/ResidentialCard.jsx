import React, { useState } from 'react';
import { price } from "../../data/Data"
import Modal from './formmodel';
import './price.css';

const ResidentialCard = () => {
  return (
    <>
      <div className='content flex mtop'>
        {price.map((item, index) => (
          <div className='box shadow' key={index}>
            <div className='topbtn'>
              <button className='btn3'>{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
                           Rs. {item.price}
            </h1>

            <ul>
              {item.list.map((val) => {
                const { icon, text, change } = val
                return (
                  <li>
                    <label
                      style={{
                        background: change === "color" ? "#dc35451f" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
            <button
              className='button1'
            >
             Book Now
            </button>
          </div>
        ))}
      </div>

      
    </>
  )
}

export default ResidentialCard
