import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Homeplex Popular Work' subtitle='Homeplex is a leading construction company that provides top-quality construction services. With years of experience in the industry.Trust Homeplex for all your construction needs.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}


export default Recent
