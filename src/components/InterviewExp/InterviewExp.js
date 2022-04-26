import React from "react";
import "../Common/index.css";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Filter from "./Filter";
import { getAllBlogs } from '../../api/blog';

const InterviewExp = () => {
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Companies", href: "/companies", current: false },
    { name: "Interview Experiences", href: "/interviewexp/recent", current: true },
  ];
  return (
    <>
      <Navbar navigation={navigation} />
      <Filter method={getAllBlogs()} sort={1}/>
      <Footer />
    </>
  );
};

export default InterviewExp;
