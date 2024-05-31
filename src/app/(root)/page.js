
import Card from "@/components/root/Card";
import Pagination from "@/components/root/Pagination";
import Image from "next/image";
import { changeDataSpecies } from "./changeDataSpecies";

const fetchSpecies = async () => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/species`, {
      method: "GET",
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json"
      }
    })

    console.log(response, "<<Response")

    let responseBody = await response.json()

    if(!response.ok) {
        throw new Error('Failed fetch')
    }

    return responseBody
}

export default async function Home() {

  return (
    
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 mt-16">Our Services</h1>
      <Pagination />
    </div>

  );
}
