import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/67fe6df2-990e-43b5-b458-e58c79cb147c/EG-en-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={submitHandler}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={emailChangeHandler}
                  className="p-3 my-2 bg-gray-700 rouded"
                  type="email"
                  placeholder="Email"
                  value={user?.email}
                />
                <input
                  onChange={passwordChangeHandler}
                  className="p-3 my-2 bg-gray-700 rouded"
                  type="password"
                  placeholder="Password"
                  value={user?.password}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>{" "}
                  <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
