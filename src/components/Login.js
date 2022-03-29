import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/users/login", {
      email,
      password,
    });
    console.log(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  };
  return (
    <section className="docs-main login">
      <div className="grid-1 ">
        <div className="card flex">
          <form onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <div className="form-date ">
              <div className="date-form">
                <div className="form-control flex-login ">
                  <label htmlFor="E-mail">E-mail</label>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="date-form">
                <div className="form-control flex-login">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPass(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="date-form">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
