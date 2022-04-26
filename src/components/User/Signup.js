import React from "react";
import { auth } from "./firebase";
import { useState } from "react";
import { toast } from 'react-toastify';
import "../Common/index.css";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { sendSignInLinkToEmail } from "firebase/auth";
import { findUserByEmail } from "../../api/user";

export default function Signup() {
  let [type, updateType] = useState("password");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [lockPath, setLockPath] = useState("M7 11V7a5 5 0 0 1 10 0v4");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast.error("Please enter your credentials");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    let flag = 0;
    await findUserByEmail(email)
      .then(res => {
        console.log("res==>", res)
        if (res.data) {
          toast.error("email already registered");
          flag = 1;
        }
      })
      .catch(err => toast.error(err))

    if (flag === 1) {

      return;
    }

    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    }

    await sendSignInLinkToEmail(auth, email, config);
    toast.success(`Registration link has been send to ${email}`);

    //save user email in local storage
    window.localStorage.setItem('nameForRegistration', name);
    window.localStorage.setItem('emailForRegistration', email);
    window.localStorage.setItem('passwordForRegistration', password);
    //clear the state 
    setEmail("");
    setName("");
    setPassword("");
  };

  function showhide() {
    if (type === "password") {
      updateType("text");
      setLockPath("M7 11V7a5 5 0 0 1 9.9-1");
    } else {
      updateType("password");
      setLockPath("M7 11V7a5 5 0 0 1 10 0v4");
    }
  }

  return (
    <>
      <Navbar />
      <br />
      <div className="m-auto flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Join us now
        </div>
        <div className="self-center mb-6 text-xl font-light text-gray-800 dark:text-white">
          Enter your credentials to get access account
        </div>
        <div className="mt-8">
          <form onSubmit={handleSubmit} method="POST" autoComplete="off">
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 15 15">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </span>
                <input id="name" type="name" value={name} onChange={(e) => setName(e.target.value)} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your name" required />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                    </path>
                  </svg>
                </span>
                <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email (vit.edu)" pattern="[a-z0-9._%+-]+@vit.edu" title="vit.edu email id only" required />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <span onClick={showhide} className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d={lockPath}></path></svg>
                </span>
                <input id="pass" type={type} value={password} onChange={(e) => setPassword(e.target.value)} name="pass" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
              </div>
            </div>
            <div className="flex w-full">
              <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <a href="/login" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
            <span className="ml-2">
              You have an account?
            </span>
          </a>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}