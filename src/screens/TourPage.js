import React from 'react'
import '../TourPage.css'
import tour1 from '../medias/Places Tour Page/tour1.jpg'
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
        src="../MEDIAS/tour2.jpg"
        alt="Overlapping Image"
        class="overlap-image overlap-image2"
      />
      <img
        src="../MEDIAS/tour3.jpg"
        alt="Overlapping Image"
        class="overlap-image overlap-image3"
      />
      <img
        src="../MEDIAS/tour3.jpg"
        alt="Overlapping Image"
        class="overlap-image overlap-image4"
      />
    </div>
    <div class="header-1">Tour</div>
    <div class="container-1">
      <img src={tour1} class="place-1-img" />
      <div class="subcontainer-1">
        <div class="container-1-header">PLACE 1</div>
        <div class="container-1-description">
          Embark on a journey of discovery and adventure with our exceptional
          travel experiences. Whether you're seeking the tranquil embrace of
          nature or the vibrant pulse of bustling cities, our curated trips
          offer the perfect blend of exploration and relaxation. Let your
          wanderlust guide you as you immerse yourself in diverse cultures,
          savor local cuisines, and create memories that will last a lifetime.
          Join us in crafting your dream getaway and let the world become your
          playground.
        </div>
      </div>
    </div>

    <div class="container-2">
      <div class="subcontainer-2">
        <div class="container-2-header">PLACE 2</div>
        <div class="container-2-description">
          Embark on a journey of discovery and adventure with our exceptional
          travel experiences. Whether you're seeking the tranquil embrace of
          nature or the vibrant pulse of bustling cities, our curated trips
          offer the perfect blend of exploration and relaxation. Let your
          wanderlust guide you as you immerse yourself in diverse cultures,
          savor local cuisines, and create memories that will last a lifetime.
          Join us in crafting your dream getaway and let the world become your
          playground.
        </div>
      </div>
      <img src={tour1} class="place-2-img" />
    </div>

    <div class="container-1">
      <img src={tour1} class="place-1-img" />
      <div class="subcontainer-1">
        <div class="container-1-header">PLACE 3</div>
        <div class="container-1-description">
          Embark on a journey of discovery and adventure with our exceptional
          travel experiences. Whether you're seeking the tranquil embrace of
          nature or the vibrant pulse of bustling cities, our curated trips
          offer the perfect blend of exploration and relaxation. Let your
          wanderlust guide you as you immerse yourself in diverse cultures,
          savor local cuisines, and create memories that will last a lifetime.
          Join us in crafting your dream getaway and let the world become your
          playground.
        </div>
      </div>
    </div>
    <div class="container-2">
      <div class="subcontainer-2">
        <div class="container-2-header">PLACE 4</div>
        <div class="container-2-description">
          Embark on a journey of discovery and adventure with our exceptional
          travel experiences. Whether you're seeking the tranquil embrace of
          nature or the vibrant pulse of bustling cities, our curated trips
          offer the perfect blend of exploration and relaxation. Let your
          wanderlust guide you as you immerse yourself in diverse cultures,
          savor local cuisines, and create memories that will last a lifetime.
          Join us in crafting your dream getaway and let the world become your
          playground.
        </div>
      </div>
      <img src={tour1} class="place-2-img" />
    </div>
    <div class="container-3">
      <div class="container-3-header">Sasmuan Destinations</div>
      <div class="center">
        <div class="grid-container">
          <div class="grid-item">
            <img src="../MEDIAS/tour1.jpg" alt="Image 1" />
          </div>
          <div class="grid-item">
            <img src="../MEDIAS/tour1.jpg" alt="Image 2" />
          </div>
          <div class="grid-item">
            <img src="../MEDIAS/tour1.jpg" alt="Image 3" />
          </div>
          <div class="grid-item">
            <img src="../MEDIAS/tour1.jpg" alt="Image 4" />
          </div>
          <div class="grid-item">
            <img src="../MEDIAS/tour1.jpg" alt="Image 5" />
          </div>
          <div class="grid-item">
            <img src="../MEDIAS/tour1.jpg" alt="Image 6" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-header">Get in touch!</div>
      <div class="footer-container-2">
        <div class="footer-subheader">We’d love to hear from you</div>
        <div class="align-right"><a class="contact-us-button" href="#">Contact Us</a></div>
      </div>
    </div>
  </body>
</html>

  )
}

export default TourPage