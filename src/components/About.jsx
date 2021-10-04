import React from "react";
import Kenji_About from '../photos/Kenji_About.jpg';
import "../styles.css";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
            <img
              class="about-photo img-fluid rounded mb-4 mb-lg-0"
              src={Kenji_About}
              alt="Kenji"
            />
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
                I was originally found in the Formosan Mountain area in Taiwan. My rescuer found me and my siblings and
                my mom was nowhere to be found. I was put into a shelter (hence my clipped ear) and there I stayed. No one
                wanted me and I was scheduled to be released back in the streets. My chances of survivial were slim and street
                dogs have a life expectancy of 2-3 years. Life of Hope pulled me out and I stayed with several foster families
                for several months.

                <br />
                <br />

                My mom found me on <a href="https://lifeofhopefoundation.org/about/" target="_blank" rel="noreferrer">Life of Hope</a> at 9 months old! 
                It was love at first sight. I haven't looked back since. I now enjoyed a pampered life with my cat-sister Melon
                in our apartment in SoCal. I enjoy hiking with my parents on the weekends, sitting in the Tesla with a puppuchino, and sleeping in my
                parents bed. It's been a real rags to riches journey for me and I hope to help you and your pup do the same!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;