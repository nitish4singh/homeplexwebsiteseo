import React from "react"
import { clientWork } from "../../data/Data"

const ClientWorkCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {clientWork.map((val, index) => {
          const { cover, location, name, } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                             <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>


             
            </div>
          )
        })}
      </div>
    </>
  )
}
export default ClientWorkCard
