import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./i18n";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./toastConfig";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/Whatsapp/WhatsAppButton";
import Home from "./pages/Home";
import About_us from "./pages/About-us";
import ScrollToTop from "./components/ScrollToTop";
import AirFreight from "./pages/Freight-Forwarding/AirFreight";
import OceanFreight from "./pages/Freight-Forwarding/OceanFreight";
import RoadFreight from "./pages/Freight-Forwarding/RoadFreight";
import SeaAirFreight from "./pages/Freight-Forwarding/SeaAirFreight";
import LinerShipping from "./pages/Other-Services/LinerShipping";
import CustomsClearance from "./pages/Other-Services/CustomsClearance";
import Warehouse3pl from "./pages/Other-Services/Warehouse3pl";
import ProjectLogistics from "./pages/Other-Services/ProjectLogistics";
import Transportation from "./pages/Other-Services/Transportation";
import BuyersConsole from "./pages/Other-Services/BuyersConsole";
import ValueAddedService from "./pages/Other-Services/ValueAddedService";
import ContactWidget from "./components/ContactWidget/ContactWidget";
import Contact_Us from "./pages/Contact-Us";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-right" toastOptions={toastOptions} />

      <Header />
      <Routes>
        {/* English */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/air-freight" element={<AirFreight />} />
        <Route path="/ocean-freight" element={<OceanFreight />} />
        <Route path="/road-freight" element={<RoadFreight />} />
        <Route path="/sea-air" element={<SeaAirFreight />} />
        <Route path="/liner-shipping" element={<LinerShipping />} />
        <Route path="/customs-clearance" element={<CustomsClearance />} />
        <Route path="/warehouse-3pl" element={<Warehouse3pl />} />
        <Route path="/project-logistics" element={<ProjectLogistics />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/buyers-console" element={<BuyersConsole />} />
        <Route path="/value-added" element={<ValueAddedService />} />
        <Route path="/contact" element={<Contact_Us />} />

        {/* Arabic */}
        <Route path="/ar" element={<Home />} />
        <Route path="/ar/about" element={<About_us />} />
        <Route path="/ar/air-freight" element={<AirFreight />} />
        <Route path="/ar/ocean-freight" element={<OceanFreight />} />
        <Route path="/ar/road-freight" element={<RoadFreight />} />
        <Route path="/ar/liner-shipping" element={<LinerShipping />} />
        <Route path="/ar/customs-clearance" element={<CustomsClearance />} />
        <Route path="/ar/warehouse-3pl" element={<Warehouse3pl />} />
        <Route path="/ar/project-logistics" element={<ProjectLogistics />} />
        <Route path="/ar/transportation" element={<Transportation />} />
        <Route path="/ar/buyers-console" element={<BuyersConsole />} />
        <Route path="/ar/value-added" element={<ValueAddedService />} />
        <Route path="/ar/contact" element={<Contact_Us />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
