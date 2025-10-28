'use server'

import { cookies } from "next/headers"

export const setCookieByKey = async (key: string, value: string) => {
  const cookieStore =await cookies();
  cookieStore?.set(key, value)
}

export const getCookieByKey = async (key:string)=>{
  const cookieStore =await cookies();
  console.log(cookieStore);
  const data = cookieStore?.get(key);
  if(!data) return null;
  return data?.value;
  
}

export const deleteCookieByKey = async (key:string)=>{
  const cookieStore = await cookies();
  cookieStore?.delete(key);
}