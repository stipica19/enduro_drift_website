import React from "react";
import About from "./About";
import BestEnduro from "./BestEnduro";
import Motors from "./Motors";
import Showcase from "./Showcase";
import Tour from "./Tour";
import YouTube from "./YouTube";

const Home = () => {
  return (
    <div>
      {" "}
      <Showcase />
      <About />
      <Tour />
      <BestEnduro />
      <YouTube />
      <Motors />
    </div>
  );
};

export default Home;
