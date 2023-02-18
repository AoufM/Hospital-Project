import React from 'react';
import './MedicineCard.css'
import Navbar from './Navbar';
import Footer from './Footer';

import mimg1 from './images/almox.jpeg';
import mimg2 from './images/antacid.jpeg'
import mimg3 from './images/antihistamine.jpeg'
import mimg4 from './images/aspirin.jpeg'
import mimg5 from './images/biotin.jpeg'
import mimg6 from './images/crocin.jpeg'
import mimg7 from './images/omega.jpeg'
import mimg8 from './images/paracetomol.jpeg'
import mimg9 from './images/pudin.jpeg'

const MedicineCard = () => {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <br />
    <br />
    <main>
    <span><h1 align="center">Buy Medicines Special Offer For Students</h1></span>
    <div className="mcard-grid">
    <div className='mcard'>
        <div className="mcard-header-image">
           <img src={mimg1} alt="Almox" />
           </div>
        <div className="mcard-body">
          <h3>Amoxcycillin</h3>
        Almox 500 Capsule is used to treat a variety of bacterial infections. It is effective in infections of the throat, ear, nasal sinuses, respiratory tract (e.g., pneumonia), urinary tract, skin and soft tissue, and typhoid fever.
        </div>
        <div className="mcard-footer">
            <button className='btn'>Buy Now</button>
            <button className='btn btn-outline'>Contact Seller</button>
        </div>
    </div>
    <div className='mcard'>
        <div className="mcard-header-image">
           <img src={mimg2} alt="Antacid" />
           </div>
        <div className="mcard-body">
          <h3>Antacid</h3>
          Antacids are medicines that counteract (neutralise) the acid in your stomach to relieve indigestion and heartburn. They come as a liquid or chewable tablets and can be bought from pharmacies and shops without a prescription.
        </div>
        <div className="mcard-footer">
            <button className='btn'>Buy Now</button>
            <button className='btn btn-outline'>Contact Seller</button>
        </div>
    </div>
    <div className='mcard'>
        <div className="mcard-header-image">
           <img src={mimg3} alt="Antihistamine" />
           </div>
        <div className="mcard-body">
          <h3>Antihistamine</h3>
          Antihistamines are medicines often used to relieve symptoms of allergies, such as hay fever, hives, conjunctivitis and reactions to insect bites or stings.
        </div>
        <div className="mcard-footer">
            <button className='btn'>Buy Now</button>
            <button className='btn btn-outline'>Contact Seller</button>
        </div>
    </div>
    <div className='mcard'>
        <div className="mcard-header-image">
           <img src={mimg4} alt="Aspirin" />
           </div>
        <div className="mcard-body">
          <h3>Aspirin</h3>
          Aspirin is a common drug for relieving minor aches, pains, and fevers. People also use it as an anti-inflammatory or a blood thinner.It can relieve pain and reduce the risk of serious problems like heart attacks and strokes.
        </div>
        <div className="mcard-footer">
            <button className='btn'>Buy Now</button>
            <button className='btn btn-outline'>Contact Seller</button>
        </div>
    </div>
    <div className='mcard'>
        <div className="mcard-header-image">
           <img src={mimg5} alt="Biotin" />
           </div>
        <div className="mcard-body">
          <h3>Biotin</h3>
          Your body needs biotin to metabolize carbohydrates, fats, and amino acids, the building blocks of protein. Biotin is often recommended for strengthening hair and nails.
        </div>
        <div className="mcard-footer">
            <button className='btn'>Buy Now</button>
            <button className='btn btn-outline'>Contact Seller</button>
        </div>
    </div>
    <div className='mcard'>
        <div className="mcard-header-image">
           <img src={mimg6} alt="Crocin" />
           </div>
        <div className="mcard-body">
          <h3>Crocin</h3>
          Crocin Pain Relief is used for symptomatic relief from mild to moderate pain eg., headache, migraine, toothache, period pain and musculoskeletal pain. 
        </div>
        <div className="mcard-footer">
            <button className='btn'>Buy Now</button>
            <button className='btn btn-outline'>Contact Seller</button>
        </div>
    </div>
    <div className='mcard'>
        <div className="mcard-header-image">
           <img src={mimg7} alt="Omega" />
           </div>
        <div className="mcard-body">
          <h3>Omega</h3>
          Omega-3 fats have been shown to help prevent heart disease and stroke, may help control lupus, eczema, and rheumatoid arthritis, and may play protective roles in cancer and other conditions.
        </div>
        <div className="mcard-footer">
            <button className='btn'>Buy Now</button>
            <button className='btn btn-outline'>Contact Seller</button>
        </div>
    </div>
    <div className='mcard'>
        <div className="mcard-header-image">
           <img src={mimg8} alt="Paracetomol" />
           </div>
        <div className="mcard-body">
          <h3>Paracetomol</h3>
          Paracetamol is a commonly used medicine that can help treat pain and reduce a high temperature (fever). It's typically used to relieve mild or moderate pain, such as headaches, toothache or sprains.
        </div>
        <div className="mcard-footer">
            <button className='btn'>Buy Now</button>
            <button className='btn btn-outline'>Contact Seller</button>
        </div>
    </div>
    <div className='mcard'>
        <div className="mcard-header-image">
           <img src={mimg9} alt="Pudin Hara" />
           </div>
        <div className="mcard-body">
          <h3>Pudin Hara</h3>
          Dabur Pudin Hara Active Antacid is used to soothe the problem of stomach ache, indigestion and flatulence. It is also used to get relief from vomiting and nausea.
        </div>
        <div className="mcard-footer">
            <button className='btn'>Buy Now</button>
            <button className='btn btn-outline'>Contact Seller</button>
        </div>
    </div>
    </div>
    </main>
    <br />
    <br />
    <footer>
    <h2 align='center'><Footer/></h2> 
    </footer>
    </>
  )
}

export default MedicineCard
