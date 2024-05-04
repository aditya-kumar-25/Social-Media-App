import React, { useState } from "react";
import { images } from "../assets/images";
import "../App.css"; // Add this line
import { Link } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const forgotPasswordHandler = (e) => {
    e.preventDefault();
    alert("Forgotasdas password clicked");
  };

  const signInHandler = async () => {
    alert("Sign in clicked");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 min-h-[100vh]">
      <img
        src={images.moonImage}
        className="hidden md:flex h-full col-span-2"
      />

      <div className="col-span-4 lg:col-span-3 h-full px-12 flex flex-col justify-center gap-7">
        <header>
          <p className="font-[600] text-3xl">Sign in to your account</p>
        </header>

        <div>
          <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-full px-4 py-3 w-full">
            <img src={images.googleLogo} height={20} width={30} />
            <p className="font-semibold">Sign in with Google</p>
          </button>
          <div className="flex justify-between gap-3 items-center mt-7">
            <div className="h-[1px] bg-gray-300 w-full"></div>
            <p className="whitespace-nowrap text-secondary-text">
              or sign in with email
            </p>
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>
        </div>

        <form className="flex flex-col gap-7" onSubmit={signInHandler}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username-or-email"
              className="font-semibold text-lg"
            >
              Username or Email
            </label>
            <input
              id="username-or-email"
              type="text"
              name="email"
              required
              value={formData.email}
              onChange={changeHandler}
              className="border border-gray-300 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-0 focus:shadow-purple-border hover:shadow-purple-border"
            />
          </div>

          <div className="relative flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold text-lg">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={changeHandler}
              className="border border-gray-300 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-0 focus:shadow-purple-border hover:shadow-purple-border"
            />
            <button
              type="button"
              onClick={forgotPasswordHandler}
              className="underline absolute top-1 right-3"
            >
              Forgot?
            </button>
          </div>

          <div>
            <input
              type="submit"
              value={"Sign In"}
              className="border cursor-pointer border-gray-300 rounded-full px-4 py-3 w-full font-semibold bg-black hover:bg-black/80 text-white"
            />
            <p className="text-center mt-3 text-secondary-text">
              {`Don't have an account?`}
              <Link to={'/sign-up'} className="underline ml-2">{"Sign Up"}</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
