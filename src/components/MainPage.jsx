import React from 'react';
import './MainPage.css';
import Navbar from './Navbar';
import Footer from './Footer';


const MainPage = () => {
  return (
    <div className='mcontainer'>
       <header>
       <Navbar/>
       </header>
       
       
       <main>
        <div className="welcome">
            <h2>Welcom To Bnn Hospital</h2>
            <p>Get help with ease now</p>
        </div>
       </main>
        
        <footer>
        <Footer/>
        </footer>

        
      
     
    </div>
  )
}

export default MainPage
