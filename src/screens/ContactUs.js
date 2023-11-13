import React from "react";
import Footer from "../components/Footer";
import HeroContactUs from "../components/Hero_ContactUs";
import Default from "../medias/Profile Pictures/Default.jpg";
import Gian from "../medias/Profile Pictures/GianCabigting.jpg";
import Alaica from "../medias/Profile Pictures/AlaicaPineda.jpg";
import Rijel from "../medias/Profile Pictures/RijelTayag.jpg";
import Albert from "../medias/Profile Pictures/AlbertGonzales.jpg";
import Mark from "../medias/Profile Pictures/MarkCanoy.jpg";

function ContactUs() {
  return (
    <div>
      <HeroContactUs />
      <div class="flex justify-center bg-gradient-to-b from-blue-200 via-blue-400 to-blue-900">
        <div class="bg-white w-1180 h-min rounded-3xl p-20 shadow-md my-10">
          <div
            id="meet-our-team"
            class="Inter text-center text-gray-800 uppercase text-shadow-md font-extrabold text-4xl sm:text-7xl mb-16"
          >
            Meet Our Team
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
            <div class="m-[8px]">
              <img
                class="w-[200px] h-[200px] rounded-full"
                src={Gian}
                alt="Gian Cabigting"
              />
              <div class="text-center text-2xl font-bold mt-[20px]">
                Gian Cabigting
              </div>
              <p class="mt-[1px] text-lg text-center italic">Project Manager</p>
              <p class="mt-[3px] text-sm text-center">0991-348-7830</p>
              <p class="mt-[2px] text-base text-center">
                giancabigting1026@gmail.com
              </p>
            </div>
            <div class="m-[8px]">
              <img
                class="w-[200px] h-[200px] rounded-full"
                src={Alaica}
                alt="Alaica Pineda"
              />
              <div class="text-center text-2xl font-bold mt-[20px]">
                Alaica Pineda
              </div>
              <p class="mt-[1px] text-lg text-center italic">Developer</p>
              <p class="mt-[3px] text-sm text-center">123-456-7890</p>
              <p class="mt-[2px] text-base text-center">gian@example.com</p>
            </div>
            <div class="m-[8px]">
              <img
                class="w-[200px] h-[200px] rounded-full"
                src={Rijel}
                alt="Rijel Tayag"
              />
              <div class="text-center text-2xl font-bold mt-[20px]">
                Rijel Tayag
              </div>
              <p class="mt-[1px] text-lg text-center italic">Developer</p>
              <p class="mt-[3px] text-sm text-center">123-456-7890</p>
              <p class="mt-[2px] text-base text-center">gian@example.com</p>
            </div>
            <div class="m-[8px]">
              <img
                class="w-[200px] h-[200px] rounded-full"
                src={Albert}
                alt="Albert Gonzales"
              />
              <div class="text-center text-2xl font-bold mt-[20px]">
                Albert Gonzales
              </div>
              <p class="mt-[1px] text-lg text-center italic">
                Graphic Designer
              </p>
              <p class="mt-[3px] text-sm text-center">123-456-7890</p>
              <p class="mt-[2px] text-base text-center">gian@example.com</p>
            </div>
            <div class="m-[8px]">
              <img
                class="w-[200px] h-[200px] rounded-full"
                src={Mark}
                alt="Mark Canoy"
              />
              <div class="text-center text-2xl font-bold mt-[20px]">
                Mark Canoy
              </div>
              <p class="mt-[1px] text-lg text-center italic">Analyst</p>
              <p class="mt-[3px] text-sm text-center">123-456-7890</p>
              <p class="mt-[2px] text-base text-center">gian@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-20 p-4 sm:p-8 md:p-12 lg:p-20">
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
          <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 uppercase font-extrabold mb-6 sm:mb-10">
            Our Mission
          </h2>
          <p class="mission">
            Our team is dedicated to showcasing the hidden gems, serene beauty,
            and cultural heritage of Sasmuan, Pampanga. Through our tourism
            website, we aim to inspire travelers to explore this picturesque
            town, fostering sustainable tourism that benefits both visitors and
            the local community. By providing comprehensive information,
            captivating visuals, and engaging stories, we aspire to make Sasmuan
            a must-visit destination, where every traveler can forge
            unforgettable memories while contributing to the preservation of its
            natural wonders and vibrant traditions.
          </p>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
          <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 uppercase font-extrabold mb-6 sm:mb-10">
            Our Vision
          </h2>
          <p class="vision">
            We aspire to be the foremost digital storytellers, weaving
            captivating narratives that illuminate the essence of Sasmuan,
            Pampanga. Our tourism website will serve as an immersive canvas,
            painting a vivid picture of a town where tranquility and tradition
            coalesce, leaving an indelible mark on every traveler's heart. With
            unwavering commitment, our team's vision is to mold the digital
            portal into a conduit of exploration, enlightenment, and
            inspiration, casting Sasmuan, Pampanga, in a spotlight that
            illuminates its unique blend of tranquility and tradition to the
            world.
          </p>
        </div>

        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
          <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 uppercase font-extrabold mb-6 sm:mb-10">
            Our Objectives
          </h2>
          <p class="vision">
            To revamp and enrich the official tourism website of Sasmuan,
            Pampanga, creating a comprehensive and engaging online platform that
            promotes the town's unique cultural heritage, natural attractions,
            and local experiences, thereby increasing visitor engagement,
            boosting tourism, and fostering a sense of pride among both
            residents and tourists.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
