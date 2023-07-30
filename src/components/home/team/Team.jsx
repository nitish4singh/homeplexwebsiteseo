import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Homeplex Founder'  />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  
                  </div>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
