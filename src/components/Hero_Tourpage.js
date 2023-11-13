import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


function HeroTourPage() {
  return (
    <div className="Inter relative bg-HeroImageContact bg-cover bg-center border-b-2 border-[#02bbbd]">
      <div className="absolute inset-0  bg-black opacity-10"></div>
      <div className="container mx-auto relative z-10 text-white py-[200px]">
        <h1 className="text-4xl sm:text-6xl ml-5 sm:ml-0 font-bold">Ready to</h1>
        <h1 className="text-4xl sm:text-6xl ml-5 sm:ml-0 font-bold">Collaborate?</h1>
        <h1 className="text-4xl sm:text-6xl ml-5 sm:ml-0 font-bold mb-4">Let's Code Your Vision!</h1>
        <p className="text-lg ml-5 sm:ml-0 mb-5">Check out our contact infos below!</p>
        <ScrollLink
          to="meet-our-team" // Should match the ID of the "Meet Our Team" section
          smooth={true} // Enable smooth scrolling
          offset={-100} // Adjust the offset if needed
          duration={500}
          
        >
          <button className="bg-white uppercase text-black font-bold py-2 px-6 rounded-full ml-5 sm:ml-0 hover:bg-blue-300 transition duration-300">Contact us!</button>
        </ScrollLink>
      </div>
    </div>
  );
}

export default HeroTourPage;
