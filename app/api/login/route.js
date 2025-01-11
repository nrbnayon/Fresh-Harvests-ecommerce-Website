import { setCookie } from "@/lib/cookies";
import { NextResponse } from "next/server";
import logger from "@/utils/logger";

export async function POST(request) {
  const apiUrl =
    process.env.API_URL || "https://api-fresh-harvest.code-commando.com";

  try {
    const requestData = await request.json();
    // logger.debug("Login request data received", requestData);

    // Ensure the URL has a protocol
    const apiEndpoint = new URL("/api/v1/auth/login", apiUrl).toString();
    // logger.info("Calling API endpoint", apiEndpoint);

    const apiResponse = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const responseData = await apiResponse.json();
    // logger.debug("API response received", responseData);

    if (!apiResponse.ok) {
      logger.warn("API responded with an error", {
        status: apiResponse.status,
        message: responseData.message,
      });

      return NextResponse.json(
        {
          success: false,
          error: responseData.message || "Login failed",
        },
        { status: apiResponse.status }
      );
    }

    const { success, data } = responseData;
    const { token, userData } = data || {};

    const response = NextResponse.json({
      success: true,
      userData,
      message: "Login successful",
    });

    // Set cookies only if we have the required data
    if (token) {
      // logger.info("Setting access token cookie");
      setCookie(response, "accessToken", token);
    } else {
      logger.warn("Access token not found in response");
    }

    if (userData) {
      // logger.info("Setting user data cookie");
      setCookie(response, "user", JSON.stringify(userData));
    } else {
      logger.warn("User data not found in response");
    }

    // logger.info("Login process completed successfully");
    return response;
  } catch (error) {
    logger.error("Login error occurred", error);

    // Handle specific errors
    if (
      error.name === "TypeError" &&
      error.message.includes("Failed to parse URL")
    ) {
      logger.error("Invalid API configuration detected", {
        error: error.message,
      });

      return NextResponse.json(
        {
          success: false,
          error: "Invalid API configuration. Please contact support.",
        },
        { status: 500 }
      );
    }

    // Generic error handling
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
