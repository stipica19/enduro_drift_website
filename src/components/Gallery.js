import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import ReactPaginate from "react-paginate";
const AboutUS = () => {
  const [data, setData] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);

  const photoPerPage = 6;
  const pagesVisited = pageNumber * photoPerPage;

  const displayPhoto = data
    .slice(pagesVisited, pagesVisited + photoPerPage)
    .map((user, index) => {
      return (
        <>
          {" "}
          <div key={user._id}>
            <img
              src={`http://localhost:5000/${user.image}`}
              alt={user.image}
              onClick={() => handleClick(user, index)}
            />
          </div>
          )
        </>
      );
    });

  const pageCount = Math.ceil(data.length / photoPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const getPhotos = async () => {
    try {
      const data = await axios.get("http://localhost:5000/api/index/getPhoto");
      console.log(data.data);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    console.log(item.image);
    setClickedImg(item.image);
  };

  const handelRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].image;
      console.log(newUrl);
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    <section className="docs-main gallery">
      <div className="grid-1 container">
        <div className="card flex">
          <h1>GALLERY</h1>
        </div>
        <div className="card flex">
          <div className="grid-inner">
            <div className="ga">
              <div className="grid-container">{displayPhoto}</div>
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
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        pageRangeDisplayed={3}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        marginPagesDisplayed={1}
      />
    </section>
  );
};

export default AboutUS;
