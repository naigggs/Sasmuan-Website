import React from 'react'
import Hero_BangkungMalapad from '../components/Hero_BangkungMalapad'
import BangkungMalapadImage from "../medias/Places/San antonio church.jpeg";
import MangroveIslet from "../medias/Places/sanantoniochurch.jpg";
import BirdSanctuary from "../medias/Places/SanAntonioMarket.jpg";
import Ecotourism from "../medias/Places/San Antonio Padua.jpg";
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
                        <h1 class="about-BangkungMalapad-header">San Antonio</h1>
                        <p>
                        San Antonio is home to a number of historical and cultural 
                            attractions. The barangay is home to the San Antonio Parish Church, 
                            a historic church built in the 18th century. The barangay is also home to the 
                            San Antonio Cultural Center, which houses a collection of artifacts and exhibits
                             that tell the story of the history and culture of San Antonio.</p>
                        <br/>
                        <p> San Antonio is a predominantly agricultural barangay. 
                            The main crops grown in the barangay are rice, corn, and vegetables. 
                            San Antonio is also known for its fishponds. The barangay is a major producer
                             of freshwater fish,
                             such as tilapia and bangus.</p>
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
                        <h3>San Antonio Parish Church</h3>
                            <p>The San Antonio Parish Church is a historic church built in the 18th century. The church is known for its beautiful architecture and its religious significance.e.</p>
                        </div>
                    </div>
                    <div class="activities">
                    <img src={BirdSanctuary} />
                        <div class="layer">
                        <h3>San Antonio Market</h3>

<p> The San Antonio Market is a market where you can buy fresh produce, seafood, and other goods. The market is also a great place to try the local delicacies.</p>
</div>
                    </div>
                    <div class="activities">
                    <img src={Ecotourism} />
                        <div class="layer">
                        <h3>Feast of San Antonio</h3>
                            <p>The feast of San Antonio in Sasmuan, Pampanga, Philippines is a religious and cultural celebration in honor of Saint Anthony of Padua</p>
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
                        <iframe src="https://www.google.com/maps/place/San+Antonio,+Sasmuan,+Pampanga/@14.9045348,120.5678685,9702m/data=!3m2!1e3!4b1!4m6!3m5!1s0x33965c05cdd48b51:0xe13dea8317e48cef!8m2!3d14.9084475!4d120.6142365!16s%2Fg%2F11h14mt93?entry=ttu" 
                        width="450" height="488" style={{border:0}} allowfullscreen="" autoplay='1' loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                    </div>
                    <div class="about-col-2-featured">
                        <iframe width="690" height="488" src="https://youtu.be/1Si5qZF60W8?si=rTX7jomo5kv1lvxg" 
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