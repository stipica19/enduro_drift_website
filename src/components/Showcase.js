import React from "react";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>
            ENDURO <span>DRIFT</span> BOSNIEN
          </h1>
          <p>
            <span>DRIFT</span> ON LIFE IS SHORT
          </p>
          <div className="dugme">
            <p>ENTER RACE</p>
          </div>
        </div>
      </div>
      <div className="icon-bar">
        <FaFacebook size={30} className={"facebook"} />
        <FaInstagram size={30} className={"facebook"} />
        <FaYoutube size={30} className={"facebook"} />
      </div>
      <div className="poderano"></div>
    </section>
  );
};

export default Showcase;
