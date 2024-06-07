import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post(
        "https://password-reset-back-end-xxzi.onrender.com/api/login-user",
        payload
      )
      .then((res) => {
        toast.success(res.data.message);
        setToken(res.data.token);
        navigate("/");
      })

      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container form ">
      <form onSubmit={handleSubmit} className=" fs-5 p-3 card">
        <fieldset>
          <legend className="fs-2 text-center ">
            <span className=" text-info"> Demo App</span>
          </legend>
          <legend className="fs-2 text-center">
            <strong>Sign in</strong>
            <p className="fs-4 text-secondary">to continue to use app</p>
          </legend>

          {/* Email field */}
          <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-5 pt-2">
            <div className="col-12 col-md-9 col-sm-12 ">
              <label htmlFor="email" className="form-label ms-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter Your Mail Id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* password field */}
          <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-4">
            <div className="col-12 col-md-9 col-sm-12 ">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* forgot field */}
          <div className="d-flex justify-content-center mt-1  ">
            <button className="btn">
              <Link to="/forgot-password" className="fs-5">
                Forgot Password?
              </Link>
            </button>
          </div>

          {/* login button field */}
          <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-2 ">
            <button
              type="submit "
              className="btn btn-primary col-md-6 col-sm-6 col-8"
            >
              Login
            </button>
          </div>

          {/*register field */}
          <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-3 mb-2">
            <p className="px-2"> Don't have an account ?</p>

            <Link to="/register-user">click here to Register !</Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;
