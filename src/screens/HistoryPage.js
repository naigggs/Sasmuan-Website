import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import History from "../medias/Sasmuan Friars.png";

import Hero from "../components/Hero";


function HistoryPage() {
    return (
      <div>
        <Hero />
        <div class="Inter p-5 flex flex-col justify-center items-center">
          <div class="mb-10 mt-5Inter text-center text-gray-800 uppercase text-shadow-md  font-extrabold text-4xl sm:text-7xl ">
            Sasmuan's Rich History
          </div>

          <img
                class="w-[800px] h-[600px]"
                src={History}
                alt="Gian Cabigting"
              />



          <div class="bg-white rounded-lg mx-auto p-4 max-w-screen-md sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
            <p class="text-gray-700 text-lg my-5">
              
Sasmuan, Pampanga, Philippines, was already a well-developed settlement with its own system of government well before the era of Spanish colonization. It evolved to be one of the oldest and major settlements in Pampanga by the 16th century.

The town's name is derived from the ancient Kapampangan rootword "sasmo", which means "to meet". It is said that Sasmuan was the meeting place of the Pampango datus when they were at war with the Chinese in Guagua.

In 1590, the Spaniards established a permanent settlement in Sasmuan and built the Santa Lucia Church, one of the first Roman Catholic churches in the Philippines. The church was built with the political and financial support of the Principalia, the local elite.


After the Philippine Revolution, Sasmuan became a municipality in the province of Pampanga. The town continued to grow and develop, and it became a major center for agriculture and aquaculture.

Today, Sasmuan is a thriving municipality with a population of over 27,000 people. The town is known for its fish farms, its delicious seafood, and its rich cultural heritage..
            </p>

            <div class="mb-10 Inter text-center text-gray-800 uppercase text-shadow-md  font-extrabold text-4xl sm:text-7xl ">
            Featured Video
          </div>
          

            <iframe width="950" height="490" display="flex"  src="https://www.youtube.com/embed/rbo2WOlzTgo" 
                        title="LIBAD NG APUNG IRU SASMUAN 2022" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
            
  
    
  
            
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default HistoryPage;