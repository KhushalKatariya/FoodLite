import React, { useContext } from 'react'
import "./placeorder.css"
import { StoreContext } from '../../context/StoreContext'

const Placeorder = () => {

  const {getCartTotal} = useContext(StoreContext)

  return (
    <form className='place-order' action="">
      <div className="place-order-left">
        <p className="title">Dilevery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />

        <div className="multi-field">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className="multi-field">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getCartTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Dilevery Fee</p>
              <p>${getCartTotal() === 0? 0: 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>${getCartTotal() === 0? 0 :getCartTotal() + 2}</b>
            </div>
          </div>
          <button>Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder