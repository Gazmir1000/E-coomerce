import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import "./app.css";

const App = () => {
  return (
    <div className="appDiv">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
