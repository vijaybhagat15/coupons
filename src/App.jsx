import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coupon from "./components/Coupon";
import CreateCoupon from "./components/CreateCoupon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Coupon" element={<Coupon/>}/>
        <Route path="/create-coupon" element={<CreateCoupon />} />
      </Routes>
    </Router>
  );
}

export default App;
