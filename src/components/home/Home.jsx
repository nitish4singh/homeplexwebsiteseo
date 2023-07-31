import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import AboutHomeplex from "./aboutHomeplex/aboutHomeplex"
import ClientWork from "./recent/clientWork"


const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <AboutHomeplex/>
   <ClientWork/>
      <Recent />
      {/* <Awards /> */}
      {/* <Location /> */}

      <Team />
      <Price />
    </>
  )
}

export default Home
