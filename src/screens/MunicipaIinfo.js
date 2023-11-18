import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Municipal from "../medias/Municipal Chart .png"

import Hero from "../components/Hero";

function MunicipalPage() {
  return (
    <div>
      <Hero />
      <div class="Inter p-5 flex flex-col justify-center items-center">
        <div class="Inter text-center text-gray-800 uppercase text-shadow-md  font-extrabold text-4xl sm:text-7xl">
          Sasmuan Municipal Information
        </div>
    
              <img
                class="w-[1500px] h-[1000px]"
                src={Municipal}
                alt="Gian Cabigting"
              />
        
      </div>
      <Footer />
    </div>
  );
}

export default MunicipalPage;
