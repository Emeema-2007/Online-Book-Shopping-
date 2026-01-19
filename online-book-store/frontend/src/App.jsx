import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import CartPayment from "./pages/CartPayment";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<CartPayment />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
