import React, { useState } from "react";
import slika from "../images/mladen.jpg";
import Modal from "./Modal";
import { data } from "../data/images";
const AboutUS = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <section className="docs-main">
      <div className="grid-1 container">
        <div className="card flex">
          <h1>GALLERY</h1>
        </div>
        <div className="card flex">
          <div className="grid-inner">
            <div className="ga">
              <div className="grid-container">
                {data.map((item, index) => (
                  <div key={item.link}>
                    <img
                      src={item.link}
                      alt={item.text}
                      onClick={() => handleClick(item, index)}
                    />
                  </div>
                ))}
              </div>
            </div>

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
    /* <section className="gallery">
      <div className="container grid">
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

export default AboutUS;
