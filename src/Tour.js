import React from "react";
import poderano from "../images/poderano.png";
import slika from "../images/IMG_20220211_093342_106.jpg";
import image1 from "../images/b1-min.png";
import image3 from "../images/b3-min.png";
import image2 from "../images/b2-min.png";
const Tour = () => {
  return (
    <section className="languages">
      <div className="tour-poderano">
        <img src={poderano} alt="enduro drift" />
      </div>
      <div className="tour-title">
        {" "}
        <h2 data-aos="zoom-in" className="md text-center  ">
          Suggested Enduro Tours
        </h2>
      </div>

      <div className="card-container">
        <div className="card-item card">
          <div className="card-image">
            <img src={image1} alt="enduro drift" />
          </div>
          <div className="card-text">
            <h2>TOUR 1</h2>
            <p>- 7 days -5 vozi </p>
            <p>
              {" "}
              <p></p> - 690 € (with your motorcycle)
            </p>
            <p> - 1000 € (rent a motorcycle)</p>
            <p> - included in the price: breakfast, bike wash, guide</p>
            <p>
              {" "}
              - additional payment: equipment rent, motorcycle wash, equipment
              wash, fuel
            </p>
          </div>
          <div className="card-stats">
            <input type="submit" value="BOOK NOW" className="btn btn-outline" />
          </div>
        </div>
        <div className="card-item card">
          <div className="card-image">
            <img src={image3} alt="enduro drift" />
          </div>
          <div className="card-text">
            <h2>TOUR 2</h2>
            <p>
              - 5 dana boravak- 4 days vozi <br />
              - 500 € (with your motorcycle) <br />
              - 900 € (rent a motorcycle) <br />
              - included in the price: breakfast, lunch in nature, guide <br />-
              additional payment: equipment rent, motorcycle wash, equipment
              wash, fuel
            </p>
          </div>
          <div className="card-stats">
            {" "}
            <input type="submit" value="BOOK NOW" className="btn btn-outline" />
          </div>
        </div>
        <div className="card-item card">
          <div className="card-image">
            <img src={image2} alt="enduro drift" />
          </div>
          <div className="card-text">
            <h2>TOUR 3</h2>
            <p>
              - 5 days -3 vozi
              <br />
              - 540 € (with your motorcycle)
              <br />
              - 1040 € (rent a motorcycle)
              <br />
              - included in the price: breakfast, lunch in nature, guide
              <br />- additional payment: equipment rent, motorcycle wash,
              equipment wash, fuel
            </p>
          </div>
          <div className="card-stats">
            {" "}
            <input type="submit" value="BOOK NOW" className="btn btn-outline" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tour;
