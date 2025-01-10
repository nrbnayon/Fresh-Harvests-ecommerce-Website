//api/register/route.js
import { setCookie } from "@/lib/cookies";
import { NextResponse } from "next/server";
export async function POST(request) {
  const apiUrl = process.env.API_URL;

  try {
    const newData = await request.json();
    const response = await fetch(`${apiUrl}/api/v1/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    const data = await response.json();
    console.log("Response from external API:", data);

    const { accessToken, userData } = data?.data || {};

    const responseWithCookie = NextResponse.json({
      success: data?.success,
      message: data?.message,
      userData,
    });

    // Use the reusable setCookie function to set cookies
    if (accessToken) {
      setCookie(responseWithCookie, "accessToken", accessToken);
    }

    if (userData) {
      setCookie(responseWithCookie, "user", JSON.stringify(userData));
    }

    return responseWithCookie;
  } catch (error) {
    console.error("Error during user creation:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
