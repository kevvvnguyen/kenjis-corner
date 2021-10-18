import React from "react";
import Kenji_Home from '../photos/Kenji_Home.jpg';
import "../styles.css";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
            <img
                class="home-photo img-fluid rounded mb-4 mb-lg-0"
                src={Kenji_Home}
                alt="Kenji Patterson"
            />
          <div class="col-lg-5">
            <h1 class="font-weight-light">Hello!</h1>
            <p>
              My name is Kenji. I am a 1.5 year old Formosan Mountain Dog.
              My parents rescued me in February of 2021. I'm a challenging boy,
              but I hope I can help teach you the importance of rescuing dogs and giving
              them a forever home, but also how to help your rescue dog live a happy
              and fulfilling life. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;