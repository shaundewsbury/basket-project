import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Home } from "./pages/home";
import { Basket } from "./pages/basket";
import { ShoppingBasketProvider } from "./context/shopping-basket-context";

function App() {
  return (
    <ShoppingBasketProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
      </Routes>
    </ShoppingBasketProvider>
  );
}

export default App;
