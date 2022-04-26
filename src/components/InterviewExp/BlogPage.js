import { useEffect, useState } from "react";
// import { Menu, Transition } from "@headlessui/react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  // ChatAltIcon,
  // DotsVerticalIcon,
  // EyeIcon,
  // FlagIcon,
  PlusSmIcon,
  ShareIcon,
  ThumbUpIcon,
  // BookmarkIcon,
} from "@heroicons/react/solid";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import React from "react";
import "../Common/index.css";
import { getBlogById, getBlogsMostLiked, putVote } from '../../api/blog';

export default function BlogPage() {
  const navigation1 = [
    { name: "Home", href: "/", current: false },
    { name: "Companies", href: "/companies", current: false },
    { name: "Interview Experiences", href: "/interviewexp/recent", current: true },
  ];

  const [question, setQuestion] = useState([]);
  const [author, setAuthor] = useState([]);
  const [dataL, setDataL] = useState([]);
  const [date, setDate] = useState([]);
  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);
  const [hour, setHour] = useState([]);
  const [min, setMin] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const { id } = useParams();

  function dataLFunc(name) {
    var str = name;
    var datal;
    if (str.indexOf(" ") !== -1) {
      datal = ((str[0] + str[str.indexOf(" ") + 1]).toUpperCase()).toString();
    }
    else {
      datal = ((str[0]).toUpperCase()).toString();
    }
    return datal;
  }

  function vote(blogId) {
    if (window.localStorage.getItem('userid') != null) {
      var userId = window.localStorage.getItem('userid');
    } else {
      toast.error("Please login first");
    }
    putVote(blogId, userId)
      .then(res => {
        getBlogById(id)
          .then(res => {
            // console.log(res.data);
            setQuestion(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getBlogById(id)
      .then(res => {
        // console.log(res.data);
        setAuthor(res.data.author);
        setQuestion(res.data);
        var date = new Date(res.data.createdAt);
        setDate(date.getDate());
        setMonth(date.toLocaleString('en-US', { month: 'long' }));
        setYear(date.getFullYear());
        setMin(date.getMinutes());
        setHour(date.getHours());
        var str = res.data.author.name;
        if (str.indexOf(" ") !== -1) {
          setDataL(((str[0] + str[str.indexOf(" ") + 1]).toUpperCase()).toString());
        }
        else {
          setDataL(((str[0]).toUpperCase()).toString());
        }
      })
      .catch(err => console.log(err));

    getBlogsMostLiked()
      .then(res => {
        setTrendingPosts(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <>
      <Navbar navigation={navigation1} />
      <div className="min-h-full">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}

        <div className="py-10">
          <div className="max-w-3xl mx-auto">
            <main className="lg:col-span-9 xl:col-span-6 space-y-4">
              <section aria-labelledby="who-to-follow-heading">
                <div className="bg-white rounded-lg shadow">
                  <div className="p-6">
                    <h2
                      id="who-to-follow-heading"
                      className="text-base font-medium text-gray-900"
                    >
                      Author
                    </h2>
                    <div className="mt-6 flow-root">
                      <ul
                        // role="list"
                        className="-my-4 divide-y divide-gray-200"
                      >
                        <li
                          key={author.name}
                          className="flex items-center py-4 space-x-3"
                        >
                          <div data-letters={dataL}>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                            <div onClick={() => window.location = `mailto:${author.email}`}>{author.name}</div>
                            </p>
                            <p className="text-sm text-gray-500">
                              <div onClick={() => window.location = `mailto:${author.email}`}>{author.email}</div>
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <button
                              type="button"
                              className="inline-flex items-center px-3 py-0.5 rounded-full bg-indigo-50 text-sm font-medium text-indigo-700 hover:bg-indigo-100"
                            >
                              <PlusSmIcon
                                className="-ml-1 mr-0.5 h-5 w-5 text-indigo-400"
                                aria-hidden="true"
                              />
                              <span>Follow</span>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <div className="mt-0">
                <h1 className="sr-only">Blog</h1>
                <ul className="space-y-4">
                  <li
                    key={question._id}
                    className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
                  >
                    <article
                      aria-labelledby={"question-title-" + question._id}
                    >
                      <div>
                        <div className="flex space-x-3">
                          <div className="min-w-0 flex-1">
                            <p className="text-sm text-gray-500">
                              <time dateTime={question.createdAt}>
                                {"Published on: " + month + " " + date + " " + year + " at " + hour + ":" + min}
                              </time>
                            </p>
                          </div>
                        </div>
                        <h2
                          id={"question-title-" + question._id}
                          className="mt-4 text-base font-medium text-gray-900"
                        >
                          {question.title}
                        </h2>
                      </div>
                      <div
                        className="mt-2 text-sm text-gray-700 space-y-4 text-justify"
                        dangerouslySetInnerHTML={{ __html: question.body }}
                      />
                      <div className="mt-6 flex justify-between space-x-8">
                        <div className="flex space-x-6">
                          <span className="inline-flex items-center text-sm">
                            <button
                              type="button"
                              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                              onClick={() => vote(id)}
                            >
                              <ThumbUpIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                              <span className="font-medium text-gray-900">
                                {question.votesCount}
                              </span>
                              <span className="sr-only">likes</span>
                            </button>
                          </span>
                          {/* <span className="inline-flex items-center text-sm">
                            <button
                              type="button"
                              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                            >
                              <ChatAltIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                              <span className="font-medium text-gray-900">
                                {question.votesCount}
                              </span>
                              <span className="sr-only">replies</span>
                            </button>
                          </span> */}
                        </div>
                        <div className="flex text-sm">
                          <span className="inline-flex items-center text-sm">
                            <button
                              type="button"
                              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                            >
                              <ShareIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                              <span className="font-medium text-gray-900">
                                Share
                              </span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
              <div className="sticky top-4 space-y-4">
                <section aria-labelledby="trending-heading">
                  <div className="bg-white rounded-lg shadow">
                    <div className="p-6">
                      <h2
                        id="trending-heading"
                        className="text-base font-medium text-gray-900"
                      >
                        Trending Blogs
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul
                          // role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {trendingPosts.slice(0, 3).map((post) => (
                            <li key={post._id} className="flex py-4 space-x-3">
                              <div className="flex-shrink-0">
                                <div data-letters={dataLFunc(post.author.name)}>
                                </div>
                              </div>
                              <div className="min-w-0 flex-1">
                                <a href={`/blog/${post._id}`}>
                                  <p className="text-sm text-gray-800">
                                    {post.title}
                                  </p>
                                  <div className="mt-2 flex">
                                    <span className="inline-flex items-center text-sm">
                                      <button
                                        type="button"
                                        className="inline-flex space-x-2 text-gray-400"
                                        disabled={true}
                                      >
                                        <ThumbUpIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                        <span className="font-medium text-gray-900">
                                          {post.votesCount}
                                        </span>
                                      </button>
                                    </span>
                                  </div>
                                </a>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="/interviewexp/mostliked"
                          className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
