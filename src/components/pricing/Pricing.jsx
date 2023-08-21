import React from "react"
import Back from "../common/Back"
import img from "../images/pricing.jpg"
import "../home/price/price.css"
import Price from "../home/price/Price"



const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <Price />
     
        </div>
      </section>
    </>
  )
}

export default Pricing;
