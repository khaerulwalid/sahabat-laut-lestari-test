
import FormLogin from "@/components/login/FormLogin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Login() {
    const token = cookies().get("token");

    if (token?.value) {
        redirect("/");
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-600">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login</h2>
                <FormLogin />
            </div>
        </div>
    )
}