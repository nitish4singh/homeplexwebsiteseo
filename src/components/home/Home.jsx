import React from "react"
import Awards from "./workingProcess/Wokingprocess"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import AboutHomeplex from "./aboutHomeplex/aboutHomeplex"
import ClientWork from "./clientWork/clientwork"
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
      <div className="vedioheading"> Homeplex video</div>
      <div class="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/a5GGFRFdyNY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/UpUWQp-OuNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/xgcIVYOuvKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
    </>
  )
}
export default Home;
