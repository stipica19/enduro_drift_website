import React from "react";
import poderano from "../images/poderano.png";
import slika from "../images/IMG_20220211_093342_106.jpg";
import image1 from "../images/b1-min.png";
import image3 from "../images/b3-min.png";
import image2 from "../images/b2-min.png";
const Tour = () => {
  return (
    <section className="tours bg-light  py-3">
      <div className="tour-poderano">
        <img src={poderano} alt="enduro drift" />
      </div>
      <div className="tour-title">
        {" "}
        <h2 data-aos="zoom-in" className="md text-center  ">
          Suggested Enduro Tours
        </h2>
      </div>

      <div className="container grid">
        <div>
          <h1>TOUR 1</h1>
          <p>- 7 days -5 vozi </p>
          <p> - 690 € (with your motorcycle)</p>
          <p> - 1000 € (rent a motorcycle)</p>
          <p> - included in the price: breakfast, bike wash, guide</p>
          <p>
            {" "}
            - additional payment: equipment rent, motorcycle wash, equipment
            wash, fuel
          </p>
        </div>

        <img
          data-aos="fade-right"
          src={image1}
          alt="enduro drift bosnien"
          className="about_image"
        />
      </div>
      <div className="container grid">
        <img
          data-aos="fade-right"
          src={image2}
          alt="enduro drift bosnien"
          className="about_image"
        />
        <div>
          <h1>TOUR 2</h1>

          <p> - 5 dana boravak- 4 days vozi</p>
          <p> - 500 € (with your motorcycle) </p>
          <p> - 900 € (rent a motorcycle) </p>
          <p> - included in the price: breakfast, guide</p>
          <p>
            {" "}
            - additional payment: equipment rent, motorcycle wash, equipment
            wash, fuel
          </p>
        </div>
      </div>
      <div className="container grid">
        <div>
          <h1>TOUR 3</h1>
          <p> - 5 days -3 vozi </p>
          <p> - 540 € (with your motorcycle) </p>
          <p> - 1040 € (rent a motorcycle) </p>
          <p> - included in the price: breakfast, guide </p>
          <p>
            {" "}
            - additional payment: equipment rent, motorcycle wash, equipment
            wash, fuel
          </p>
        </div>
        <img
          data-aos="fade-right"
          src={image3}
          alt="enduro drift bosnien"
          className="about_image"
        />
      </div>
    </section>
  );
};

export default Tour;
