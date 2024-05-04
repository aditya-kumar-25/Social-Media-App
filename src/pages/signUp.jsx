import React, { useState } from "react";
import { images } from "../assets/images";
import "../App.css"; // Add this line
import { Link } from "react-router-dom";

function Login() {
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
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 min-h-[100vh]">
      <img
        src={images.moonImage}
        className="hidden md:flex h-full col-span-2"
      />

      <div className="col-span-4 lg:col-span-3 h-full px-12 flex flex-col justify-center gap-7">
        <header>
          <p className="font-[600] text-3xl">Create Your Account</p>
        </header>

        <div>
          <button className="flex items-center justify-center gap-3 border bg-black hover:bg-black/80 text-white rounded-full px-4 py-3 w-full">
            <img src={images.googleLogo} height={20} width={30} />
            <p className="font-semibold">Sign Un with Google</p>
          </button>
          <div className="flex justify-between gap-3 items-center my-7">
            <div className="h-[1px] bg-gray-300 w-full"></div>
            <p className="whitespace-nowrap text-secondary-text">or</p>
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>
          <button className="flex items-center justify-center gap-3 border border-gray-300 rounded-full px-4 py-3 w-full">
            <p className="font-semibold">Continue with email</p>
          </button>
        </div>

        <p className="text-secondary-text">
          By creating an account you agree with our{" "}
          <Link to="/terms-of-service" className="underline cursor-pointer">
            Terms of Service
          </Link>
          ,{" "}
          <Link to="/privacy-policy" className="underline cursor-pointer">
            Privacy Policy
          </Link>
          , and our default{" "}
          <Link
            to="/settings/notifications"
            className="underline cursor-pointer"
          >
            Notification Settings
          </Link>
          .
        </p>

        <p className="text-center mt-3 text-secondary-text">
          {`Don't have an account?`}
          <Link to={"/sign-in"} className="underline ml-2">
            {"Sign In"}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
