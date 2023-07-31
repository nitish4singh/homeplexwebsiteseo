import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import ClientWorkCard from "./clientWorkCard"

const ClientWork = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Homeplex Work' subtitle='See Our Rates & Book Services' />
          <ClientWorkCard />
        </div>
      </section>
    </>
  )
}

export default ClientWork;
