import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.title === book.title);
      if (existing) {
        return prev.map((item) =>
          item.title === book.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...book, quantity: 1, price: Number(book.price.replace("₹", "")) }];
    });
  };

  const removeFromCart = (title) => {
    setCart(cart.filter((item) => item.title !== title));
  };

  const updateQuantity = (title, change) => {
    setCart(
      cart
        .map((item) =>
          item.title === title
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
