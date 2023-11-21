import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="Inter relative bg-HeroImage bg-cover bg-hero border-b-2 border-[#02bbbd]">
      <div className="absolute inset-0  bg-black opacity-50"></div>
      <div className="container mx-auto relative z-10 text-white py-[200px]">
        <h1 className="text-4xl sm:text-6xl ml-5 sm:ml-0 font-bold ">Unlock the</h1>
        <h1 className="text-4xl sm:text-6xl ml-5 sm:ml-0 font-bold">Beauty of</h1>
        <h1 className="text-4xl sm:text-6xl ml-5 sm:ml-0 font-bold mb-4 ">Sasmuan, Pampanga</h1>
        <p className="text-lg ml-5 sm:ml-0 mb-5">Where Every Moment is a Masterpiece</p>
        <Link
          to="/tourpage"
          className="bg-white uppercase text-black font-bold py-2 px-6 rounded-full ml-5 sm:ml-0 hover:bg-blue-300 transition duration-300"
        >
          Explore now!
        </Link>
      </div>
    </div>
  );
}

export default Hero;
