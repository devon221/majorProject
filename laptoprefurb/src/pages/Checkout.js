import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const CheckoutBilling = () => {
  const { cartItems: data, cartTotalAmount } = useSelector(
    (state) => state.carts
  );

  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({
      ...billingInfo,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    // You can send the billingInfo and cart data to your server for processing
  };

  return (
    <div className="checkout-billing container mx-auto py-10 px-10 text-center">
      <h2 className="section-title uppercase font-bold space-font text-2xl mt-10 mb-10 tracking-wider">
        Checkout
      </h2>

      <div className="billing-form">
        <h3 className="section-subtitle text-lg font-medium mb-5">Billing Information</h3>
        <form>
          <div className="form-group mb-4">
             
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={billingInfo.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
             
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={billingInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              value={billingInfo.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={billingInfo.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Postal code"
              value={billingInfo.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
           
            <input
              type="tel"
              id="contactNumber"
              placeholder="Contact number"
              name="contactNumber"
              value={billingInfo.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="paymentMethod">Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={billingInfo.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="cod">Cash On Delivery</option>
              <option value="debit">Debit Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>
        </form>
      </div>

      <div className="order-summary">
        <h3 className="section-subtitle text-lg font-medium mb-5">Order Summary</h3>
        <div className="order-items">
          {data.map((product) => (
            <div key={product.id} className="order-item">
              <span>{product.name}</span>
              <span>{currencyFormatter(product.price)}</span>
            </div>
          ))}
        </div>
        <div className="order-total">
          <span className="text-sky-500">Subtotal</span>
          <span className="text-rose-500">{currencyFormatter(cartTotalAmount)}</span>
        </div>
      </div>

      <div className="checkout-actions flex justify-center items-center py-8">
        <button
          className="back-to-cart uppercase border py-3 px-8 hover:bg-rose-200 hover:text-rose-600 font-medium duration-300 hover:border-rose-200 mr-4"
        >
          <Link to="/cart">Back to Cart</Link>
        </button>
        <button
          className="place-order bg-rose-500 py-3 px-8 uppercase font-medium text-rose-50 tracking-widest hover:bg-rose-600 duration-300"
          onClick={handleCheckout}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutBilling;
