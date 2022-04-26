import React, { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "../Common/index.css";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

export default function UserInfo() {
  let navigate = useNavigate();
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email");
  const [profileImg, setProfileImg] = useState();

  const SignOut = async () => {
    if (window.localStorage.getItem("authtoken")) {
      window.localStorage.removeItem("authtoken");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("userid");
      toast.success('logged out successfully');
      navigate("/");
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem("name") && window.localStorage.getItem("email")) {
      setName(window.localStorage.getItem("name"));
      setEmail(window.localStorage.getItem("email"));
      var str = window.localStorage.getItem("name");
      if (str.indexOf(" ") !== -1) {
        setProfileImg(((str[0] + str[str.indexOf(" ") + 1]).toUpperCase()).toString());
      }
      else {
        setProfileImg(((str[0]).toUpperCase()).toString());
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white block py-10">
        <div className="max-w-2xl mx-auto">
          <div className="w-full">
            <div className="w-full bg-blue-200 h-48 rounded-t-lg"></div>
            <div className="absolute -mt-20 ml-5">
              <div
                className="bg-gray-200 border border-gray-300 h-36 w-40 rounded-lg shadow-md border-b border-primary"
                id="profileimg"
              >
                {profileImg}
              </div>
            </div>
          </div>
          <div className="bg-primary border border-primary rounded-b-lg p-5 pt-20 flex flex-col">
            <div className="mb-1" id="name">
              {name}
            </div>
            <div className="mb-1" id="email">
              {email}
            </div>
            <div className="text-sm mt-2 text-gray-200">
              <div className="flex flex-row ml-auto space-x-2 items-center">
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                <div className="bg-blue-200 rounded-full h-1 w-1"></div>
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
              </div>
            </div>

            <div className="pt-8 flex gap-8">
              <div className="flex flex-col">
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
              </div>
              <div className="flex flex-col">
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
              </div>
              <div className="flex flex-col">
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
              </div>
            </div>
            <div className="py-5 break-all bbcode">
              <div className="mb-1 bg-gray-200 border border-gray-300 h-5 w-44"></div>
              <div className="mb-1 bg-red-200 border border-gray-300 h-5 w-full h-40"></div>
            </div>
            <button onClick={SignOut}>SignOut</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
