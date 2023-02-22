import React from 'react';
import './DoctorAppointForm.css';
import { initializeApp } from "firebase/app";
import{
  collection,
  getDocs,
  getFirestore,
  addDoc
} from 'firebase/firestore';

const DoctorAppointForm = () => {

  const firebaseConfig = {
    apiKey: "AIzaSyARwjUYAAXE1MBv3fvh_3ctvnEJm2UlQtY",
    authDomain: "college-project-3b233.firebaseapp.com",
    projectId: "college-project-3b233",
    storageBucket: "college-project-3b233.appspot.com",
    messagingSenderId: "829751483567",
    appId: "1:829751483567:web:ea9dff518b9dbaa5a2c85a",
    measurementId: "G-BG4JWY4B90"
  };
  
  // initializing app
  initializeApp(firebaseConfig);
  
  // getting the databse
  const db= getFirestore();
  
  //collection reference
  const docRef= collection(db, "doctor's appointment")
  
  // getting collection data
  
   getDocs(docRef)
     .then((snapshot)=>{
      let appointments= []
      snapshot.docs.forEach((doc)=>{
        appointments.push({ ...doc.data(), id:doc.id })
      })
      console.log(appointments)
     })
     .catch(err=>{
      console.log(err.message)
     })
 
  // const submitted= ()=>{
  //   // this code should run on the submit button and the details should be send to the admin panel and the user should be redirected to main page
    
  //  alert("your appointment was succesfull" );
  // }

  const Submitted=(e)=>{
  const appointdoc= document.querySelector('.Appointdoc');
    
 
  e.preventDefault()
  
  addDoc(docRef, {
    Time:appointdoc.time.value , 
    ContactNumber: appointdoc.contactNum.value ,
    PatientName: appointdoc.patientName.value ,
    DoctorType: appointdoc.doctors.value,
  })
  .then(()=>{
    appointdoc.reset()
  })
}

  
  return (
    <>
      <div className="acontainer">
       <div className="aacontainer">
        <h1>BOOK A DOCTOR</h1>
        <p>We have staff working 24/7 so you can get an appointment anytime😀</p>
        <form onSubmit={Submitted} className='Appointdoc'>
          <div className="row">
            <div className="column">
              <label htmlFor="name">Patient Name</label>
              <input type="text" name='patientName' id='name' required placeholder='Pateint Name Here'/>
            </div>
            <div className="column">
              <label htmlFor="doctors">Select Doctor</label>
              <select name='doctors' id='doctors' required>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologists">Dermatologists</option>
                <option value="Endocrinologists">Endocrinologists</option>
                <option value="Family medicine">Family medicine</option>
                <option value="neurologist">Neurologist</option>
                <option value=" Nuclear medicine"> Nuclear medicine</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Ophthalmology">Ophthalmology</option>
                <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                <option value="Pathologists">Pathologists</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Psychiatrists">Psychiatrists</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="time">Select time</label>
              <input type="datetime-local" id='time' name='time' required />
            </div>
            <div className="column">
              <label htmlFor="contact">Contact Number</label>
              <input type="tel" id='contact' name='contactNum' required placeholder='Your Phone Number here' />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="disease">Describe Your Sickness</label>
              <textarea name="disease" id="disease" placeholder='Tell us about your sickness so that we can treat you well 😊' rows='3'></textarea>
            </div>
          </div>
          {/* Once this button is clicked I need to redirect the user back to Landing page and show them an message telling your appointment was successfull 
          and the data inserted in the form should be shown to the admin through firebase*/}
          <button >Submit</button>
        </form>
       </div>
      </div>
    </>
  )
}

export default DoctorAppointForm