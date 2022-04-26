import "../Common/index.css";
import React, { useState } from "react";
import { auth, googleAuthProvider } from "./firebase";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { createOrUpdateUser } from "../../api/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

export default function Login() {
  let [type, updateType] = useState("password");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [lockPath, setLockPath] = useState("M7 11V7a5 5 0 0 1 10 0v4");
  const navigate = useNavigate();
  const roleBasedRedirect = (res) => {
    if (res.data.userType === "admin") {
      navigate("/admin/dashboard");
    }
    else {
      navigate("/");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      createOrUpdateUser(idTokenResult.token)
        .then((res) => {
          // console.log(res.data);
          toast.success("Login Successfully");
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("name", res.data.name);
          window.localStorage.setItem("authtoken", idTokenResult.token);
          window.localStorage.setItem("userid", res.data._id);
          roleBasedRedirect(res);
        })
        .catch((err) => console.log("err => ", err));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const googleLogin = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        createOrUpdateUser(idTokenResult.token, user.email.split("@")[0])
          .then((res) => {
            // console.log(res);
            toast.success("Login Successfully");
            window.localStorage.setItem("name", res.data.name);
            window.localStorage.setItem("userid", res.data._id);
            window.localStorage.setItem("email", user.email);
            window.localStorage.setItem("authtoken", idTokenResult.token);
            roleBasedRedirect(res);
          })
          .catch((err) => console.log("err => ", err));
      })
      .catch((err) => {
        toast.error(err);
      });
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
      <br />
      <div className="m-auto flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Login To Your Account
        </div>
        <div className="flex gap-4 item-center">
          <button onClick={googleLogin} type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
              </path>
            </svg>
            Google
          </button>
        </div>
        <div className="mt-8">
          <form onSubmit={handleSubmit} method="POST" autoComplete="off">
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                    </path>
                  </svg>
                </span>
                <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email (vit.edu)" required />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <div className="flex relative ">
                <span onClick={showhide} className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d={lockPath}></path></svg>
                </span>
                <input id="pass" type={type} value={password} onChange={(e) => setPassword(e.target.value)} name="pass" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your password" required />
              </div>
            </div>
            <div className="flex items-center mb-6 -mt-4">
              <div className="flex ml-auto">
                <a href="/forgotpassword" className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                  Forgot Your Password?
                </a>
              </div>
            </div>
            <div className="flex w-full">
              <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center mt-6">
          <a href="/signup" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
            <span className="ml-2">
              You don&#x27;t have an account?
            </span>
          </a>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
