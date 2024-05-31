

import ButtonNavbar from "./ButtonNabar";
import { cookies } from "next/headers";

export default function Navbar() {
    const token = cookies().get("token");
    
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-orange-300 p-4 fixed w-full top-0 z-10">
            <ButtonNavbar token={token} />
        </nav>
    )
}