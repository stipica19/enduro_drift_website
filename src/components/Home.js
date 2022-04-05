import React from "react";
import About from "./About";
import BestEnduro from "./BestEnduro";
import Motors from "./Motors";
import Showcase from "./Showcase";
import Tour from "./Tour";
import YouTube from "./YouTube";
import ReactWhatsapp from "react-whatsapp";

import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

const Home = () => {
  return (
    <div className="home">
      <Showcase />
      <FloatingWhatsApp
        position="left"
        size="60px"
        phoneNumber="+38763542702"
        autoOpenTimeout={5000}
        zIndex={10000}
      />
      <About />
      <Tour />
      <BestEnduro />
      <YouTube />
      <Motors />
    </div>
  );
};

export default Home;
