import { Fragment, useState, useEffect } from 'react'
import { Dialog, Popover, Disclosure, Transition } from '@headlessui/react'
import { toast } from "react-toastify";
import {
  // ChatAltIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  ThumbUpIcon,
  MinusSmIcon,
} from '@heroicons/react/solid'
import { BookmarkIcon, FilterIcon, XIcon } from '@heroicons/react/outline';
import { getBlogsMostLiked, filterBlogs, putVote } from '../../api/blog';
import { useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

const filters = [
  {
    id: "companies",
    name: "Company",
    options: [
      { id: "624da52e91797f0e8148df74", value: "UBS", label: "UBS", checked: false, index: 1 },
      { id: "624da65d91797f0e8148df76", value: "NVIDIA", label: "NVIDIA", checked: false, index: 2 },
    ],
  },
  {
    id: "campus",
    name: "Campus",
    options: [
      { id: "onCampus", value: "onCampus", label: "On Campus", checked: false, index: 1 },
      { id: "offCampus", value: "offCampus", label: "Off Campus", checked: false, index: 2 },
    ],
  },
  {
    id: "interviewType",
    name: "Interview-Type",
    options: [
      { id: "internship", value: "internship", label: "Internship", checked: false, index: 1 },
      { id: "full-time", value: "full time", label: "Full time", checked: false, index: 2 },
    ],
  }
];

// const whoToFollow = [
//   {
//     name: 'Leonard Krasner 1',
//     handle: 'leonardkrasner',
//     href: '/nd',
//     imageUrl:
//       'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   }, {
//     name: 'Leonard Krasner 2',
//     handle: 'leonardkrasner1',
//     href: '/nd',
//     imageUrl:
//       'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   }
// ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Example = (props) => {
  const navigate = useNavigate();
  const tabs = props.tabs || [
    { name: 'Recent', href: '/interviewexp/recent', current: true },
    { name: 'Most Liked', href: '/interviewexp/mostliked', current: false },
    // { name: 'Best Rating', href: '/nd', current: false },
  ];

  const [questions, setQuestions] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [FCompany, setFCompany] = useState([]);
  const [FCampus, setFCampus] = useState([]);
  const [FInterviewT, setFInterviewT] = useState([]);
  const [Loader, setLoader] = useState(true);

  function printDate(dateTime) {
    var date = new Date(dateTime);
    var date1 = date.toLocaleString('en-US', { month: 'long' }) + " " + date.getDate() + " " + date.getFullYear();
    return date1;
  }

  function dataL(name) {
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

  function optionChange() {
    navigate(document.getElementById('question-tabs').value);
  }

  function filter(name, id) {
    let arr1 = [...FCompany];
    let arr2 = [...FCampus];
    let arr3 = [...FInterviewT];
    if (name === "Company") {
      if (FCompany.indexOf(id) === -1) {
        arr1.push(id);
        setFCompany(arr1);
      } else {
        arr1.splice(FCompany.indexOf(id), 1);
        setFCompany(arr1);
      }
    }
    if (name === "Campus") {
      if (FCampus.indexOf(id) === -1) {
        arr2.push(id);
        setFCampus(arr2);
      } else {
        arr2.splice(FCampus.indexOf(id), 1);
        setFCampus(arr2);
      }
    }
    if (name === "Interview-Type") {
      if (FInterviewT.indexOf(id) === -1) {
        arr3.push(id);
        setFInterviewT(arr3);
      } else {
        arr3.splice(FInterviewT.indexOf(id), 1);
        setFInterviewT(arr3);
      }
    }
    // console.log(arr1, arr3, arr2);
    filterBlogs(arr1, arr3, arr2, props.sort)
      .then(res => {
        // console.log(res.data);
        setQuestions(res.data);
      })
      .catch(err => console.log(err));
  }

  function vote(blogId) {
    if (window.localStorage.getItem('userid') != null) {
      var userId = window.localStorage.getItem('userid');
    } else {
      toast.error("Please login first");
    }
    putVote(blogId, userId, props.sort)
      .then(res => {
        setQuestions(res.data);
        // console.log('success');
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    props.method
      .then(res => {
        // console.log(res.data);
        setQuestions(res.data);
        setLoader(false);
      })
      .catch(err => console.log(err));

    getBlogsMostLiked()
      .then(res => {
        setTrendingPosts(res.data);
      })
      .catch(err => console.log(err));
  }, [props.method]);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <>
      <div className="min-h-full">
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">

                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    onClick={() => filter(section.name, option.id)}
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
        <Popover
          as="header"
          className={({ open }) =>
            classNames(
              open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
              'bg-white shadow-sm lg:static lg:overflow-y-visible'
            )
          }
        >
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                  <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                    <div className="flex-shrink-0 flex items-center">
                      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                        Blogs
                      </h1>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                    <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                      <div className="w-full">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Search"
                            type="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                    {/* Mobile menu button */}
                    <button><BookmarkIcon className="w-5 h-5 text-gray-400" aria-hidden="true" /></button>
                    <button
                      type="button"
                      className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                      onClick={() => setMobileFiltersOpen(true)}
                    >
                      <span className="sr-only">Filters</span>
                      <FilterIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                    <a
                      href="/nd"
                      className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">View Bookmarks</span>
                      <BookmarkIcon className="h-6 w-6" aria-hidden="true" />
                    </a>
                    <a
                      href="/nd"
                      className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      New Post
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </Popover>

        <div className="py-10">
          <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
              <nav aria-label="Sidebar" className="sticky top-4 divide-y divide-gray-300">
                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <div
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {/* {({ open }) => ( */}
                      <>
                        <h3 className="-my-3 flow-root">
                          <div className="py-3 bg-gray-100 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            {/* <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span> */}
                          </div>
                        </h3>
                        <div className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-mobile-${section.id}-${option.index}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  onClick={() => filter(section.name, option.id)}
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${option.index}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                      {/* // )} */}
                    </div>
                  ))}
                </form>
              </nav>
            </div>
            <main className="lg:col-span-9 xl:col-span-6">
              <div className="px-4 sm:px-0">
                <div className="sm:hidden">
                  <label htmlFor="question-tabs" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    onChange={() => optionChange()}
                    id="question-tabs"
                    className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue="select"
                  >
                    <option key="selct">Sort by</option>
                    {tabs.map((tab) => (
                      <option key={tab.name} value={tab.href}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                    {tabs.map((tab, tabIdx) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        aria-current={tab.current ? 'page' : undefined}
                        className={classNames(
                          tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                          tabIdx === 0 ? 'rounded-l-lg' : '',
                          tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                          'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                        )}
                      >
                        <span>{tab.name}</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            tab.current ? 'bg-indigo-500' : 'bg-transparent',
                            'absolute inset-x-0 bottom-0 h-0.5'
                          )}
                        />
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="mt-4" id="blogs-container">
                  <BallTriangle color="#00BFFF" height={80} width={80} visible={Loader} />
                <h1 className="sr-only">Recent blogs</h1>
                <ul className="space-y-4">
                  {questions.map((question) => (
                    <li key={question._id} className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                      <article aria-labelledby={'question-title-' + question._id}>
                        <div className="flex space-x-3">
                          <div className="flex-shrink-0">
                            <div data-letters={dataL(question.author.name)}>
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium text-gray-900">
                              {question.author.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              <time dateTime={question.createdAt}>
                                {printDate(question.createdAt)}
                              </time>
                            </p>
                          </div>
                        </div>
                        <a href={`/blog/${question._id}`}>
                          <h2 id={'question-title-' + question._id} className="mt-4 text-base font-medium text-gray-900">
                            {question.title}
                          </h2>
                          <div
                            className="mt-2 text-sm text-gray-700 space-y-4"
                            dangerouslySetInnerHTML={{ __html: question.body }}
                          />
                        </a>
                        <div className="mt-6 flex justify-between space-x-8">
                          <div className="flex space-x-6">
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500" onClick={() => vote(question._id)}>
                                <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">{question.votesCount}</span>
                                <span className="sr-only">likes</span>
                              </button>
                            </span>
                            {/* <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">{question.votesCount}</span>
                                <span className="sr-only">replies</span>
                              </button>
                            </span> */}
                          </div>
                          <div className="flex text-sm">
                            <span className="inline-flex items-center text-sm">
                              <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                                <ShareIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="font-medium text-gray-900">Share</span>
                              </button>
                            </span>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            </main>
            <aside className="hidden xl:block xl:col-span-4">
              <div className="sticky top-4 space-y-4">
                {/* <section aria-labelledby="who-to-follow-heading">
                  <div className="bg-white rounded-lg shadow">
                    <div className="p-6">
                      <h2 id="who-to-follow-heading" className="text-base font-medium text-gray-900">
                        Who to follow
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul className="-my-4 divide-y divide-gray-200">
                          {whoToFollow.map((user) => (
                            <li key={user.handle} className="flex items-center py-4 space-x-3">
                              <div className="flex-shrink-0">
                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <a href={user.href}>{user.name}</a>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <a href={user.href}>{'@' + user.handle}</a>
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <button
                                  type="button"
                                  className="inline-flex items-center px-3 py-0.5 rounded-full bg-indigo-50 text-sm font-medium text-indigo-700 hover:bg-indigo-100"
                                >
                                  <PlusSmIcon className="-ml-1 mr-0.5 h-5 w-5 text-indigo-400" aria-hidden="true" />
                                  <span>Follow</span>
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="/nd"
                          className="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section> */}
                <section aria-labelledby="trending-heading">
                  <div className="bg-white rounded-lg shadow">
                    <div className="p-6">
                      <h2 id="trending-heading" className="text-base font-medium text-gray-900">
                        Trending
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul className="-my-4 divide-y divide-gray-200">
                          {trendingPosts.slice(0, 3).map((post) => (
                            <li key={post._id} className="flex py-4 space-x-3">
                              <div className="flex-shrink-0">
                                <div data-letters={dataL(post.author.name)}>
                                </div>
                              </div>
                              <div className="min-w-0 flex-1">
                                <a href={`/blog/${post._id}`}>
                                  <p className="text-sm text-gray-800">{post.title}</p>
                                  <div className="mt-2 flex">
                                    <span className="inline-flex items-center text-sm">
                                      <button
                                        type="button"
                                        className="inline-flex space-x-2 text-gray-400"
                                        disabled={true}
                                      >
                                        <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                                        <span className="font-medium text-gray-900">{post.votesCount}</span>
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
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

export default Example;