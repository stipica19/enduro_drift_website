import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Termine = () => {
  const [termine, setTermine] = useState([]);

  useEffect(() => {
    const getTermine = async () => {
      const data = await axios.get("http://localhost:5000/api/tours/");
      setTermine(data.data);
      console.log(data.data);
    };
    getTermine();
  }, []);

  return (
    <section className="docs-main termine">
      <div className="grid-1 container">
        <div className="card termine-color flex">
          <div className="boja">
            <div>
              <p>Wir haben freie Termine</p>
            </div>
            <div>
              <p> Wir haben keine freie Termine</p>
            </div>
          </div>
        </div>
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
            {termine.map((termine) => (
              <tr key={termine._id}>
                <td>{termine.tour_number}</td>
                <td>
                  {moment(termine.checkIn_date).subtract(10, "days").calendar()}
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
          </table>
        </div>
      </div>
    </section>
  );
};

export default Termine;
