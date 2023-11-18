import React from "react";
import "../TourPage.css";
import tour1 from "../medias/Places Tour Page/MalusacHeader.png";
import tour2 from "../medias/Places Tour Page/tour2.jpg";
import tour3 from "../medias/Places Tour Page/SanPedroFirst.jpg";
import tour4 from "../medias/Places Tour Page/SantaLuciaMain.jpg";
import { Link } from "react-router-dom";
function TourPage() {
  return (
    <html>
      <title>Tour Page</title>
      <head>
        <link rel="stylesheet" href="../CSS/TourPage.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter"
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div class="background-container"></div>
        <div class="overlap-container">
          <img
            src={tour1}
            alt="Overlapping Image"
            class="overlap-image overlap-image1"
          />
          <img
            src={tour2}
            alt="Overlapping Image"
            class="overlap-image overlap-image2"
          />
          <img
            src={tour3}
            alt="Overlapping Image"
            class="overlap-image overlap-image3"
          />
          <img
            src={tour4}
            alt="Overlapping Image"
            class="overlap-image overlap-image4"
          />
        </div>
        <div class="header-1">Tour</div>
        <div class="container-1 mt-10">
          <Link to="/malusac">
            <img src={tour1} class="place-2-img" />
          </Link>
          <div class="subcontainer-1">
            <Link to="/malusac">
              <div class="container-1-header">MALUSAC</div>
            </Link>
            <div class="container-1-description">
              Malusac, situated in the municipality of Sasmuan, within the
              province of Pampanga, is a barangay with a population of 2,461
              according to the 2020 Census. This figure accounts for 8.46% of
              Sasmuan's overall population.
            </div>
          </div>
        </div>

        <div class="container-2">
          <div class="subcontainer-2">
            <Link to="/bangkungmalapad">
              <div class="container-2-header">BANGKUNG MALAPAD</div>
            </Link>
            <div class="container-2-description">
              Sasmuan's Bangkung Malapad is a picturesque and culturally rich
              location nestled in the heart of Sasmuan. The name itself carries
              a sense of local charm and uniqueness. The term 'Bangkung Malapad'
              suggests a wide expanse, hinting at perhaps a broad riverbank,
              open landscape, or a spacious gathering place.
            </div>
          </div>
          <Link to="/bangkungmalapad">
            <img src={tour2} class="place-2-img" />
          </Link>
        </div>

        <div class="container-1">
          <Link to="/sanpedro">
            <img src={tour3} class="place-2-img" />
          </Link>
          <div class="subcontainer-1">
            <Link to="/sanpedro">
              <div class="container-1-header">SAN PEDRO</div>
            </Link>
            <div class="container-1-description">
              San Pedro is a barangay in the municipality of Sasmuan, in the
              province of Pampanga. San Pedro is situated at approximately
              14.9372, 120.6238, in the island of Luzon. Elevation at these
              coordinates is estimated at 7.4 meters or 24.3 feet above mean sea
              level. Its population as determined by the 2020 Census was 5,111.
              This represented 17.58% of the total population of Sasmuan.
            </div>
          </div>
        </div>
        <div class="container-2">
          <div class="subcontainer-2">
            <Link to="/santalucia">
              <div class="container-2-header">SANTA LUCIA</div>
            </Link>
            <div class="container-2-description">
              Santa Lucia, previously known as Poblacion, is a barangay located
              in the municipality of Sasmuan, Pampanga. According to the 2020
              Census, its population was 3,538, accounting for 12.17% of
              Sasmuan's total population.
            </div>
          </div>
          <Link to="/santalucia">
            <img src={tour4} class="place-2-img" />
          </Link>
        </div>
        <div class="container-3">
          <div class="container-3-header">Sasmuan Destinations</div>
          <div class="center">
            <div class="grid-container">
              <div class="grid-item">
                <img src={tour1} alt="Image 1" />
              </div>
              <div class="grid-item">
                <img src={tour2} alt="Image 2" />
              </div>
              <div class="grid-item">
                <img src={tour3} alt="Image 3" />
              </div>
              <div class="grid-item">
                <img src={tour4} alt="Image 4" />
              </div>
              <div class="grid-item">
                <img src={tour1} alt="Image 5" />
              </div>
              <div class="grid-item">
                <img src={tour1} alt="Image 6" />
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="footer-header">Get in touch!</div>
          <div class="footer-container-2">
            <div class="footer-subheader">We’d love to hear from you</div>
            <div class="align-right">
              {/* <a class="contact-us-button" href="#">
                Contact Us
              </a> */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default TourPage;
