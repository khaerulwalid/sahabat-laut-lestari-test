"use client"

import { saveToken } from '@/app/login/loginServerAction';
import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function FormLogin() {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const [showError, setShowError] = useState(undefined);

    const navigation = useRouter()

    const handleChange = (e) => {
        const {name, value} = e.currentTarget

        setInput({
            ...input,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input)
        })


        const responseBody = await response.json();

        if (!response.ok) {
            const error = responseBody.message;
            setShowError(error);
        } else {
            saveToken(responseBody.accessToken)
            navigation.push("/");
        }
    }

    return (
        <>
            {showError ? (
                <div role="alert" className="alert alert-error mt-4 w-[90%] m-auto">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span>{showError}</span>
                </div>
            ) : null}
        
        <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                    </label>
                    <input
                    type="text"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your email"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={input.password}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300"
                >
                    Login
                </button>
                </form>
        </>
    )
}