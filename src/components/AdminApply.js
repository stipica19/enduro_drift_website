import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const AdminApply = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:5000/api/apply/" + id
        );
        setReservations(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);
  console.log(reservations);
  return (
    <section className="admin-apply">
      <div className="grid-1">
        <div className="container">
          {loading && <h1>Loading ...</h1>}
          {!loading && (
            <div>
              <p>
                {" "}
                &#9658;TOUR NUMBER : {reservations.tour_number.tour_number}{" "}
              </p>
              <p> &#9658;TOUR TYPE : {reservations.tour_type}</p>
              <p> &#9658;NAME : {reservations.name} </p>
              <p> &#9658;EMAIL : {reservations.email}</p>
              <p> &#9658;ADDRESS : {reservations.address}</p>
              <p> &#9658;DATE OF BIRTH : {reservations.date_of_birth}</p>
              <p> &#9658;MOB : {reservations.mobitel}</p>
              <p> &#9658;SKILL : {reservations.skill}</p>
              <p> &#9658;NUMBER PERSON : {reservations.number_person} </p>
              <p>&#9658;MESSAGE : {reservations.message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminApply;
