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
       <section className='left-sec'>
         <p></p>
       </section>
       <section className='right-sec'>

       </section>
       </main>
        
        <footer>
        <Footer/>
        </footer>

        
      
     
    </div>
  )
}

export default MainPage
