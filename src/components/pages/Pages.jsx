import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Plumber from "./plumber/Plumber"

import MotorService from "./motor/Motor"
import Painting from "./Painting/Painting"
import InteriorDesign from "./InteriorDesign/InteriorDesisgn"
import GharNaska from "./GharNaska/GharNaska"
import Electrician from "./Electrician/Electrician"
import Design from "./design/Design"
import Consultency from "./civilConsulteancy/consultency"
import Carpenter from "./carpenter/carpenter"
import Applience from "./Applience/applience"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/subscription' element={<Pricing/>} />
          <Route exact path='/faq' element={<Contact/>} />
          <Route exact path='/motorService' element={<MotorService/>} />
          <Route exact path='/interiorDesign' element={<InteriorDesign/>} />
          <Route exact path='/gharNaska' element={<GharNaska/>} />
          <Route exact path='/painting' element={<Painting/>} />
          <Route exact path='/electrician' element={<Electrician/>} />
          <Route exact path='/design' element={<Design/>} />
           <Route exact path='/consultency' element={<Consultency/>} />
           <Route exact path='/carpenter' element={<Carpenter/>} />
           <Route exact path='/applience' element={<Applience/>} />
           <Route exact path='/plumber' element={<Plumber/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default Pages
