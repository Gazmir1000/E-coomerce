import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import Success from "./pages/Success";

import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import "./app.css";

const App = () => {
  const user = true;
  const navigate = () => {
    return <Navigate to="/" />;
  };
  return (
    <div className="appDiv">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/productlist/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/register">{user ? navigate : <Register />}</Route>
          <Route path="/login">{user ? navigate : <Login />}</Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Pay />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
