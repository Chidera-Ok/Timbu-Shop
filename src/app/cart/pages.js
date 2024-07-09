import React, { useContext } from 'react';
import { CartContext } from '../cartContext'; // Import cart context

class CartPage extends React.Component {
  render() {
    const { cartItems, getCartTotal } = useContext(CartContext);

    return (
      <div className="bg-white min-h-screen">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {/* Display cart items with quantity and price */}
          </ul>
        )}
        {cartItems.length > 0 && (
          <p>
            Total: ${getCartTotal().toFixed(2)}
          </p>
        )}
        {/* Add checkout button or link here */}
      </div>
    );
  }
}

export default CartPage;
