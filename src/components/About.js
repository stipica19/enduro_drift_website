import React from "react";
import "../App.css";
import mladen from "../images/mladen.jpg";

const About = () => {
  return (
    <section className="features-sub-head bg-light py-3">
      <div className="container grid">
        <div>
          <h1 className="md">TOP ENDURO VACATION</h1>
          <p>
            If you want to run away from stress, escape from everyday life or
            you simply want top Enduro vacation for body and soul with Enduro
            drift Bosnien you are in the right place. Natural beauties of
            mountain landscape and intact nature gives you heaven on Earth. We
            are located in central part of Bosnia and Herzegovinia. Size of
            Central Bosnia is over 3000 km2. Area is filled with streams,
            mountain rivers, lakes, spacious fields and forests. Gornji Vakuf -
            Uskoplje is small quiet town with about 10000 residents, 2,5 hours
            away from Sarajevo. Surrounded by mountains up to a 2100 m above sea
            level. <br />
            All rides can be adapted to your wishes. We are here for you.
          </p>
        </div>

        <img
          data-aos="fade-right"
          src={mladen}
          alt="enduro drift bosnien"
          className="about_image"
        />
      </div>
    </section>
  );
};

export default About;
