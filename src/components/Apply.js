import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
import moment from "moment";
import ToastBar from "./ToastBar";
const Apply = () => {
  const options = [
    {
      label: "-",
      value: "",
    },
    {
      label: "Total beginner",
      value: "TotalBeginner",
    },
    {
      label: "Beginner",
      value: "beginner",
    },
    {
      label: "Hobby",
      value: "hobby",
    },
    {
      label: "Advanced",
      value: "advanced",
    },
    {
      label: "Professional",
      value: "professional",
    },
  ];
  const travelingOption = [
    {
      label: "-",
      value: "",
    },
    {
      label: "Car",
      value: "car",
    },
    {
      label: "Plane",
      value: "plane",
    },
  ];

  const [tour_type, setSelectedOption] = useState("Tour 1");
  const [date_of_birth, setSBirthDay] = useState(new Date());
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobitel, setMobitel] = useState("");
  const [email, setEmail] = useState("");
  const [skill, setSkill] = useState("");
  const [number_person, setNumberPerson] = useState("");
  const [message, setMessage] = useState("");
  const [traveling, setTraveling] = useState("");
  const [tour_number, setTourNumber] = useState("");
  const [rentaBike, setRentaBike] = useState(false);
  const [accept, setAccept] = useState(false);
  const [termine, setTermine] = useState([]);
  const [loading, setLoading] = useState(false);
  const snackbarRef = useRef(null);
  const [notification, setNotification] = useState({
    message: "",
    success: false,
  });

  const getTermine = async () => {
    const data = await axios.get("http://localhost:5000/api/tours/");
    setTermine(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getTermine();
  }, [notification]);

  const radioTour = (event) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };
  const handeleRentaBike = () => {
    console.log(rentaBike);
    setRentaBike(!rentaBike);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(skill);
    console.log(traveling);

    try {
      if (accept) {
        setLoading(true);
        const { data } = await axios.post("http://localhost:5000/api/apply", {
          tour_type,
          tour_number,
          name,
          address,
          date_of_birth,
          mobitel,
          email,
          skill,
          number_person,
          traveling,
          rentaBike,
          message,
        });
        setLoading(false);
        console.log(data);
        setNotification(data);
        snackbarRef.current.show();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setNotification(error);
    }
  };
  return (
    <section className="docs-main apply">
      {snackbarRef ? (
        <ToastBar ref={snackbarRef} notification={notification} />
      ) : (
        ""
      )}
      <h1>What you need to do to book enduro tour</h1>
      <div className="container">
        <p>1. Fill in the Reservation form below and send it to us.</p>
        <p>
          {" "}
          2. We will send you an email with all details and confirm availability
          so you’ll be able to start booking your flights.
        </p>
        <p>
          {" "}
          3.As soon as are be ready with flights timetable send it to us for
          final confirmation.
        </p>
        <p>
          {" "}
          4. Within a few hours we will send you an invoice for Reservation
          Deposit of 100 euro (via PayPal or our bank account), the rest of Tour
          price is payable upon your arrival to Bulgaria.
        </p>{" "}
        <p>
          {" "}
          5. After receiving of the Reservation Deposit, we will send you a
          confirmation of your booking.
        </p>
      </div>

      <div className="grid-apply container">
        <div className="card flex">
          <table className="moto-date">
            <thead>
              <tr>
                <th>Tour number</th>
                <th>Check-in date</th>
                <th>Check-out date</th>
                <th>Tour duration</th>
                <th>Tour availability</th>
              </tr>
            </thead>
            <tbody>
              {termine.map((termine) => (
                <tr key={termine._id}>
                  <td>{termine.tour_number}</td>
                  <td>
                    {moment(termine.checkIn_date)
                      .subtract(10, "days")
                      .calendar()}
                  </td>
                  <td>
                    {moment(termine.checkOut_date)
                      .subtract(10, "days")
                      .calendar()}
                  </td>
                  <td>{termine.tour_duration}</td>
                  <td
                    className={`${
                      termine.tour_space === 0 ? "rezervirano" : "slobodno"
                    }`}
                  >
                    {termine.tour_space !== 0
                      ? `Slobodnih mjesta ${termine.tour_space}`
                      : "Rezervirano"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card flex">
          <div className="form card">
            <form onSubmit={handleSubmit}>
              <div className="form-date grid">
                <div className="date-form grid">
                  <label htmlFor="tour">Tour 1</label>
                  <input
                    type="radio"
                    name="Tour 1"
                    value="tour 1"
                    checked={tour_type === "tour 1"}
                    onChange={radioTour}
                  />
                  <label htmlFor="tour">Tour 2</label>
                  <input
                    type="radio"
                    name="Tour 2"
                    value="tour 2"
                    checked={tour_type === "tour 2"}
                    onChange={radioTour}
                  />
                  <label htmlFor="tour">Tour 2</label>
                  <input
                    type="radio"
                    name="Tour 3"
                    value="tour 3"
                    checked={tour_type === "tour 3"}
                    onChange={radioTour}
                  />
                </div>

                <div className="date-form">
                  <div className="form-control ">
                    <label htmlFor="TOUR NUMBER">TOUR NUMBER</label>
                    <input
                      type="text"
                      name="tour_number"
                      required
                      onChange={(e) => setTourNumber(e.target.value)}
                    />
                  </div>

                  <div className="form-control">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control ">
                    <label htmlFor="NAME AND SURNAME">NAME AND SURNAME</label>
                    <input
                      type="text"
                      name="name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="ADDRESS">ADDRESS</label>
                    <input
                      type="text"
                      name="ADDRESS"
                      required
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="NUMBER OF PERSONS">NUMBER OF PERSONS</label>
                    <input
                      type="text"
                      name="number_person"
                      required
                      onChange={(e) => setNumberPerson(e.target.value)}
                    />
                  </div>
                </div>
                <div className="date-form">
                  {" "}
                  <label htmlFor="DATE OF BIRTH">DATE OF BIRTH</label>
                  <DatePicker
                    selected={date_of_birth}
                    onChange={(date) => setSBirthDay(date)}
                  />
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="TEL/MOB">TEL/MOB</label>
                    <input
                      type="text"
                      name="TEL/MOB"
                      onChange={(e) => setMobitel(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="RATE YOUR SKILLS">RATE YOUR SKILLS</label>
                    <select
                      selected
                      onChange={(e) => {
                        setSkill(e.target.value);
                      }}
                    >
                      {options.map((option, index) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="RATE YOUR SKILLS">TRAVELING BY</label>
                    <select
                      selected
                      onChange={(e) => {
                        setTraveling(e.target.value);
                      }}
                    >
                      {travelingOption.map((option, index) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="date-form ">
                  <label htmlFor="Renta a Bike">Renta a Bike </label>
                  <input
                    type="checkbox"
                    name="Renta Bike"
                    value="Renta Bike"
                    checked={rentaBike}
                    onChange={handeleRentaBike}
                  />
                </div>
              </div>
              <div className="date-form">
                <label htmlFor="message">YOUR MESSAGE</label>
                <div className="form-control">
                  <textarea
                    name="message"
                    id=""
                    cols="60"
                    rows="5"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="date-form">
                <div className="form-control">
                  <label htmlFor="ACCEPT TERMS AND CONDITIONS">
                    ACCEPT TERMS AND CONDITIONS
                  </label>
                  <input
                    type="checkbox"
                    name="accept"
                    required
                    onChange={(e) => setAccept(e.target.checked)}
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

export default Apply;
