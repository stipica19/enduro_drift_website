import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Map from "./Map";
import ToastBar from "./ToastBar";
const location = {
  address: "ENDURO DRIFT",
  lat: 43.937859851516265,
  lng: 17.57804456819443,
};
const Contact = () => {
  const [email, setEmail] = useState("");
  const [notification, setNotification] = useState({
    message: "",
    success: "",
  });
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const snackbarRef = useRef(null);
  const [spamRez, setSpamRez] = useState(0);
  const number1 = useRef(0);
  const number2 = useRef(0);
  let rez = useRef(0);

  useEffect(() => {
    number1.current = Math.floor(Math.random() * 10);
    number2.current = Math.floor(Math.random() * 11);
    rez.current = number2.current + number1.current;
    console.log(number2.current);
    console.log(number1.current);
    console.log("first");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !message || !name) {
      return;
    }
    try {
      if (spamRez === rez.current) {
        setLoading(true);
        const { data } = await axios.post("http://localhost:5000/api/email", {
          email,
          name,
          message,
        });
        setLoading(false);
        console.log(data);
        setNotification(data);
        snackbarRef.current.show();
      } else {
        snackbarRef.current.show();
        setNotification({
          message: "Spam Check is not valid",
          success: false,
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setNotification(error);
    }
  };

  return (
    <section className="docs-main contact">
      {snackbarRef ? (
        <ToastBar ref={snackbarRef} notification={notification} />
      ) : (
        ""
      )}
      <div className="grid-2 ">
        <div className="card flex">
          <Map location={location} zoomLevel={17} />
        </div>
        <div className="card flex">
          <div className="form card">
            <h1>CONTACT US</h1>
            <p>
              Mladen Brnas,
              <br /> Silvija Strahimira Kranj??evi??a,
              <br /> Gornji Vakuf-Uskoplje,
              <br />
              Bosnia and Herzegovin, <br />
              Phone: +387 63 136 095
              <br /> E-mail: endurodriftbosnien@gmail.com
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-date">
                {" "}
                <div className="date-form">
                  <div className="form-control ">
                    <label htmlFor="NAME AND SURNAME">NAME AND SURNAME</label>
                    <input
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="date-form">
                <label htmlFor="message">YOUR MESSAGE</label>
                <div className="form-control">
                  <textarea
                    name="message"
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="date-form">
                <div className="form-control">
                  <label htmlFor="spam">
                    SPAM CHECK {number1.current} + {number2.current}
                  </label>
                  <input
                    type="number"
                    name="spam"
                    onChange={(e) => setSpamRez(Number(e.target.value))}
                    required
                  />
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
