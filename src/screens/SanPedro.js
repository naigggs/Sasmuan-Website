import React from 'react'
import Hero_BangkungMalapad from '../components/Hero_BangkungMalapad'
import BangkungMalapadImage from "../medias/Places/SanPedroFirst.jpg";
import MangroveIslet from "../medias/Places/SanPedroPlace1.png";
import BirdSanctuary from "../medias/Places/SanPedroPlace2.png";
import Ecotourism from "../medias/Places/SanPedroPlace3.png";
import "../Places.css";

function SanPedro() {
  return (
    <div className='body'>
       <Hero_BangkungMalapad/>

        <div class="aboutBangkungMalapad">
            <div class="container-10 ">
                <div class="row">
                    <div class="about-col-1">
                        <img src={BangkungMalapadImage} />
                    </div>
                    <div class="about-col-2">
                        <h1 class="about-BangkungMalapad-header">San Pedro</h1>
                        <p>
                            San Pedro is a barangay in the municipality of Sasmuan, in the province of Pampanga. 
                            San Pedro is situated at approximately 14.9372, 120.6238, in the island of Luzon. 
                            Elevation at these coordinates is estimated at 7.4 meters or 24.3 feet above mean 
                            sea level. Its population as determined by the 2020 Census was 5,111. This represented 
                            17.58% of the total population of Sasmuan.</p>
                        <br/>
                        <p> The household population of San Pedro in the 2015 Census was 3,210 broken down into 
                            618 households or an average of 5.19 members per household. According to the 2015 Census, 
                            the age group with the highest population in San Pedro is 10 to 14, with 331 individuals. 
                            Conversely, the age group with the lowest population is 80 and over, with 26 individuals.
                            The population of San Pedro grew from 2,618 in 1990 to 5,111 in 2020, an increase of 2,493 
                            people over the course of 30 years. The latest census figures in 2020 denote a positive 
                            growth rate of 10.29%, or an increase of 1,901 people, from the previous population of 
                            3,210 in 2015.</p>
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
                        <h3>San Pedro Arch</h3>
                            <p>San Pedro's Barangay Arch: Gateway to Community, Culture, and Connection. 🌟 <br/> #SanPedroArch #BarangayPride</p>
                        </div>
                    </div>
                    <div class="activities">
                    <img src={BirdSanctuary} />
                        <div class="layer">
                        <h3>Feast Day of San Pedro</h3>
                            <p>A joyous celebration of community, culture, and camaraderie. Join us for a day filled with festivities, traditions, and shared moments of unity. 🎉🌟 <br/> #SanPedroFeast #BarangayCelebration</p>
                        </div>
                    </div>
                    <div class="activities">
                    <img src={Ecotourism} />
                        <div class="layer">
                        <h3>Patron Saint of Barangay San Pedro</h3>
                            <p>Honoring the Patron of our Barangay, Saint Pedro. A beacon of strength, unity, and blessings. 🙏🌟 <br/> #SanPedro #PatronSaint #BarangayDevotion</p>
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7418.396406891869!2d120.61775744699855!3d14.9390106600516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339659316bb38f87%3A0x13039c857f87833f!2sSan%20Pedro%2C%20Sasmuan%2C%20Pampanga!5e1!3m2!1sen!2sph!4v1699688700793!5m2!1sen!2sph" 
                        width="450" height="488" style={{border:0}} allowfullscreen="" autoplay='1' loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </div>
                    <div class="about-col-2-featured">
                        <iframe width="690" height="488" src="https://www.youtube.com/embed/FsCJnMxyEcs" 
                        title="LIBAD NG APUNG IRU SASMUAN 2022" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>


</div>



  )
}

export default SanPedro