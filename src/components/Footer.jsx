import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='fcontainer'>
       <div className="footer-section">
        <div className="footer-item">
            <h2>Company</h2>
            <p><a href="/https://collegedunia.com/college/56471-bnn-college-thane/admission"> About Us</a></p>
            <p><a href="/https://collegedunia.com/college/56471-bnn-college-thane/admission"> Our Services</a></p>
            <p><a href="/">&copy; Bnn College</a></p>
        </div>
        <div className="footer-item">
            <h2 className='madeBy'>Made By </h2>
            <p className='aouf'> Momin Aouf</p>
            
        </div>
        <div className="footer-item">
            <h2>Surf</h2>
            <p><a href="/"> Home </a></p>
            <p><a href="/"> Medicines </a></p>
            <p><a href="/"> Doctors </a></p>
            <p><a href="/"> Articles </a></p>
        </div>
    </div>
    </div>
  )
}

export default Footer
