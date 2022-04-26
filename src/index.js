import React from 'react';
import ReactDOM from "react-dom";
import { ToastContainer } from 'react-toastify';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from "./components/User/Login";
import UserInfo from "./components/User/UserInfo";
import Signup from "./components/User/Signup";
import Homepage from "./components/Home/Homepage";
import InterviewExp from './components/InterviewExp/InterviewExp';
import InterviewExpML from './components/InterviewExp/InterviewExpML';
import BlogPage from "./components/InterviewExp/BlogPage";
import BlogContainer from "./components/InterviewExp/BlogContainer";
import ForgotPassword from "./components/User/ForgotPassword";
import RegisterComplete from "./components/User/RegisterComplete";
import Company from "./components/Companies/Company";
import CompanyCards from "./components/Companies/CompanyCards";
import Error404 from "./components/Common/error404";


export default function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/nd" element={<Error404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<UserInfo />} />
          <Route path="/interviewexp/recent" element={<InterviewExp />} />
          <Route path="/interviewexp/mostliked" element={<InterviewExpML />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/blogc" element={<BlogContainer />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/register/complete" element={<RegisterComplete />} />
          <Route path="/company/:id" element={<Company />} />
          <Route path="/companies" element={<CompanyCards />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

ReactDOM.render(<React.StrictMode>
  <App />
</React.StrictMode>,
document.getElementById('root'));
