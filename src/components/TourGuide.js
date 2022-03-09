import React, { useState } from "react";

import { imageMladen } from "../data/images";
import Modal from "./Modal";

const TourGuide = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = imageMladen.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = imageMladen[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = imageMladen.filter((item) => {
      return imageMladen.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = imageMladen.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = imageMladen[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = imageMladen.filter((item) => {
      return imageMladen.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <section className="docs-main">
      <div className="grid-1 container">
        <div className="card flex">
          <div className="tour-guide-text">
            <h2>Mladen Brnas - leader of the leadership team</h2>
            <p>
              Head of our guide team is Mladen Brnas, a long-time experienced
              enduro driver. Mladen is a participant of numerous enduro
              competitions in Bosnia and Herzegovina, where he has achieved
              remarkable results. Especially good result left on enduro races in
              Visoko and Tomislavgrad. It is extremely kind and determined to
              give our guests the pleasure of enduro driving.
            </p>
          </div>
        </div>
        <div className="card flex">
          <div className="grid-inner">
            {imageMladen.map((item, index) => (
              <div className="item">
                <div key={index} className="item-inner">
                  <img
                    src={item.link}
                    alt={item.text}
                    onClick={() => handleClick(item, index)}
                  />
                  <h2>{item.text}</h2>
                </div>
              </div>
            ))}

            <div>
              {clickedImg && (
                <Modal
                  clickedImg={clickedImg}
                  handelRotationRight={handelRotationRight}
                  setClickedImg={setClickedImg}
                  handelRotationLeft={handelRotationLeft}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

    /*<section className="gallery tour-guide">
      <div className="container grid">
        <div className="tour-guide-text">
          <h2>Mladen Brnas - leader of the leadership team</h2>
          <p>
            Head of our guide team is Mladen Brnas, a long-time experienced
            enduro driver. Mladen is a participant of numerous enduro
            competitions in Bosnia and Herzegovina, where he has achieved
            remarkable results. Especially good result left on enduro races in
            Visoko and Tomislavgrad. It is extremely kind and determined to give
            our guests the pleasure of enduro driving.
          </p>
        </div>
        <div className="grid-inner">
          {data.map((item, index) => (
            <div className="item">
              <div key={index} className="item-inner">
                <img
                  src={item.link}
                  alt={item.text}
                  onClick={() => handleClick(item, index)}
                />
                <h2>{item.text}</h2>
              </div>
            </div>
          ))}

          <div>
            {clickedImg && (
              <Modal
                clickedImg={clickedImg}
                handelRotationRight={handelRotationRight}
                setClickedImg={setClickedImg}
                handelRotationLeft={handelRotationLeft}
              />
            )}
          </div>
        </div>
      </div>
    </section>*/
  );
};

export default TourGuide;
