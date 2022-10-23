import logo from "../logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../pages/home/Home";
import DeliveryDetails from "../pages/deliveryDetails/DeliveryDetails";
import DeliveryLocation from "../pages/deliveryLocation/DeliveryLocation";
import DeliveryPayment from "../pages/deliveryPayment/DeliveryPayment";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<DeliveryDetails />} />
          <Route path="/location" element={<DeliveryLocation />} />
          <Route path="/payment" element={<DeliveryPayment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
