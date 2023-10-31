import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import Hero from "../components/Hero";

function LandingPage() {
  return (
    <div>
      <Hero />
      <div class="Inter p-5 flex flex-col justify-center items-center">
        <div class="Inter text-center text-gray-800 uppercase text-shadow-md  font-extrabold text-4xl sm:text-7xl">
          Sasmuan's Rich Tapestry
        </div>
        <div class="bg-white rounded-lg mx-auto p-4 max-w-screen-md sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <p class="text-gray-700 text-lg my-5">
            Through the captivating town of Sasmuan, nestled in the heart of
            Pampanga, Philippines. Immerse yourself in the rich culture,
            stunning landscapes, and vibrant local life that make Sasmuan a
            truly unique destination.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-white rounded-lg p-3">
              <h3 class="text-lg font-semibold text-gray-700">
                Cultural Delights
              </h3>
              <p class="text-gray-600">
                Delve into Sasmuan's history and traditions as you wander
                through its charming streets. Discover centuries-old churches,
                vibrant festivals, and a warm-hearted community eager to share
                their heritage.
              </p>
            </div>

            <div class="bg-white rounded-lg p-3">
              <h3 class="text-lg font-semibold text-gray-700">
                Natural Wonders
              </h3>
              <p class="text-gray-600">
                Be awe-inspired by the breathtaking beauty of Sasmuan's natural
                landscapes. From serene rice fields to lush mangrove forests,
                there's no shortage of stunning scenery to explore.
              </p>
            </div>

            <div class="bg-white rounded-lg p-3">
              <h3 class="text-lg font-semibold text-gray-700">
                Gastronomic Adventures
              </h3>
              <p class="text-gray-600">
                Indulge in the flavors of Pampanga with Sasmuan's delectable
                cuisine. From savory sisig to mouthwatering halo-halo, your
                taste buds are in for a treat.
              </p>
            </div>

            <div class="bg-white rounded-lg p-3">
              <h3 class="text-lg font-semibold text-gray-700">
                Local Artistry
              </h3>
              <p class="text-gray-600">
                Immerse yourself in the local arts and crafts scene, where you
                can witness skilled artisans creating intricate works that
                reflect the soul of Sasmuan.
              </p>
            </div>
          </div>

          <p class="text-gray-700 text-lg my-5">
            Whether you're an avid traveler or a curious explorer, our "About
            This Trip" section is your gateway to uncovering the hidden gems and
            unforgettable experiences that await you in Sasmuan, Pampanga,
            Philippines. Join us as we embark on this virtual adventure
            together!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
