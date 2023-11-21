import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Municipal from "../medias/Municipal Chart .png";

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
        <div className="flex gap-40 flex-row ">
          <div className="flex flex-col">
        <div class="mb-5 mt-5 Inter text-center text-gray-800 uppercase text-shadow-md  font-extrabold text-4xl sm:text-7xl">
          Geography
        </div>

        <p class="text-gray-700 text-lg my-5 w-[500px]">
          Sasmuan is located in the southern part of Pampanga. It is one of the
          three towns in the province along the Manila Bay coastline Others are
          Macabebe and Lubao. It is bounded to the north by the municipalities
          of Guagua and Minalin; to the east by the municipality of Macabebe; to
          the west by the municipality of Lubao; and to the south by Manila Bay.
          Most of the town's area is fish ponds.
        </p>
        </div>
        <div className="flex flex-col">
        <div class="mb-5 mt-5 Inter text-center text-gray-800 uppercase text-shadow-md  font-extrabold text-4xl sm:text-7xl">
          Barangays
        </div>

        <p class="text-gray-700 text-lg my-5">
          Batang 1st "San Vicente" Batang 2nd "Sto. Nino"<br></br>
          Mabuanbuan "Sagrada Pamilya"<br></br>
          Malusac "Sto Rosario"<br></br>
          San Antonio<br></br>
          San Nicolas 1st<br></br>
          San Nicolas 2nd includes Sitio Remedios <br></br>
          San Pedro <br></br>
          Santa Lucia<br></br>
          Santa Monica includes Sitio San Francisco <br></br>
          Santo Tomas includes Sitio Santa Cruz<br></br>
          Sebitanan "Sto Cristo"<br></br>
        </p>
      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default MunicipalPage;
