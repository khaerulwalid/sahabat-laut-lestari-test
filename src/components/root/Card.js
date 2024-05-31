import Link from "next/link"
import DeleteSpecies from "../DeleteSpecies"

export default function Card({detail, auth}) {
    
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={detail.imageUrl === "NULL" ? 'https://via.placeholder.com/300' : detail.imageUrl}
            alt="Service 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{detail.englishName}</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
              massa nec lorem varius lacinia.
            </p>
            <Link
              href={`/species/${detail.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Detail
            </Link>

            {
                auth && (
                    <div className="mt-6">
                    <Link
                        href={`/speciesedit/${detail.id}`}
                        className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                        >
                        Edit
                    </Link>
                    <DeleteSpecies id={detail.id} />
                    </div>
                )
            }
          </div>
        </div>
    )
}
