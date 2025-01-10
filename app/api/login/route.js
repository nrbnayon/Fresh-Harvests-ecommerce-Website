// app\api\login\route.js
import { setCookie } from "@/lib/cookies";
import { NextResponse } from "next/server";

export async function POST(request) {
  const apiUrl = process.env.API_URL || "api-fresh-harvest.code-commando.com";
  try {
    const requestData = await request.json();
    console.log("Req data", requestData);
    const apiResponse = await fetch(`${apiUrl}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    console.log("apiResponse: ", apiResponse);

    const responseOfLogin = await apiResponse.json();

    if (!apiResponse.ok) {
      return NextResponse.json({ result: responseOfLogin });
      console.log("data in route of login: ", responseOfLogin);
    }
    const { success, data } = responseOfLogin || {};
    const { accessToken, userData } = data;
    const response = NextResponse.json({ result: responseOfLogin });
    console.log("data in route of login: ", response);

    // Use reusable setCookie function
    if (accessToken) {
      setCookie(response, "accessToken", accessToken);
    }

    if (userData) {
      setCookie(response, "user", JSON.stringify(userData));
    }

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Login Failed Please Try Again!" },
      { status: 500 }
    );
  }
}
