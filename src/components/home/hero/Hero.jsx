import React from "react"
import "./hero.css"
import "../../pages/features/allpage.css"
const Hero = () => {
  return (
    <>
      <section className='app'>
      <div className="bannerhero">
      <div className="column left">
        <div className="heroheadingm ">
    HomePlex Plumbing Service 

</div>
          <div className="heroheadingt">
              Transform the way you work <br />
              with a unique and powerful <br />
              IT Solution to run your Entire <br />
              Business.
            </div>
            {/* plumber.png
           */}
      </div>
      <div className="column right">
        <div className="heroimg">
        <div style={{ width: "80%"}}>
        <img src="../images/list/plumber.png" />
              </div>
        </div>
    
      </div>
    </div>
      </section>
    </>
  )
}

export default Hero
