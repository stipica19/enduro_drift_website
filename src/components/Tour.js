import React from "react";
import poderano from "../images/poderano.png";
import image1 from "../images/b1-min.png";
import image3 from "../images/b3-min.png";
import image2 from "../images/b2-min.png";
import { Link } from "react-router-dom";

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
          <p>- 7 Tage </p>
          <p> - 690 € (mit eigenem Motorrad)</p>
          <p> - 990 € (mit ein)</p>
          <p> - von samstag bis samstag (mittwoch pausentag)</p>
          <p> - leihmotorrad</p>
          <p> - wasser </p>
          <p> - guide</p>
          <p> - Ausrüstung </p>
          <p> - hotel </p>
          <p> - Motorradwäsche</p>
          <p> - Transport vom Flughafen und zurück </p>

          <div className="date-form">
            <Link to="/apply">
              {" "}
              <input
                type="submit"
                value="BOOK NOW"
                className="btn btn-outline"
              />
            </Link>
          </div>
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

          <p> - 5 Tage </p>
          <p> - 400 € (mit eigenem Motorrad)</p>
          <p> - 700 € (mit ein)</p>
          <p> - von samstag bis samstag (mittwoch pausentag)</p>
          <p> - leihmotorrad</p>
          <p> - wasser </p>
          <p> - guide</p>
          <p> - Ausrüstung </p>
          <p> - hotel </p>
          <p> - Motorradwäsche</p>
          <p> - Transport vom Flughafen und zurück </p>
          <Link to="/apply">
            {" "}
            <input type="submit" value="BOOK NOW" className="btn btn-outline" />
          </Link>
        </div>
      </div>
      <div className="container grid">
        <div>
          <h1>TOUR 3</h1>
          <p> - 3 Tage </p>
          <p> - xxx € (mit eigenem Motorrad)</p>
          <p> - xxx € (mit ein)</p>
          <p> - von samstag bis samstag (mittwoch pausentag)</p>
          <p> - leihmotorrad</p>
          <p> - wasser </p>
          <p> - guide</p>
          <p> - Ausrüstung </p>
          <p> - hotel </p>
          <p> - Motorradwäsche</p>
          <p> - Transport vom Flughafen und zurück </p>
          <Link to="/apply">
            {" "}
            <input type="submit" value="BOOK NOW" className="btn btn-outline" />
          </Link>
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
