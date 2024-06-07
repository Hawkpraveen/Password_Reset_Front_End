import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://password-reset-back-end-xxzi.onrender.com/api/forgot-password`,
        { email }
      );

      response.then(navigate("/"), toast.success(response.data.message));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      navigate("/register-user");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center container mt-5">
      <div className="bg-white p-3 mt-5 card">
        <legend className="fs-2 text-center ">
          <span className=" text-info"> Demo App</span>
        </legend>
        <legend className="fs-2 text-center ">
          <strong>Forgot Password ? 🫢</strong>
          <p className="fs-4 text-secondary">Don't worry I got you ! 😉</p>
        </legend>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-center col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-4 pt-2 fs-4">
            <div className="col-12 col-md-10 col-sm-12 ">
              <label htmlFor="email" className="form-label ">
                <strong>Enter your registered Email address</strong>
              </label>
              <input
                type="email"
                className="form-control mt-2 fs-5"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-4 mb-3">
            <button
              type="submit"
              className="btn btn-primary col-md-6 col-sm-6 col-8"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
