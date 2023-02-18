import React from 'react';
import './DoctorAppointForm.css';
// import TextField from '@mui/material/TextField'

const DoctorAppointForm = () => {
  const submitted= ()=>{
    // this code should run on the submit button and the details should be send to the admin panel and the user should be redirected to main page
    

    alert("your appointment was succesfull" );
  }
  return (
    <>
      <div className="acontainer">
       <div className="aacontainer">
        <h1>BOOK A DOCTOR</h1>
        <p>We have staff working 24/7 so you can get an appointment anytime😀</p>
        <form >
          <div className="row">
            <div className="column">
              <label htmlFor="name">Patient Name</label>
              <input type="text"  id='name' required placeholder='Pateint Name Here'/>
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
              <input type="datetime-local" id='time' required />
            </div>
            <div className="column">
              <label htmlFor="contact">Contact Number</label>
              <input type="tel" id='contact' required placeholder='Your Phone Number here' />
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
          <button type='submit' onSubmit={submitted}>Submit</button>
        </form>
       </div>
      </div>
    </>
  )
}

export default DoctorAppointForm