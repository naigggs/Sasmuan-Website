import React from 'react'
import Hero_BangkungMalapad from '../components/Hero_BangkungMalapad'
import BangkungMalapadImage from "../medias/Places/BangkungMalapadMain.png";
import MangroveIslet from "../medias/Places/MangroveIslet.png";
import BirdSanctuary from "../medias/Places/BirdSanctuary.png";
import Ecotourism from "../medias/Places/Ecotourism.png";
import "../Places.css";

function BangkungMalapad() {
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
                        <h1 class="about-BangkungMalapad-header">Bangkung Malapad</h1>
                        <p>
                            Sasmuan's Bangkung Malapad is a picturesque and culturally rich location nestled in the 
                            heart of Sasmuan. The name itself carries a sense of local charm and uniqueness. The term
                             'Bangkung Malapad' suggests a wide expanse, hinting at perhaps a broad riverbank, open
                              landscape, or a spacious gathering place.</p>
                        <br />
                        <p> This scenic spot is adorned with natural beauty, offering panoramic views of the 
                            surrounding area. Visitors are treated to lush greenery, tranquil waters, and the 
                            vibrant colors of local flora. The location may be a favorite among locals for 
                            leisurely strolls, family picnics, or community events. Culturally, Sasmuan's 
                            Bangkung Malapad may hold significance as a historical landmark or a venue for 
                            traditional festivities. Perhaps it's a site where important cultural events, 
                            festivals, or ceremonies take place, fostering a strong sense of community identity.</p>
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
                            <h3>Mangrove Islet</h3>
                            <p>Discover serenity at Sasmuan's Mangrove Islet – where nature's beauty and cultural charm meet. 🌿 <br /> #BangkungMalapad #SasmuanGem</p>
                        </div>
                    </div>
                    <div class="activities">
                    <img src={BirdSanctuary} />
                        <div class="layer">
                            <h3>Sanctuary of Endangered Birds</h3>

                            <p>Guardians of the sky find refuge in Bangkung Malapad, Sasmuan – a haven for endangered birds. 🦜✨ <br /> #BirdSanctuary #BangkungMalapadWings</p>
                        </div>
                    </div>
                    <div class="activities">
                    <img src={Ecotourism} />
                        <div class="layer">
                            <h3>Ecotourism</h3>
                            <p>Embrace nature's wonders at Bangkung Malapad, Sasmuan – where ecotourism meets enchantment. 🌿✨<br /> #NatureEscape #BangkungMalapadEcotourism</p>
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.459918184391!2d120.61374057487279!3d14.799423772178413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339643633034fe11%3A0xfd117f160e0d1fd!2sSasmuan%20Bangkung%20Malapad%20Critical%20Habitat%20and%20Ecotourism%20Area%20(SBMCHEA)!5e0!3m2!1sen!2sph!4v1699686360277!5m2!1sen!2sph" 
                        width="450" height="488" style={{border:0}} allowfullscreen="" autoplay='1' loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </div>
                    <div class="about-col-2-featured">
                        <iframe width="690" height="488" src="https://www.youtube.com/embed/RFPk5-wpoDI" 
                        title="Bangkung Malapad - Sasmuan, Pampanga | Exploring Pampanga" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>


</div>



  )
}

export default BangkungMalapad