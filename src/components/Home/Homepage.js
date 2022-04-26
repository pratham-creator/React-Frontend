import React, { useState, useEffect } from "react";
import "../Common/index.css";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import CompCarousel from "./CompaniesCarousel";
import BlogCarousel from "./BlogsCarousel";
import BlogsCarousel1 from "./BlogCarousel1";
import CompanyPoster from './CompanyPoster';
import { getCompanies } from "../../api/company";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const Homepage = () => {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Companies", href: "/companies", current: false },
    { name: "Interview Experiences", href: "/interviewexp/recent", current: false },
  ];
  const [name, setName] = useState("User");
  const [company,setCompany]=useState([]);

  useEffect(() => {
    getCompanies()
        .then(res => {
          console.log(res.data);
          setCompany(res.data)
        })
        .catch(err=> console.log(err));
        
    if (window.localStorage.getItem("name")) {
      var str = window.localStorage.getItem("name");
      str = str.substring(0, str.indexOf(' '));
      setName(str);
    }
  }, []);

  return (
    <>
      <Navbar navigation={navigation} />

      <div className="container-fluid bg-gray-300 outerCardContainer">
        
            <Carousel autoplay>
            {
                
                company.map((c,i)=> (
                    
                    <CompanyPoster company={c}/>
                ))
                
            }
            </Carousel>
            
      </div>

      <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <img
          src="https://www.tailwind-kit.com/images/landscape/5.svg"
          className="absolute h-full w-full object-cover"
          alt="_"
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="w-full flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
              TRF-Placement-Website
            </h1>
            <h1 className="font-extrabold text-7xl text-center sm:text-8xl text-white leading-tight mt-4">
              Welcome {name}!
            </h1>
            <a
              href="/interviewexp/recent"
              className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>

      <CompCarousel />
      <BlogCarousel />
      <BlogsCarousel1 />

      <div className="bg-gray-100">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl text-indigo-100"
            >
              <circle fill="currentColor" cx="44" cy="44" r="15.5" />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              />
            </svg>
          </div>
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="mb-2 font-bold">Football Sports</p>
                <p className="text-sm leading-5 text-gray-900">
                  Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="mb-2 font-bold">Bowling Sports</p>
                <p className="text-sm leading-5 text-gray-900">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="mb-2 font-bold">Cycling Sports</p>
                <p className="text-sm leading-5 text-gray-900">
                  A slice of heaven. O for awesome, this chocka full cuzzie is as
                  rip-off as a cracker.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="mb-2 font-bold">Weight Lifting Sports</p>
                <p className="text-sm leading-5 text-gray-900">
                  Meanwhile, in behind the bicycle shed, Hercules Morse, as big as
                  a horse.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="mb-2 font-bold">Golf Sports</p>
                <p className="text-sm leading-5 text-gray-900">
                  Disrupt inspire and think tank, social entrepreneur but
                  preliminary thinking think tank compelling.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="mb-2 font-bold">Hockey Sports</p>
                <p className="text-sm leading-5 text-gray-900">
                  A business big enough that it could be listed on the NASDAQ goes
                  belly up.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="mb-2 font-bold">Shooting Sports</p>
                <p className="text-sm leading-5 text-gray-900">
                  Lookout flogging bilge rat main sheet bilge water nipper fluke
                  to go on account heave down clap of thunder.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="mb-2 font-bold">Martial Arts</p>
                <p className="text-sm leading-5 text-gray-900">
                  Webtwo ipsum orkut reddit meebo skype vimeo jajah spock empressr
                  zimbra, mobly napster.
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center lg:flex">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Who Are We</h2>

              <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                Hi I am jane , software engineer <a className="font-bold text-blue-600 dark:text-blue-400" href="/nd">@BakaTeam</a> , Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed non alias, fugiat, commodi nemo ut fugit corrupti dolorem sequi ex veniam consequuntur id, maiores beatae ipsa omnis aliquam?
              </p>

              <div className="flex items-center mt-6 -mx-2">
                <a className="mx-2" href="/nd" aria-label="Twitter">
                  <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
                  </svg>
                </a>

                <a className="mx-2" href="/nd" aria-label="Facebook">
                  <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
                  </svg>
                </a>

                <a className="mx-2" href="/nd" aria-label="Linkden">
                  <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
                  </svg>
                </a>

                <a className="mx-2" href="/nd" aria-label="Github">
                  <svg className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-lg">
                  <img className="object-cover object-center w-full h-64 rounded-md shadow" src="data:image/png;base64,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" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
            New History
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              A slice of heaven
            </h5>
            <p className="text-gray-700">
              O for awesome, this chocka full cuzzie is as rip-off as a cracker.
              Meanwhile, in behind the bicycle shed, Hercules Morse.
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Disrupt inspire
            </h5>
            <p className="text-gray-700">
              I'll be sure to note that in my log. Smooth as an android's bottom,
              eh, Data? When has justice ever been as simple as a rule book?
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Storage shed
            </h5>
            <p className="text-gray-700">
              Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              suscipit leo. Carpe diem vulputate est nec commodo rutrum.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
