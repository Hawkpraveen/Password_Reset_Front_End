import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { username, email, password};  
    await axios
      .post("https://password-reset-back-end-xxzi.onrender.com/api/register-user", payload)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login-user");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });

    setEmail("");
    setPassword("");
    setUsername("");
  };
  return (
    <div className="container form">
      <form onSubmit={handleSubmit} className="card fs-5 p-3">
        <fieldset>
        <legend className="fs-2 text-center ">
            <span className=" text-info"> Demo App</span>
          </legend>
          <legend className="fs-2 text-center ">
            <strong>Create your Account </strong>
            <p className="fs-4 text-secondary">to continue to use app</p>
          </legend>

          {/* user name */}
          <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-1 pt-2">
            <div className="col-12 col-md-9 col-sm-12 ">
              <label htmlFor="username" className="form-label ms-2">
                User Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Enter Your Name"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* email field */}
          <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-1 pt-2">
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
          <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-1 pt-2">
            <div className="col-12 col-md-9 col-sm-12 ">
              <label htmlFor="password" className="form-label ms-2">
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

          {/* register field */}
          <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-4 ">
            <button
              type="submit"
              className="btn btn-primary col-md-6 col-sm-6 col-8"
            >
              Register
            </button>
          </div>

          <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-3 mb-2">
            <p className="px-2"> Already have an account ?</p>

            <Link to="/login-user">click here to Login !</Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
