import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const [clicked, setClicked] = useState("rez");
  const [reviews, setReviews] = useState([]);
  const [applys, setApplys] = useState([]);

  useEffect(() => {
    const getApplys = async () => {
      const data = await axios.get("http://localhost:5000/api/apply");
      setApplys(data.data);
      console.log(data.data);
    };

    const getReview = async () => {
      const data = await axios.get("http://localhost:5000/api/guestbook");
      setReviews(data.data);
      console.log(data.data);
    };

    getApplys();
    getReview();
  }, []);

  const handleSubmit = (e, index, id) => {
    console.log(index);
    const vis = reviews.filter((rev) => rev._id === id);
    const visible = !vis[0].isVisible;
    let newArr = [...reviews];
    console.log((newArr[index].isVisible = visible));

    axios.put(`http://localhost:5000/api/guestbook/${id}`, newArr[index]);
    setReviews(newArr);
  };
  return (
    <section className="docs-main admin">
      <div className="grid-2 admin-grid ">
        <div className="card flex">
          <div className="card bg-light p-3">
            <h3 className="my-2">MENU</h3>
            <nav>
              <ul>
                <li>
                  <button
                    className="btn btn-outline"
                    onClick={() => setClicked("rez")}
                  >
                    Evidencija rezervacija
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-outline"
                    onClick={() => setClicked("book")}
                  >
                    Evidencija guestbook-a
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-outline"
                    onClick={() => setClicked("photo")}
                  >
                    Dodaj sliku u Galeriju
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn-outline"
                    onClick={() => setClicked("video")}
                  >
                    Dodaj video u Galeriju
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="card flex">
          {clicked === "rez" ? (
            <table>
              <thead>
                <tr>
                  <th>TOUR NUMBER</th>
                  <th>TOUR TYPE</th>
                  <th>NAME </th>
                  <th>ADDRESS </th>
                  <th>EMAIL</th>
                  <th>MOB</th>
                  <th>NUMBER PERSON</th>
                  <th>Detaljnije</th>
                </tr>
              </thead>
              <tbody>
                {applys.map((apply) => (
                  <tr key={apply._id}>
                    <td>{apply.tour_number.tour_number}</td>
                    <td>{apply.tour_type}</td>
                    <td>{apply.name}</td>
                    <td>{apply.address}</td>
                    <td>{apply.email}</td>
                    <td>{apply.mobitel}</td>
                    <td>{apply.number_person}</td>
                    <td>
                      <Link to={`/admin-apply/${apply._id}`}>Detaljnije</Link>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>101</td>
                  <td>TOUR 1</td>
                  <td>MLADEN</td>
                  <td>Uskopljle,BIH </td>
                  <td>lovendale0@w3.org</td>
                  <td>063542702</td>
                  <td>6</td>
                  <td>
                    <Link to="/admin-apply/2">Detaljnije</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : clicked === "book" ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th>NAME AND SURNAME</th>
                    <th>CITY</th>
                    <th>E-MAIL </th>
                    <th>MESSAGE</th>
                    <th>VIDLJIVO</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review, index) => (
                    <tr key={review._id}>
                      <td>{review.name}</td>
                      <td>{review.email}</td>
                      <td>{review.city}</td>
                      <td>{review.message}</td>
                      <td>
                        <input
                          type="checkbox"
                          name={review.name}
                          id="vidiljvo"
                          checked={review.isVisible}
                          onChange={(e) => handleSubmit(e, index, review._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : clicked === "photo" ? (
            <div>
              <h4>Dodaj sliku u galeriju</h4>
              <form>
                <input type="file" />
                <input
                  type="submit"
                  value="SPREMI"
                  className="btn btn-outline"
                />
              </form>
            </div>
          ) : (
            <div>
              <h4>Dodaj video u galeriju</h4>
              <form>
                <input type="text" />
                <input
                  type="submit"
                  value="SPREMI"
                  className="btn btn-outline"
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
