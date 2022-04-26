import { useEffect, useState } from "react";
import "./CompanyCards.css";
// import ubsLogo from "../images/UBS.jpg";
import { getCompanies } from "../../api/company";
import EachCompanyCard from "./EachCompanyCard";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import "../Common/index.css";

const Company = () => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    getCompanies()
      .then(res => {
        console.log(res.data);
        setCompany(res.data)
      })
      .catch(err => console.log(err));
  }, []);

  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Companies", href: "/companies", current: true },
    { name: "Interview Experiences", href: "/interviewexp/recent", current: false },
  ];

  return (
    <>
      <Navbar navigation={navigation} />
      <center>
      <div className="outerDiv">
      <div className="outerDiv2">
      <div className="text-center"><h1 className="titleHeading text-lg md:text-4xl">Companies</h1></div>
      <div className="container">
        <div className="row ">
          {
            company.map((c,i) => (
              <EachCompanyCard c={c} />
            ))
          }
          

        </div>
      </div>
      </div>
      </div>
      </center>
      <Footer />
    </>
  );
};

export default Company;
