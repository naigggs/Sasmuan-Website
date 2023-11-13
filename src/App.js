import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from "./screens/LandingPage";
import About from "./screens/About";
import ContactUs from "./screens/ContactUs";
import BangkungMalapad from "./screens/BangkungMalapad";
import TourPage from "./screens/TourPage";

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/bangkungmalapad" element={<BangkungMalapad />} />
        <Route path="/tourpage" element={<TourPage />} />
      </Routes>
    </Router>
  );
}

export default App;
