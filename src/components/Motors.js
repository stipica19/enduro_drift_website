import React from "react";

const Motors = () => {
  return (
    <section className="stats">
      <div className="container">
        <h3 className="stats-heading  text-center">MOTORCYCLES</h3>
        <p>
          We love our bikes. Not only do they look great but also behave so.
        </p>
        <br />
        <p>
          We will provide you with new KTMs model year 2019. The motorcycles are
          very easy to handle and light. The engines are powerful but reliable.
          These machines are built for extreme conditions and trails!
        </p>
        <br />
        As you may have heard, they are the so called "READY TO RACE".
        <p> You can choose between: 👇</p>
        <ul>
          <li>
            <i className="fa fa-motorcycle"></i> BETA 250 2T
          </li>
          <li>
            <i className="fa fa-motorcycle"></i> BETA 300 2T
          </li>
        </ul>
        <div className="grid-2 my-4 grid text-center">
          <div>
            <img
              src="https://www.motostop.eu/productimages/15045/34483.jpg"
              alt=""
            />
            <h3>BETA 250</h3>
          </div>
          <div>
            <img
              src="https://www.motostop.eu/productimages/15045/34483.jpg"
              alt=""
            />
            <h3>BETA 300</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motors;
