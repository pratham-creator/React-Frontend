import "../Common/index.css";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

const Error404 = () => {
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Companies", href: "/companies", current: false },
    { name: "Interview Experiences", href: "/interviewexp/recent", current: false },
  ];

  return (
    <>
      <Navbar navigation={navigation} />
      404
      <Footer />
    </>)
}

export default Error404;