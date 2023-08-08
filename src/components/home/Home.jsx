import React from "react"
import Awards from "./workingProcess/Wokingprocess"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import AboutHomeplex from "./aboutHomeplex/aboutHomeplex"
import ClientWork from "./clientWork/clientwork"


const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <AboutHomeplex/>
      <Price />
      <Recent />
      <Awards />
     
      <ClientWork/>
      <Team />
    </>
  )
}

export default Home
