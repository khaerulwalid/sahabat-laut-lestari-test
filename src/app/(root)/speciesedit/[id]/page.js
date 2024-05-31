import FormSpeciesAdd from "@/components/speciesadd/FormSpeciesAdd";
import FormSpeciesEdit from "@/components/speciesadd/FormSpeciesEdit";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default function SpeciesEdit({params}) {
    const id = params.id
    const token = cookies().get("token");

    if (!token?.value) {
        redirect("/login");
    }

    return (
        <div className="flex items-center justify-center min-h-screen mt-16 py-10 bg-blue-500 bg-cover bg-center" style={{ backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/742/693/desktop-wallpaper-blue-ocean-with-fish-ocean-animals.jpg)' }}>
            <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-xl font-bold text-center text-blue-600 mb-4">Edit Data</h1>
                <FormSpeciesEdit id={id} token={token} />
            </div>
        </div>
    )
}