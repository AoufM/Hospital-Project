import React ,{useContext}from 'react';
import arrow from "./images/arrow.png";
import cart from "./images/cart.png";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from './Cart';



const ContextCart = () => {

  const {item, clearCart, totalItem ,totalAmount}= useContext(CartContext);

  if(item.length=== 0){
    return (
      <>
      <header>
          <div className="continue-shopping">
            <img src={arrow} alt="arrow" className="arrow-icon" />
            <h3>Continue Shopping</h3>
          </div>
          <div className="cart-icon">
            <img src={cart} alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have <span className="total-items-count"> {totalItem}</span>items in your shopping cart
          </p>
          </section>
      </>
    )
  }

  return (
    <>
     <header>
          <div className="continue-shopping">
            <img src={arrow} alt="arrow" className="arrow-icon" />
            {/* here i need to direct the page to medicineCard.jsx for continuing shopping */}
            <h3> Continue Shopping</h3>
          </div>
          <div className="cart-icon">
            <img src={cart} alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have <span className="total-items-count"> {totalItem}</span> items in your shopping cart
          </p>

          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
               
              {
              item.map((curItem)=>{
                   return  <Items key={curItem.id}{...curItem}/>
              })
             }
               
             </Scrollbars>
            </div>
          </div>

          <div className="card-total">
            <h3>
              Cart Total: <span>{totalAmount}Rs</span>
            </h3>
            {/* once checkout is done i need to collect that data and show it in the database */}
            <button>Checkout</button>
            <button className="clear-cart" onClick={clearCart}>
              Clear Cart</button>
          </div>
        </section>
 
    </>
  )
}

export default ContextCart;
