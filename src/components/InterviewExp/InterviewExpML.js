import React from "react";
import "../Common/index.css";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Filter from "./Filter";
import { getBlogsMostLiked } from '../../api/blog';

const InterviewExp = () => {
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Companies", href: "/companies", current: false },
    { name: "Interview Experiences", href: "/interviewexp/recent", current: true },
  ];
  const tabs = [
    { name: 'Recent', href: '/interviewexp/recent', current: false },
    { name: 'Most Liked', href: '/interviewexp/mostliked', current: true },
    // { name: 'Best Rating', href: '/nd', current: false },
  ];
  return (
    <>
      <Navbar navigation={navigation} />
      <Filter tabs={tabs} method={getBlogsMostLiked()} sort={2}/>
      <Footer />
    </>
  );
};

export default InterviewExp;
