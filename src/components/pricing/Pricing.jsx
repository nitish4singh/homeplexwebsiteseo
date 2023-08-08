import React from "react"
import Back from "../common/Back"
import ResidentialCard from "../home/price/ResidentialCard"
import img from "../images/pricing.jpg"
import "../home/price/price.css"



const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <ResidentialCard />
        </div>
      </section>
    </>
  )
}

export default Pricing;
