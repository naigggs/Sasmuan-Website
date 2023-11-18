import React from "react";
import Hero_BangkungMalapad from "../components/Hero_BangkungMalapad";
import BangkungMalapadImage from "../medias/Places/MalusacMain.png";
import MangroveIslet from "../medias/Places/SaintRosary.jpg";
import BirdSanctuary from "../medias/Places/MalusacHighSchool.jpg";
import Ecotourism from "../medias/Places/MalusacEconomy.png";
import "../Places.css";

function Malusac() {
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
              <h1 class="about-BangkungMalapad-header">Barangay Malusac</h1>
              <p>
                Malusac, situated in the municipality of Sasmuan, within the
                province of Pampanga, is a barangay with a population of 2,461
                according to the 2020 Census. This figure accounts for 8.46% of
                Sasmuan's overall population.
              </p>
              <br />
              <p>
                {" "}
                The Lepanto Festival held in Malusac, Sasmuan, Pampanga, is an
                annual celebration dedicated to honoring the patron saint of
                fishermen, St. Rosary. Typically held in December, this festival
                is renowned for its lively and colorful festivities. The event
                features a fluvial procession where the beautifully adorned
                image of St. Rosary is paraded along the rivers of Sasmuan on a
                boat. Both locals and visitors come together to engage in a
                variety of activities, including street dancing, parades, and
                religious ceremonies. This vibrant and culturally significant
                celebration underscores the community's deep devotion to St.
                Rosary and its reliance on the sea for sustenance. If you ever
                have the opportunity to participate, it promises to be a sensory
                delight!
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
                <h3>Saint Rosary</h3>
                <p>
                  Santo Rosario Parish of the Roman Catholic Archdiocese of San
                  Fernando (Pampanga) was established on 1985. It is located in
                  Brgy. Malusac, Municipality of Sasmuan, Province of Pampanga.
                  The Parish Fiesta is celebrated every 3rd Sunday of October.
                </p>
              </div>
            </div>
            <div class="activities">
              <img src={BirdSanctuary} />
              <div class="layer">
                <h3>Malusac High School</h3>

                <p>
                  Malusac High School is located in Sasmuan, Pampanga,
                  Philippines. It's an educational institution that plays a
                  crucial role in providing secondary education to students in
                  the area. Like many high schools, it likely offers a diverse
                  range of academic subjects and extracurricular activities to
                  enrich the students' learning experience.
                </p>
              </div>
            </div>
            <div class="activities">
              <img src={Ecotourism} />
              <div class="layer">
                <h3>Malusac Economy</h3>
                <p>
                  Fishing and farming are traditionally important economic
                  activities in Malusac, given its proximity to the coast. The
                  area may also be influenced by the economic activities of
                  nearby towns and cities.
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8718.066570304696!2d120.61658042674023!3d14.86437775942563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33965c827134ee4f%3A0x19c5e1a28776a25d!2sMalusac%2C%20Sasmuan%2C%20Pampanga!5e1!3m2!1sen!2sph!4v1699708857447!5m2!1sen!2sph" 
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
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Frayvin.garcia%2Fvideos%2F1234760063847648%2F&show_text=false&width=560&t=0"
                title="Bangkung Malapad - Sasmuan, Pampanga | Exploring Pampanga"
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

export default Malusac;
