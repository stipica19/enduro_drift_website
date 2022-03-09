import React from "react";
import Map from "./Map";
const location = {
  address: "ENDURO DRIFT",
  lat: 43.937859851516265,
  lng: 17.57804456819443,
};
const Contact = () => {
  return (
    <section className="docs-main contact">
      <div className="grid-2 ">
        <div className="card flex">
          <Map location={location} zoomLevel={17} />
        </div>
        <div className="card flex">
          <div className="form card">
            <h1>CONTACT US</h1>
            <p>
              Mladen Brnas,
              <br /> Silvija Strahimira Kranjčevića,
              <br /> Gornji Vakuf-Uskoplje,
              <br />
              Bosnia and Herzegovin, <br />
              Phone: +387 63 136 095
              <br /> E-mail: endurodriftbosnien@gmail.com
            </p>
            <form>
              <div className="form-date">
                {" "}
                <div className="date-form">
                  <div className="form-control ">
                    <label htmlFor="NAME AND SURNAME">NAME AND SURNAME</label>
                    <input type="text" name="name" required />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name="email" required />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="subject">SUBJECT</label>
                    <input type="text" name="subject" required />
                  </div>
                </div>
              </div>
              <div className="date-form">
                <label htmlFor="message">YOUR MESSAGE</label>
                <div className="form-control">
                  <textarea name="message" id="" cols="60" rows="5"></textarea>
                </div>
              </div>
              <div className="date-form">
                <input type="submit" value="Send" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
