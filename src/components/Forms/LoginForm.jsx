import React ,{useState} from 'react';
// import DoctorCard from '../DoctorCard';
import { Link, useHistory} from 'react-router-dom';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import InputControl from './InputControl';
import './LoginForm.css';




const LoginForm = () => {
    const history= useHistory();
    const [values, setValues]= useState({
        email:"",
        pass:"",

    });

    const [errorMsg, setErrorMsg]= useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled]= useState(false);

    const handleSubmission=()=>{
        if(!values.email || !values.pass){
            setErrorMsg("Please fill all the fields");
            return;
        }
        // here i can and i have to add more validation for pass amd email
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        
        signInWithEmailAndPassword(auth,values.email,values.pass).then
        (async(res)=>{
                setSubmitButtonDisabled(false);
               // here after logging in the user should be send into the landingpage of the website
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
            <h1 align='center' className='lheading'>Login</h1>
            
            <InputControl label= "Email" placeholder="Enter email address"
            onChange={event=> setValues(prev=>({...prev,email:event.target.value}))}/>
            <InputControl label= "Password" placeholder="Enter password"
            onChange={event=> setValues(prev=>({...prev,pass:event.target.value}))}/>
           
           <div className="footer">
            <b className='error'>{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
            <p>Don't have an account? 
                <span>
                    <Link to="/Signup">Sign up</Link>
                </span>
            </p>
           </div>

        </div>
        </div> 
    </>
  )
}

export default LoginForm
