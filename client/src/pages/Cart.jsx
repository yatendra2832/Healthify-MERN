import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../store/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + (Number(item.offerAmount) * item.quantity), 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems, totalPrice, totalItems } });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary my-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          <div className="row mb-4">
            {cartItems.map((item, index) => (
              <div className="col-12 mb-4" key={index}>
                <div className="card shadow-sm">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={item.imgSrc} className="img-fluid rounded-start h-100" alt={item.title} />
                    </div>
                    <div className="col-md-5">
                      <div className="card-body">
                        <h5 className="card-title text-primary">{item.title}</h5>
                        <p className="card-text text-muted">{item.description}</p>
                        <p className="card-text"><strong>₹ {item.offerAmount}</strong></p>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center align-items-center p-3">
                      <div className="btn-group mb-3" role="group">
                        <button type="button" className="btn btn-outline-secondary" onClick={() => decrementQuantity(item._id)}>-</button>
                        <span className="btn btn-outline-secondary disabled">{item.quantity}</span>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => incrementQuantity(item._id)}>+</button>
                      </div>
                      <button className="btn btn-danger mt-2" onClick={() => removeFromCart(item._id)}>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-12 text-right">
              <p className="h5">Sub-Total: {totalItems} items</p>
              <p className="h4">Total Price: ₹ {totalPrice.toFixed(2)}</p>
              <button onClick={handleCheckout} className="btn btn-primary btn-lg">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
