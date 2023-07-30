import React from 'react';
import "./allpage.css"
const FormCard = () => {
  return (
    <div className="contactcard allform">
      <div className='contactheading'>See Our Rate <br></br> Book the Services </div >
      <form>
      <input type="text" placeholder="Name" />
      <input type="tel" placeholder="Phone" />
      <input placeholder="Problem"></input>
      <input type="text" placeholder="Address" />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default FormCard;
