import React from "react";
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
          <div id="meet-our-team" class="Inter text-center text-gray-800 uppercase text-shadow-md font-extrabold text-4xl sm:text-7xl mb-16">
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
              <p class="mt-[2px] text-base text-center">giancabigting1026@gmail.com</p>
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
              <p class="mt-[1px] text-lg text-center italic">Graphic Designer</p>
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

    </div>
  );
}

export default ContactUs;
