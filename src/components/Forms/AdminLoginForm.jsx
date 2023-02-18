import React from 'react'
import './AdminLoginForm.css'

const AdminLoginForm = () => { 



  const aname= document.getElementById('aname');
  const apass= document.getElementById('apass');
  const form= document.getElementById('form');
  const errorMsg= document.getElementById('error')
  form.addEventListener('submit', (e)=>{
    let messages=[]
    
    if(aname.value!== "Aouf"){
      messages.push('Name does not match')
    }
    if(apass.value!== "Aouf123"){
      messages.push('Password does not match')
    }
    if (messages.length> 0){
    e.preventDefault()
    errorMsg.innerText= messages.join(', ')
    }
  });

 // I need to make this verification more proper and then after logging in the admin page should be opened
 

  return (
    
      <div className="adcontainer">
        <div className="adinnerBox">
            <h1 align='center' className='lheading'>Admin Login Form</h1>
            <div id='error' className='error'></div>
            <form id='form'>
            <label htmlFor="aname">Admin Name : </label>
            <br />
            <input type="text" className='aname' id='aname' required />
            <br />
            <label htmlFor="apass">Admin Password : </label>
            <br />
            <input type="text" className='apass' id='apass' required />
            <br />
            <br />
               
            <div className="adfooter">
              <button type='submit'> Log In</button>
              </div>
              </form>
            
           </div>

        </div>
   
  )
}

export default AdminLoginForm;
