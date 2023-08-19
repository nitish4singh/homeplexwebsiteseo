import {useState} from 'react';
import "./allpage.css"
import React from 'react';
import '../../home/price/price.css';
import {db} from '../../../FirebaseConfig';
import {addDoc,collection} from 'firebase/firestore'
import AlertBox from '../../home/price/AlertBox';
const FormCard = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const handleCloseAlert = () => {
      setAlertMessage('');
      document.location = '/';
    };
  const [name,setName] = useState();
  const [phone,setPhone] = useState();
  const [address,setAddress] = useState();
  const [packagename,setPackage] = useState();
  const [message,setmessage] = useState();
  const userCollectionRef = collection(db,"HandymanProblem")
  const handleSubmit = () => {
      if (!name || !phone || !address || !message) {
          setAlertMessage('Please fill all fields.');
          return;
        }
      addDoc(userCollectionRef, {
        name: name,
        phone: phone,
        address: address,
        packageName: "",
        message:message,
      })
        .then(() => {
          setAlertMessage('Thank You for Submiting the form Homeplex  will contact you as soon as possible !!');
        })
        .catch((error) => {
          console.log(error);
          setAlertMessage(error.message);
        });
    };

  return (
    <div className="contactcard allform">
      <div className='contactheading'>See Our Rate <br></br> Book the Services </div >
      <form>
      <input type="text" placeholder="Name" 
      onChange={(event)=>{
        setName(event.target.value)
      } }
      />
      <input type="tel" placeholder="Phone"  
         onChange={(event)=>{
        setPhone(event.target.value)
      } } />
      <input type="text" placeholder="Address"
           onChange={(event)=>{
            setAddress(event.target.value)
          } } />
      <textarea placeholder="Problem" 
           onChange={(event)=>{
            setmessage(event.target.value)
          } }
      ></textarea>
   <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      {alertMessage && (
        <AlertBox message={alertMessage} onClose={handleCloseAlert} />
      )}
    </form>
    </div>
  );
};
export default FormCard;
