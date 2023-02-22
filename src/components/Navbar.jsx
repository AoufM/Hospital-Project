import React from 'react';
import './Navbar.css';
// import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='ncontainer'>
     <nav className="navbar">
        <div className="left">
            <h1>Bnn Hospital</h1>
        </div>
        <div className="right">
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkBtn">
                <i className="fa fa-bars"></i>
            </label>
            <ul className="list">
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Doctors</a></li>
                <li><a href='/'>Medicines</a></li>
                <li><a href='/'>Articles</a></li>
                <li><a href='/'>Admin</a></li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
