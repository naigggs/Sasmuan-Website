import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from "./screens/LandingPage";
import About from "./screens/About";
import ContactUs from "./screens/ContactUs";
import BangkungMalapad from "./screens/BangkungMalapad";
import TourPage from "./screens/TourPage";
import Malusac from "./screens/Malusac";
import SanPedro from "./screens/SanPedro";
import SantaLucia from "./screens/SantaLucia";

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/bangkungmalapad" element={<BangkungMalapad />} />
        <Route path="/Malusac" element={<Malusac />} />
        <Route path="/SanPedro" element={<SanPedro />} />
        <Route path="/SantaLucia" element={<SantaLucia />} />
        <Route path="/tourpage" element={<TourPage />} />
      </Routes>
    </Router>
  );
}

export default App;
