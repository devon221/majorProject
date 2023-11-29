import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const handleLogin = () => {
    console.log(loginInfo)
    signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
  .then((userCredential) => {
    const user = userCredential.user;
    navigate('/home', { replace: true });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  };

  return (
    <div className="login-container flex justify-center items-center h-screen">
      <div className="login-content text-center">
        <h2 className="section-title uppercase font-bold space-font text-2xl mb-6 tracking-wider">
          Log In
        </h2>

        <div className="login-form">
          <form>
            <div className="form-group mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={loginInfo.email}
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
                value={loginInfo.password}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </div>

        <div className="login-actions">
          <button
            className="login-button bg-rose-500 py-3 px-8 uppercase font-medium text-rose-50 tracking-widest hover:bg-rose-600 duration-300"
            onClick={handleLogin}
          >
            Log In
          </button>
          <p className="mt-3">
            Don't have an account ?{" "}
            <Link to="/" className="text-rose-500">
             Create and then Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
