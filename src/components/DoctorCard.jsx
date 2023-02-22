import React from 'react';
import { useState } from 'react';
import './DoctorCard.css';
import Img1 from './images/img1.jpeg';
import Img2 from './images/img2.jpeg';
import Img3 from './images/img3.jpeg';
import Img4 from './images/img4.jpeg';
import Img5 from './images/img5.jpeg';
import Img6 from './images/img6.jpeg';
import Img7 from './images/img7.jpeg';
import Img8 from './images/img8.jpeg';
import Img9 from './images/img9.jpeg';
import Img10 from './images/img10.jpeg';
import Img11 from './images/img11.jpeg';
import Img12 from './images/img12.jpeg';
// import Navbar from './Navbar';
import Footer from './Footer';


const DoctorCard = () => {
   
    

    const[cards]= useState([
        {
            image: <img src={Img1} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-1',
            text:`This is a Cardiologist. Cardiologists focus on diseases of the cardiovascular system, or the heart, lungs, and blood vessels like congenital heart disease and hypertension.`
        },
        {   
            image: <img src={Img2} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-2',
            text:`This is a Dermatologists. Dermatologists treat and diagnose benign and malignant skin disorders, in addition to issues with hair and nails, the mouth, and more. `
        },
        {   
            image: <img src={Img3} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-3',
            text:`This is a Endocrinologists. Endocrinologists focus on the internal glands of the body, such as the adrenal or thyroid glands.`
        },
        {
            image: <img src={Img4} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-4',
            text:`This is a Family medicine. Family medicine is a broad specialty focused on the complete health of the family. `
        },
        {
            image: <img src={Img5} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-5',
            text:`This is a neurologist. A neurologist treats conditions that affect the brain, spinal cord, nervous system, and muscles.`
        },
        {
            image: <img src={Img6} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-6',
            text:`This is a Nuclear medicine. Nuclear medicine specialists use properties of radioactive atoms and molecules to research, diagnose, and treat disease. `
        },
        {
            image: <img src={Img7} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-7',
            text:`This is a Gynecology. The gynecology specialty focuses on medical and surgical care for women.`
        },
        {
            image: <img src={Img8} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-8',
            text:`This is a Ophthalmology. Opthamologists can treat patients for any issues that affect the structure of the eye, the orbit, or the visual pathways.`
        },
        {
            image: <img src={Img9} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-9',
            text:`This is a Orthopedic Surgeon. Orthopedic surgeons focus on preserving and restoring the form and function of the spine and extremities through surgical and physical means.`
        },
        {
            image: <img src={Img10} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-10',
            text:`This is a Pathologists. Pathologists specialize in the study of disease, specifically the causes of certain diseases and how and why they affect the body the way they do`
        },
        {
            image: <img src={Img11} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-11',
            text:`This is a Pediatrician. Pediatricians work with children and focus on their physical, emotional, and social health.`
        },
        {
            image: <img src={Img12} alt="Doctor1" height={170} width={200}></img>,
            title:'Doctor-12',
            text:`This is a Psychiatrists. Psychiatrists prevent, diagnose, and treat mental, behavior, addictive, and emotional disorders.`
        },
        
    ])
  return (
    <>
    {/* <header>
        <Navbar/>
    </header> */}

    <main>
    <section>
    <div className='dccontainer'>
        <h1>Our Doctors</h1>
    <div className="cards">
        {
            cards.map((card,i)=> (

        <div key={i} className="card">
            {card.image}
            <h3>
               {card.title}
            </h3>
            <p>{card.text}</p>
            <button className='btn'>Book Now</button>
        </div>
            ))
        }
        </div>  
    </div>
    </section>
    </main>
    <footer>
    <h2 align='center'><Footer/></h2> 
    </footer>
    </>
  )
}

export default DoctorCard;
