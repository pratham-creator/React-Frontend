import React from "react";
import "./index.css";
import { Facebook, GitHub, YouTube, Instagram, Twitter, Website, LinkedIn } from "../../assets/svg/svg";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="relative-bottom bg-gray-800">
          <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
              <div className="px-5 py-2">
                <a
                  href="/"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  About
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="/"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Companies
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="/"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Interview Experiences
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="/"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Team
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="/"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Contact
                </a>
              </div>
              <div className="px-5 py-2">
                <a
                  href="/"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  Terms
                </a>
              </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-6">
              <a
                href="https://www.facebook.com/trfvit/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d={Facebook}
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vitpunerobotics/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d={Instagram}
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://in.linkedin.com/company/the-robotics-forum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d={LinkedIn}
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/vitpunerobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={Twitter}
                  ></path>
                </svg>
              </a>
              <a
                href="https://github.com/The-Robotics-Forum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d={GitHub}
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/c/TheRoboticsForumVITPune/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d={YouTube}
                  />
                </svg>
              </a>
              <a
                href="https://www.vitpunerobotics.com/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Website</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d={Website}
                  />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-400">
              © 2022 TRF Placement Website, Inc. All rights reserved.
            </p>
          </div>
        </section>
      </footer>
    </>
  );
}
