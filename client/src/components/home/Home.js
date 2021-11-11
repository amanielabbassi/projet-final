import React from "react";
import "./home.css";

function Home() {
  return (
    <div class="container">
        
      <div class="titular">
        <img
          src="https://designinghealthycommunities.org/wp-content/uploads/2020/03/shutterstock_1343893241-scaled.jpg"
          class="bg"
        />

        <p class="tagline">Health. Connect. Consultation.</p>
        <p class="subtitle">Join us to be a part of a community</p>
      </div>
      <div class="context">
        <br />
        <br />
        <h1>WHY CONSULT A NUTRITIONIST?</h1>
        <center>
          <p class="line"></p>
        </center>
        <p>
          Overweight, bad eating habits, health problems and food allergies,<br/>
          these are problems that can affect anyone in the world.
        </p>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div class="gallery">
        <h1>With Nutrition ....</h1>
        <div class="grid">
          <div>
          <img src="https://cdn.med.tn/img/step1.svg" />
          <p>Get quick access to your doctor</p>
          </div>
         <div>
         <img src="https://cdn.med.tn/img/step2.svg" />
         <p>Make an appointment online at any time</p>
         </div>
       <div>   <img src="https://cdn.med.tn/img/step3.svg" />
       <p>Receive personalized reminder SMS / email</p></div>
          
        </div>
        <footer class="footer_banner">
            <div>
<h1>About Nutrition</h1>
<p>Become a healthier you. Schedule your appointment today!
<br/>
Phone: (401) 308-5531 <br/>
Email: nutrition@gmail.com</p> </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;