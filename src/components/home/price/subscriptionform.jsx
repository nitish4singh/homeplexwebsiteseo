import React from 'react';
import './price.css';
import {db} from '../../../FirebaseConfig';
import {useState} from 'react';
import {addDoc,collection} from 'firebase/firestore'
import AlertBox from './AlertBox';

const SubscriptionFormCard = () => {
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
    const userCollectionRef = collection(db,"subscription")

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
          status:"notseen"
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
    <div className="allform">
      <div className='contactheading'>Please fill the form  <br></br> we will contact you soon for next process. </div >
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
      <textarea placeholder="message" 
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
export default SubscriptionFormCard;
