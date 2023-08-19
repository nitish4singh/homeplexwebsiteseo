import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import ResidentialCard from "./ResidentialCard"
import InstitutesOffice from "./InstituesOfficeplan"
import HotelRestudent from "./Hotel"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <div className="mainheading">Homeplex Residential  Subscription Plan</div>
          <ResidentialCard />
          <div className="mainheading">Institutes / Office Subscription Plan</div>
          <InstitutesOffice />
                    <div className="mainheading">Hotel / Resturants  Subscription Plan</div>
          <HotelRestudent />
        </div>
      </section>
    </>
  )
}

export default Price
