"use client";
import { useRouter } from "next/navigation";
import { getToken } from "./checkToken";

export default function DeleteSpecies({id}) {
    const navigation = useRouter();

    const handleClick = async (id) => {
        let token = await getToken()

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/species/${id}`, {
          method: "DELETE",
          headers: {
            Cookie: token.toString(),
            "Content-Type": "application/json",
          },
        });
    
        if (!response.ok) {
          throw new Error("Failed to delete pokemon");
        }
    
        await AddAction();
        navigation.push("/");
      };

    return (
        <button onClick={() => handleClick(id)} className=" bg-red-800 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
            Hapus
        </button>
    )
}