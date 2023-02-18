import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
  return (
    <>
    <div>
      <h1>
        <Link to="/LoginForm">Login</Link>
      </h1>
      <br />
      <h1>
        <Link to="/Signup">Signup</Link>
        </h1>
        <br />
    </div>

    <br />
    <br />
    <br />

    <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>


    </>
  )
}

export default HomePage
