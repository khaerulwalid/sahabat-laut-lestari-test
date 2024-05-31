"use client"
import Swal from 'sweetalert2'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { AddAction } from '../AddAction'


export default function FormSpeciesEdit({id, token}) {
    const [input, setInput] = useState({
        faoCode: "",
        typeOfFish: "",
        scientificName: "",
        englishName: "",
        indonesianName: "",
        localName: "",
        typeOfWater: "",
        imageUrl: "",
        statusInIndonesia: "Select Status",
        fishUtilization: "",
    })

    const navigation = useRouter()

    const handleChange = (e) => {
        const {name, value} = e.currentTarget

        setInput({
            ...input,
            [name]: value
        })
    }

    const handleSubmit = async (e, id) => {
        e.preventDefault()

        try {
            if(!input.faoCode) {
                throw new Error("faoCode must fill")
            }

            if(!input.typeOfFish) {
                throw new Error("typeOfFish must fill")
            }

            if(!input.scientificName) {
                throw new Error("scientificName must fill")
            }

            if(!input.englishName) {
                throw new Error("englishName must fill")
            }


            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/species/${id}`, {
                method: "PUT",
                body: JSON.stringify(input),
                headers: {
                    Cookie: token.toString(),
                    "Content-Type": "application/json"
                }
            })

            if(!response.ok) {
                throw new Error("Failed post pokemon")
            }
            
            await AddAction()
            navigation.push("/")
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error}`,
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }

        
    }

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/species/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                let responseBody = await response.json()

                if(!responseBody.ok) {
                    throw new Error("Failed fatch detail species")
                }
            
                setInput(responseBody)
            } catch (error) {
                console.log(error);
            }
        }


        getData()
    })

    return (
        <form onSubmit={(e) => handleSubmit(e, id)} className="grid grid-cols-2 gap-4">
                <div className="mb-3">
                    <label htmlFor="faoCode" className="block text-gray-700 font-semibold mb-1">Fao Code</label>
                    <input type="text" id="faoCode" name="faoCode" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter FAO Code" onChange={handleChange} value={input.faoCode} />
                </div>
                <div className="mb-3">
                    <label htmlFor="typeOfFish" className="block text-gray-700 font-semibold mb-1">Type of Fish</label>
                    <input type="text" id="typeOfFish" name="typeOfFish" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Type of Fish" onChange={handleChange} value={input.typeOfFish} />
                </div>
                <div className="mb-3">
                    <label htmlFor="scientificName" className="block text-gray-700 font-semibold mb-1">Scientific Name</label>
                    <input type="text" id="scientificName" name="scientificName" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Scientific Name" onChange={handleChange} value={input.scientificName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="englishName" className="block text-gray-700 font-semibold mb-1">English Name</label>
                    <input type="text" id="englishName" name="englishName" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter English Name" onChange={handleChange} value={input.englishName} />
                </div>
                <div className="col-span-2 mb-3">
                    <label htmlFor="indonesianName" className="block text-gray-700 font-semibold mb-1">Indonesian Name</label>
                    <input type="text" id="indonesianName" name="indonesianName" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Indonesian Name" onChange={handleChange} value={input.indonesianName} />
                </div>
                <div className="col-span-2 mb-3">
                    <label htmlFor="localName" className="block text-gray-700 font-semibold mb-1">Local Name</label>
                    <input type="text" id="localName" name="localName" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Local Name" onChange={handleChange} value={input.localName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="typeOfWater" className="block text-gray-700 font-semibold mb-1">Type of Water</label>
                    <input type="text" id="typeOfWater" name="typeOfWater" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Type of Water" onChange={handleChange} value={input.typeOfWater} />
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="block text-gray-700 font-semibold mb-1">Image Url</label>
                    <input type="text" id="imageUrl" name="imageUrl" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter Image URL" onChange={handleChange} value={input.imageUrl} />
                </div>
                <div className="col-span-2 mb-3">
                    <label htmlFor="statusInIndonesia" className="block text-gray-700 font-semibold mb-1">Status In Indonesia</label>
                    <select id="statusInIndonesia" name="statusInIndonesia" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" onChange={handleChange} value={input.statusInIndonesia}>
                    <option disabled>Select Status</option>
                    <option value="Sudah">Sudah</option>
                    <option value="Belum">Belum</option>
                    </select>
                </div>
                <div className="col-span-2 mb-4">
                    <label htmlFor="fishUtilization" className="block text-gray-700 font-semibold mb-1">Fish Utilization</label>
                    <textarea id="fishUtilization" name="fishUtilization" className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" rows="3" placeholder="Enter Fish Utilization" onChange={handleChange} value={input.fishUtilization}></textarea>
                </div>
                <div className="col-span-2 flex justify-center">
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300">Submit</button>
                </div>
                </form>
    )
}