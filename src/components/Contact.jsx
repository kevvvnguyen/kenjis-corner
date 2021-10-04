import React from "react";
import Kevin_Contact from '../photos/Kevin_Contact.jpg';

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={Kevin_Contact}
              alt="Kevin Nguyen"
            />
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              My dad built me this website! He is a Software Engineer learning ReactJS. He has
              his MS in Software Engineering and a BS in Computer Science from California State University, Fullerton and
              University of California, Riverside respectively. 
              
              Here is his <a href="https://www.linkedin.com/in/kevin-nguyen-810a85113/" target="_blank" rel="noreferrer">LinkedIn</a>!
              Contact him with job opportunities <a href="mailto: kevinknguyen24@gmail.com">here</a>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;