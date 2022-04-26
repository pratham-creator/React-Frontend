import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "../Common/index.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {
    // ChatAltIcon,
    ShareIcon,
    ThumbUpIcon,
} from '@heroicons/react/solid'
import { getBlogsMostLiked, putVote } from '../../api/blog';

export default function BlogCarousel() {
    const [questions, setQuestions] = useState([]);

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

    function vote(blogId) {
        if (window.localStorage.getItem('userid') != null) {
            var userId = window.localStorage.getItem('userid');
        } else {
            toast.error("Please login first");
        }
        putVote(blogId, userId, 2)
            .then(res => {
                setQuestions(res.data);
                // console.log('success');
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getBlogsMostLiked()
            .then(res => {
                // console.log(res.data);
                setQuestions(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <>
            <br />
            <center>
                <Splide
                    options={{
                        type: "loop",
                        drag: "free",
                        focus: "center",
                        // padding: '10rem',
                        autoplay: true,
                        speed: 2000,
                        wheel: true,
                        width: 1400
                    }}
                >
                    <>{questions.slice(0, 3).map((question) => (
                        <SplideSlide key={question._id} className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
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
                                    <h2 id={'question-title-' + question.id} className="mt-4 text-base font-medium text-gray-900">
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
                        </SplideSlide>
                    ))}</>
                </Splide>
            </center>
            <br />
        </>
    );
}
