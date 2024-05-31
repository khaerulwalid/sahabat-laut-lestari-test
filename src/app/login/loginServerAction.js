"use server"

import { cookies } from 'next/headers'

export const saveToken = (access_token) => {
    cookies().set("token", access_token, {
        httpOnly: true,
        sameSite: "strict",
        secure: false
    })
}