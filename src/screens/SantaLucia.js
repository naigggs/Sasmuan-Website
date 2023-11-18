import React from "react";
import Hero_BangkungMalapad from "../components/Hero_BangkungMalapad";
import BangkungMalapadImage from "../medias/Places/SantaLuciaMain.jpg";
import MangroveIslet from "../medias/Places/Kuraldal.png";
import BirdSanctuary from "../medias/Places/SantaLucia.jpg";
import Ecotourism from "../medias/Places/Population.png";
import "../Places.css";

function SantaLucia() {
  return (
    <div className="body">
      <Hero_BangkungMalapad />

      <div class="aboutBangkungMalapad">
        <div class="container-10 ">
          <div class="row">
            <div class="about-col-1">
              <img src={BangkungMalapadImage} />
            </div>
            <div class="about-col-2">
              <h1 class="about-BangkungMalapad-header">Barangay Santa Lucia</h1>
              <p>
                Santa Lucia, previously known as Poblacion, is a barangay
                located in the municipality of Sasmuan, Pampanga. According to
                the 2020 Census, its population was 3,538, accounting for 12.17%
                of Sasmuan's total population.
              </p>
              <br />
              <p>
                {" "}
                The Santa Lucia Parish Church in Sasmuan is the province's first
                church built by Augustinian priests. It's right next to the Río
                Grande, an old waterway connecting Pampanga to Manila Bay.
                Constructed by Jose Duque in the 17th century, the church was
                rebuilt in the early 1800s and later reinforced by Toribio
                Fanjul in 1884.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="gallerybm-2 mt-[-50px] ">
        <div class="container-10">
          <h1 class="gallerybm-header">GALLERY</h1>
          <div class="gallerybm-activities">
            <div class="activities">
              <img src={MangroveIslet} />
              <div class="layer">
                <h3>Kuraldal</h3>

                <p>
                  The "Kuraldal" in St. Lucy, Sasmuan, Pampanga, is a festive
                  religious celebration dedicated to honoring St. Lucy. It
                  typically involves lively processions with music, dance, and
                  community participation. The event serves as a cultural and
                  religious expression, bringing the community together to
                  celebrate their faith and heritage.
                </p>
              </div>
            </div>
            <div class="activities">
              <img src={BirdSanctuary} />
              <div class="layer">
                <h3>Santa Lucia</h3>
                <p>
                  In many places, including the Philippines, St. Lucy's feast
                  day is celebrated with religious processions, prayers, and
                  various cultural events. If Santa Lucia in Sasmuan has a
                  church dedicated to St. Lucy, it's likely that the community
                  celebrates her feast day with devotion and festive activities.
                </p>
              </div>
            </div>
            <div class="activities">
              <img src={Ecotourism} />
              <div class="layer">
                <h3>Population</h3>
                <p>
                  The population of Santa Lucia increased from 2,726 in 1990 to
                  3,538 in 2020, marking a growth of 812 individuals over a span
                  of 30 years. The most recent census data from 2020 indicates a
                  positive growth rate of 0.29%, representing an addition of 48
                  people compared to the previous population of 3,490 in 2015.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="featured mt-[-50px]">
        <div class="container-10 ">
          <h1 class="gallerybm-header mb-[50px]">FEATURED</h1>
          <div class="row-featured">
            <div class="about-col-1-featured">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1927.4961424576222!2d120.61746233237663!3d14.937523195785202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396593455066c31%3A0x4fef4dd9ab976ada!2sSanta%20Lucia%2C%20Sasmuan%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1699712376041!5m2!1sen!2sph width="
                width="450"
                height="488"
                style={{ border: 0 }}
                allowfullscreen=""
                autoplay="1"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
            <div class="about-col-2-featured">
              <iframe
                width="690"
                height="488"
                src="https://www.youtube.com/embed/uPlg43FFNs8?si=6L_X85KLIN9sC1eC"
                title="LIBAD NG APUNG IRU SASMUAN 2022"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SantaLucia;
