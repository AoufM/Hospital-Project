import React from 'react';
import './MedicineBuyForm.css'

const MedicineBuyForm = () => {
   
  const ordered=()=>{
    // here the code will come that will show ordered is placed in the admin panel
    alert("Your ordered has been placed")
  }

  return (
    <div className='mlcontainer'>
      <div className="mmlcontainer">
        <h1>Fill this form to place your order</h1>
        <p>You can contact us at +917321940980 if the order is not deleiverd within 6-7 working days</p>
        <form>
        <div className="row">
        <label htmlFor="address">Please Enter Delivery Address</label>
       <textarea name="address" id="address" rows="3" placeholder='Enter your address' required></textarea>
       </div>
        <div className="row">
         
       <label htmlFor="number"> Please Enter Your Phone Number</label>
       <input type="tel" className='number' placeholder='Enter Your Number' required/>
       </div>
       <button type='submit' onSubmit={ordered}>Place Order</button>
       </form>
      </div>
    </div>
  )
}

export default MedicineBuyForm;