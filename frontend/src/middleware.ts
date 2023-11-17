import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export function middleware(request:NextRequest){

    let allCookies = request.cookies.get("login");
    let url = request.url;
    if(!allCookies && url.includes("/profile")){
        return NextResponse.redirect("/auth/login")
    }
}