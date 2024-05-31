import { useEffect, useState } from "react"

export default function Search({changeData}) {
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSearch = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)

            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/species?search=${input}`, {
                method: "get"
            })

            const responseBody = await response.json()

            if(!response.ok) {
                throw new Error("Fetch search error")
            }

            changeData(responseBody)

            setLoading(false)
        } catch (err) {
            console.log(err);
        }
    }
    

    return (
        <>
        <div className="flex items-center justify-center mb-4">
            <div className="relative w-full max-w-md flex">
                <input
                type="text"
                className="flex-grow h-12 pl-10 pr-4 rounded-l-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
                value={input}
                onChange={handleChange}
                />
                <button
                type="submit"
                className="h-12 px-4 bg-blue-500 text-white rounded-r-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleSearch}
                >
                Search
                </button>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1014.5 14.5l4.35 4.35z"
                    />
                </svg>
                </div>
            </div>
            
        </div>
        {loading ? (
            <div className="flex items-center justify-center mb-4 bg-gray-100">
                <h2 className="text-xl font-semibold">Loading...</h2>
            </div>
        ) : ""}
        </>
    )
}