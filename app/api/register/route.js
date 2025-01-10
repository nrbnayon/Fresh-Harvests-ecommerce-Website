import { setCookie } from "@/lib/cookies";
import { NextResponse } from "next/server";
export async function POST(request) {
  const apiUrl = process.env.API_URL;
  try {
    const newData = await request.json();

    // Make a POST request to the external API
    const response = await fetch(`${apiUrl}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

    const data = await response.json();

    // Extract accessToken and userData from the response
    const { accessToken, userData } = data?.data || {};

    // Prepare the response with JSON payload
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
