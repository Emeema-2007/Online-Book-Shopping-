import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function CartPayment() {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useContext(CartContext);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    setPaymentSuccess(true);
    clearCart();
  };

  return (
    <div className="home-container">
      <h2>🛒 Cart & Payment</h2>

      {cart.length === 0 && !paymentSuccess && (
        <p>Your cart is empty 😔</p>
      )}

      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>

          <div className="qty-controls">
            <button onClick={() => updateQuantity(item.title, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.title, 1)}>+</button>
          </div>

          <button onClick={() => removeFromCart(item.title)}>Remove</button>
        </div>
      ))}

      {!paymentSuccess && cart.length > 0 && (
        <>
          <h3>Total Price: ₹{totalPrice}</h3>

          <select
            className="payment-select"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="UPI">UPI</option>
            <option value="Card">Card</option>
            <option value="COD">Cash on Delivery</option>
          </select>

          <button className="pay-btn" onClick={handlePayment}>
            Pay Now
          </button>
        </>
      )}
      {paymentSuccess && (
        <div className="payment-success-overlay">
          <div className="order-summary">
            <h3>🎉 Payment Successful!</h3>
            <p>Your order has been successfully placed.</p>
            <p>
              Order Number: <strong>#123456</strong>
            </p>
            <p>
              We will process your order and send the delivery details to your
              email. You can also check your order history for updates.
            </p>
            <button
              className="pay-btn"
              onClick={() => window.location.reload()}
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPayment;
