import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase';
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home"
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signupInfo, setSignupInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setSignupInfo({
      ...signupInfo,
      [name]: value,
    });
  };

  const handleSignup = (event) => {
    createUserWithEmailAndPassword(auth , signupInfo.email , signupInfo.password).then(userInformation =>{
      navigate(<Home/>);
    }).catch(error => {
      console.log(error.code , error.errormessage);
    })
  };

  return (
    <div className="signup container mx-auto py-10 px-10 text-center">
      <h2 className="section-title uppercase font-bold space-font text-2xl mt-10 mb-10 tracking-wider">
        Create Account
      </h2>

      <div className="signup-form">
        <form>
          <div className="form-group mb-4">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={signupInfo.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={signupInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={signupInfo.password}
              onChange={handleChange}
              required
            />
          </div>
        </form>
      </div>

      <div className="signup-actions flex justify-center items-center py-8">
        <button
          className="signup-button bg-rose-500 py-3 px-8 uppercase font-medium text-rose-50 tracking-widest hover:bg-rose-600 duration-300"
          onClick={handleSignup}
        >
          Create
        </button>
        
        <p className="mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-rose-500">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
