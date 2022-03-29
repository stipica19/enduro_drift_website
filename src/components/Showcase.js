import React from "react";
import { Link } from "react-router-dom";
import SlidingText from "./SlidingText";

const Showcase = () => {
  return (
    <section className="showcase">
      <SlidingText />
      <div className="container grid">
        <div className="showcase-text">
          <h1>
            ENDURO <span>DRIFT</span> BOSNIEN
          </h1>
          <p>
            <span>DRIFT</span> ON LIFE IS SHORT
          </p>
          <div className="date-form">
            <Link to="/apply">
              <input
                type="submit"
                value="BOOK NOW"
                className="btn btn-primary"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="poderano"></div>
    </section>
  );
};

export default Showcase;
