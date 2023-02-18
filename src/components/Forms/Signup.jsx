import React, { useState } from 'react';
import './Signup.css';
import { Link, useHistory   } from 'react-router-dom';
import InputControl from './InputControl';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase';



const Signup = () => {

    const history= useHistory();
    const [values, setValues]= useState({
        name:"",
        email:"",
        pass:"",

    });

    const [errorMsg, setErrorMsg]= useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled]= useState(false);

    const handleSubmission=()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Please fill all the fields");
            return;
        }
        // here i can and i have to add more validation for pass amd email& name

        setErrorMsg("");

        setSubmitButtonDisabled(true);
        
        createUserWithEmailAndPassword(auth,values.email,values.pass).then
        (async(res)=>{
                setSubmitButtonDisabled(false);
                const user= res.user;
              await  updateProfile(user, {
                    displayName: values.name,
                });
                history.push('/');
               
        }).catch((err)=>{
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message)
           
        });
    };

  return (
    <>
     <div className="lcontainer">
        <div className="linnerBox">
            <h1 align='center' className='lheading'>SignUp</h1>

            <InputControl label= "Name" placeholder="Enter your name"
            onChange={event=>
                setValues(prev=>({...prev,name:event.target.value}))}
            />
            <InputControl label= "Email" placeholder="Enter email address"
            onChange={event=>
                setValues(prev=>({...prev,email:event.target.value}))}
            />
            <InputControl label= "Password" placeholder="Enter password"
            onChange={event=>
                setValues(prev=>({...prev,pass:event.target.value}))}
            />
           
           <div className="footer">
            <b className='error'>{errorMsg}</b>
            <button onClick={handleSubmission} disabled={submitButtonDisabled}>
                SignUp</button>
            <p>Already have an account? 
                <span>
                    <Link to="/LoginForm">Login</Link>
                </span>
            </p>
           </div>

        </div>
        </div> 
    
    </>
  )
}

export default Signup
