import React from 'react'
import './Articles.css'
import Navbar from './Navbar';
import Footer from './Footer';

const Articles = () => {
  return (
    <div>
      <header>
      <Navbar/>
      </header>
      <br />
      <br />
      <main>
       <span><h1 align='center'>Read Healthy Articles</h1></span> 

      </main>
      <br />
      <br />
      <footer>
        <h2 align='center'> <Footer/></h2>
      </footer>
    </div>
  )
}

export default Articles
