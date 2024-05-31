"use client"

import { useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { logout } from "./logout";

export default function ButtonNavbar({token}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-2xl font-bold">WallWebsite</Link>
                <div className="hidden md:flex md:space-x-4">
                
                {/* Login & Logout */}
                <div className="navbar-end">
                    {!token?.value ? (
                    <form action={async () => {
                        redirect('/login')
                    }}>
                        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300">
                        Login
                        </button>
                    </form>
                    ) : (
                    <form action={logout}>
                        <button
                        type="submit"
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300"
                        >
                        Logout
                        </button>
                    </form>
                    )}
                </div>


                </div>
                <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white focus:outline-none"
                >
                    <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    {isOpen ? (
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                    </svg>
                </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 inset-x-0 bg-gradient-to-r from-blue-500 to-orange-300 shadow-md py-4">
                    <div className="container mx-auto">
                        {/* Login & Logout */}
                    <div className="navbar-end">
                        {!token?.value ? (
                        <form action={async () => {
                            redirect('/login')
                        }}>
                            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300">
                            Login
                            </button>
                        </form>
                        ) : (
                        <form action={logout}>
                            <button
                            type="submit"
                            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300"
                            >
                            Logout
                            </button>
                        </form>
                        )}
                    </div>
                </div>
                </div>
            )}
        </>
    )
}