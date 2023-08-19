import React from "react"
import Awards from "./workingProcess/Wokingprocess"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import AboutHomeplex from "./aboutHomeplex/aboutHomeplex"
import ClientWork from "./clientWork/clientwork"
import Faq from "../faq/Faq"
import PopularServiceCard from "../popularService/PopularServicecard"


const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <AboutHomeplex/>
      <Price />
     <PopularServiceCard/>
      <ClientWork/>
        <Awards />
      <Team />
    </>
  )
}

export default Home
