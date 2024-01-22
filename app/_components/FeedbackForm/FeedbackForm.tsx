"use client"
import React, {ChangeEvent, useState} from "react";
import Link from "next/link";
import {MarkdownEditor} from "@/app/_components/MarkdownEditor/MarkdownEditor";
import {useFeedback} from "@/app/_hooks/Feedback";
import {Loader} from "@/app/_components/Loader/Loader";
import {Modal} from "@/app/_components/Modal/Modal";
import {useParams} from "next/navigation";

export const FeedbackForm = ({project}: {project: string}) => {
    const params = useParams();
    const [markdownInput, setMarkdownInput] = useState('');
    const [isSuccess, setSuccess] = useState(false);
    const [isError, setError] = useState(false);
    const { loading, sendFeedback } = useFeedback();
    const handleChange = (value: string | undefined, event: ChangeEvent<HTMLTextAreaElement> | undefined) => {
        if (value) setMarkdownInput(value)
    }

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if (markdownInput) {
            sendFeedback(markdownInput, () => setSuccess(true), () => setError(true))
        }
    }

    return (
        <div className="mt-6 md:h-screen">
            {loading && <div className="w-full h-full left-0 top-0 fixed backdrop-opacity-60  bg-white/70 z-20 flex items-center justify-center ">
                <Loader />
            </div>}
            {isSuccess && <Modal onClose={() => setSuccess(false)}>
                    <p className="leading-normal text-blue-gray-900 text-2xl">
                        Form submitted successfully!
                    </p>
                </Modal>
            }
            <Link href={`/${params.client}`} className="rotate-180 bg-transparent text-gray-400 hover:text-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-xl p-2.5 text-center inline-flex items-center me-2">
                <svg className="w-6 h-6 transition-all:0.2s" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                <span className="sr-only">Back</span>
            </Link>
            <h1 className="text-4xl text-gray-900 font-bold">Send feedback to {project}</h1>
            <div className="w-full mt-4">
                <MarkdownEditor value={markdownInput} onChange={handleChange} />
            </div>
            <div className="w-full mt-4">
                <button
                    onClick={handleSubmitForm}
                    className="text-white bg-sky-500 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5"
                >
                    Send
                </button>
                {isError && <p className="text-red-600">An error occurred. Please try again.</p>}
            </div>
        </div>
    );
}