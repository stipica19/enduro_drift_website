import React, { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import Modal from "./Modal";
import { data } from "../data/images";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
const VideoGallery = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [video, setVideo] = useState("inception");
  const [videos, setVideoURL] = useState([
    { name: "https://www.youtube.com/watch?v=Pip7zh_qdA4&t=252s" },
    { name: "https://www.youtube.com/watch?v=5P7YuhN-ycw&t=254s" },
    { name: "https://www.youtube.com/watch?v=S6Gzz3_CZpg&t=79s" },
  ]);

  const handleClick = () => {};

  return (
    <section className="gallery">
      <div className="container grid">
        <div className="grid-inner">
          <div className="item">
            <div className="item-inner">
              <ReactPlayer
                className="react-player"
                key={videos[0].name}
                url={videos[0].name}
                controls={true}
              />
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <ReactPlayer
                className="react-player"
                key={videos[1].name}
                url={videos[1].name}
                controls={true}
              />
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <ReactPlayer
                className="react-player"
                key={videos[2].name}
                url={videos[2].name}
                controls={true}
              />
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <ReactPlayer
                className="react-player"
                key={videos[2].name}
                url={videos[2].name}
                controls={true}
              />
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <ReactPlayer
                className="react-player"
                key={videos[1].name}
                url={videos[1].name}
                controls={true}
              />
            </div>
          </div>
          <div className="item">
            <div className="item-inner">
              <ReactPlayer
                className="react-player"
                key={videos[0].name}
                url={videos[0].name}
                controls={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
