import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Routes , Route  } from "react-router-dom"
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
import Consultency from "./civilConsulteancy/consultency"
import Carpenter from "./carpenter/carpenter"
import Applience from "./Applience/applience"
import RepairMaintance from "./repair&maintainance/repairmaintance"
import Write from "../blog/blogadmin/writeblog"
import Login from "../blog/blogadmin/adminlogin"
import Single from "../blog/blogsinglepage"
import NotFound from "./NotFound"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <React.StrictMode>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/services' element={<Services/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path='/subscription' element={<Pricing/>} />
          <Route exact path='/faq' element={<Contact/>} />
          <Route exact path='/motor-pumps-in-kathmandu' element={<MotorService/>} />
          <Route exact path='/interior-design-services/' element={<InteriorDesign/>} />
          <Route exact path='/ghar-naksa-in-kathmandu/' element={<GharNaska/>} />
          <Route exact path='/house-painting-in-kathmandu/' element={<Painting/>} />
          <Route exact path='/electrician-services-in-kathmandu/' element={<Electrician/>} />
          <Route exact path='/house-repair-and-maintenance/' element={<RepairMaintance/>} />
           <Route exact path='/construction-services/' element={<Consultency/>} />
           <Route exact path='/carpenter-services-in-kathmandu/' element={<Carpenter/>} />
           <Route exact path='/electrical-appliance-in-kathmandu/' element={<Applience/>} />
           <Route exact path='/plumbing-services-in-kathmandu/' element={<Plumber/>} />
           <Route exact path='/writeblog/' element={<Write/>} />
           <Route exact path='/blogadminlogin/' element={<Login/>} />
           <Route exact path='/post/:id' element={<Single/>} />
           <Route path="*" element={<NotFound />} />
        </Routes>
        </React.StrictMode>
        <Footer />
      </Router>
    </>
  )
}
export default Pages
