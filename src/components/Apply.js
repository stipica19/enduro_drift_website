import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import slika from "../images/IMG_20220211_093337_940.jpg";
const Apply = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const options = [
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
  return (
    <section className="docs-main apply">
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

      <div className="grid-1 container">
        <div className="card flex"></div>
        <div className="card flex">
          <div className="form card">
            <form>
              <div className="form-date grid">
                {" "}
                <div className="date-form">
                  <label htmlFor="FROM (DATE)">FROM (DATE)</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="date-form">
                  <label htmlFor="UNTIL (DATE)">UNTIL (DATE)</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="date-form">
                  <div className="form-control ">
                    <label htmlFor="NAME AND SURNAME">NAME AND SURNAME</label>
                    <input type="text" name="name" required />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="ADDRESS">ADDRESS</label>
                    <input type="text" name="ADDRESS" required />
                  </div>
                </div>
                <div className="date-form">
                  {" "}
                  <label htmlFor="DATE OF BIRTH">DATE OF BIRTH</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="TEL/MOB">TEL/MOB</label>
                    <input type="text" name="TEL/MOB" required />
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
                    <label htmlFor="RATE YOUR SKILLS">RATE YOUR SKILLS</label>
                    <select>
                      {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="NUMBER OF PERSONS">NUMBER OF PERSONS</label>
                    <input type="text" name="number_person" required />
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
    /* <section className="docs-main">
      <div className="container grid">
        <div className="slika-apply">
          <img src={slika} alt="" />
        </div>
        <div className="docs-apply flex">
          <div className="form card">
            <h3>Apply for a Motorcycle Tour</h3>
            <form>
              <div className="form-date grid">
                {" "}
                <div className="date-form">
                  <label htmlFor="FROM (DATE)">FROM (DATE)</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="date-form">
                  <label htmlFor="UNTIL (DATE)">UNTIL (DATE)</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="NAME AND SURNAME">NAME AND SURNAME</label>
                    <input type="text" name="name" required />
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="ADDRESS">ADDRESS</label>
                    <input type="text" name="ADDRESS" required />
                  </div>
                </div>
                <div className="date-form">
                  {" "}
                  <label htmlFor="DATE OF BIRTH">DATE OF BIRTH</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="TEL/MOB">TEL/MOB</label>
                    <input type="text" name="TEL/MOB" required />
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
                    <label htmlFor="RATE YOUR SKILLS">RATE YOUR SKILLS</label>
                    <select>
                      {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="date-form">
                  <div className="form-control">
                    <label htmlFor="NUMBER OF PERSONS">NUMBER OF PERSONS</label>
                    <input type="text" name="number_person" required />
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
    </section>*/
  );
};

export default Apply;
