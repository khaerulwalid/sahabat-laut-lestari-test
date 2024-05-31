const fatchDetailSpecies = async (id) =>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/species/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const responseBody = await response.json()
    
    if(!response.ok) {
        throw new Error("Failed fatch detail species")
    }

    return responseBody
}

export default async function DetailSpecies({params}) {
    const data = await fatchDetailSpecies(params.id)

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden w-full max-w-4xl h-[95%] flex mt-10">
                <div className="relative w-2/5">
                <img
                    src="https://via.placeholder.com/300"
                    alt="Detail"
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="p-6 w-3/5 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Archarhinus Albimarginatus</h2>
                    {/* Ini Table */}
                    <div className="flex items-center justify-center bg-gray-100 p-4">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl">
                            <table className="min-w-full bg-white">
                            <tbody>
                                {/* {data.map((row, index) => ( */}
                                <tr key='1' className="border-b">
                                    <th className="py-4 px-4 bg-gray-100 text-left font-medium text-gray-700">
                                    Fao Code
                                    </th>
                                    <td className="py-4 px-4 text-left text-gray-900">{data.faoCode}</td>
                                </tr>
                                <tr key='1' className="border-b">
                                    <th className="py-4 px-4 bg-gray-100 text-left font-medium text-gray-700">
                                    Type Of Fish
                                    </th>
                                    <td className="py-4 px-4 text-left text-gray-900">{data.typeOfFish}</td>
                                </tr>
                                <tr key='1' className="border-b">
                                    <th className="py-4 px-4 bg-gray-100 text-left font-medium text-gray-700">
                                    Scientific Name
                                    </th>
                                    <td className="py-4 px-4 text-left text-gray-900">{data.scientificName}</td>
                                </tr>
                                <tr key='1' className="border-b">
                                    <th className="py-4 px-4 bg-gray-100 text-left font-medium text-gray-700">
                                    English Name
                                    </th>
                                    <td className="py-4 px-4 text-left text-gray-900">{data.englishName}</td>
                                </tr>
                                <tr key='1' className="border-b">
                                    <th className="py-4 px-4 bg-gray-100 text-left font-medium text-gray-700">
                                    Indonesian Name
                                    </th>
                                    <td className="py-4 px-4 text-left text-gray-900">{data.indonesianName}</td>
                                </tr>
                                {/* ))} */}
                            </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Akhir Table */}
                    
                </div>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Learn More
                </button>
                </div>
            </div>
        </div>
    )
}