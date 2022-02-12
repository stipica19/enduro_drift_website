import React from "react";
import poderano from "../images/poderano.png";
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
        <div data-aos="fade-right" className="card-item card">
          <div className="card-image">
            <img
              src="https://www.endurodriftbosnien.com/images/m3.jpg"
              alt="enduro drift"
            />
          </div>
          <div className="card-text">
            <h2>TOUR 1</h2>
            <p>
              - 3 days
              <br /> - 340 € (with your motorcycle)
              <br /> - 640 € (rent a motorcycle)
              <br /> - included in the price: breakfast, lunch in nature, guide
              <br /> - additional payment: equipment rent, motorcycle wash,
              equipment wash, fuel
            </p>
          </div>
          <div className="card-stats">
            <input type="submit" value="BOOK NOW" className="btn btn-outline" />
          </div>
        </div>
        <div data-aos="fade-left" className="card-item card">
          <div className="card-image">
            <img
              src="https://www.endurodriftbosnien.com/images/m2.jpg"
              alt="enduro drift"
            />
          </div>
          <div className="card-text">
            <h2>TOUR 2</h2>
            <p>
              - 4 days <br />
              - 440 € (with your motorcycle) <br />
              - 840 € (rent a motorcycle) <br />
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
            <img
              src="https://www.endurodriftbosnien.com/images/m1.jpg"
              alt="enduro drift"
            />
          </div>
          <div className="card-text">
            <h2>TOUR 3</h2>
            <p>
              - 5 days
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
