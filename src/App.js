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
import HistoryPage from "./screens/HistoryPage";
import MunicipalInfo from "./screens/MunicipaIinfo"
import SanAntonio from "./screens/SanAntonio"

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
        <Route path="/SanAntonio" element={<SanAntonio />} />
        <Route path="/tourpage" element={<TourPage />} />
        <Route path="/HistoryPage" element={<HistoryPage />} />
        <Route path="/MunicipalInfo" element={<MunicipalInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
