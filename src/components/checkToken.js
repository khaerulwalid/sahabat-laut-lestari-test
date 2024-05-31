"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function checkToken() {
  let cookiesUser = cookies();

  const authCookie = cookiesUser.get('token');

  if (authCookie) {
    return true
  } else {
    return false
  }
}

export async function getToken() {
  let cookiesUser = cookies();

  const authCookie = cookiesUser.get('token');

  if(authCookie) {
    return authCookie
  } else {
    return false
  }
}