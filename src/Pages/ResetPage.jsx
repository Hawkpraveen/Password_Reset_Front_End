import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPage = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://password-reset-back-end-xxzi.onrender.com/api/reset-password/${id}/${token}`,
        { password, confirmPassword }
      );
      toast.success(response.data.message);
      response.then(navigate("/login-user"));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    
      <div className="d-flex justify-content-center align-items-center container mt-5">
        <div className="bg-white p-3 mt-5 card">
        <legend className="fs-2 text-center ">
          <span className=" text-info"> Demo App</span>
        </legend>
           <legend className="fs-2 text-center ">
          <strong>Reset Password </strong>
        </legend>
          <form onSubmit={handleSubmit}>
            <div  className="mb-3 text-center col-12 col-md-12 col-sm-12 d-flex justify-content-center pt-2 fs-4">
            <div className="col-12 col-md-9 col-sm-12 ">
              <label htmlFor="password" className="form-label">
                <strong>New Password</strong>
              </label>
              <input
                type="password"
                name="password"
                className="form-control mt-2 fs-5"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            </div>

            <div className="mb-3 text-center col-12 col-md-12 col-sm-12 d-flex justify-content-center pt-2 fs-4">
            <div className="col-12 col-md-9 col-sm-12">
              <label htmlFor="password" className="form-label">
                <strong>Confirm Password</strong>
              </label>
              <input
                type="password"
                name="confirm password"
                className="form-control mt-2 fs-5"
                id="password"
                placeholder="Enter Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            </div>
            <div className="col-12 col-md-12 col-sm-12 d-flex justify-content-center mt-4 mb-3">
          <button type="submit" className="btn btn-primary col-md-4 col-sm-4 col-8">
            Send
          </button>
          </div>
          </form>
        </div>
      </div>
    
  );
};

export default ResetPage;
