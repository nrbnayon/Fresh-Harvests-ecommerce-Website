import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import logger from "@/utils/logger";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
    credentials: "include",
    prepareHeaders: (headers) => {
      logger.debug("Preparing headers for request");

      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("accessToken="))
        ?.split("=")[1];

      if (token) {
        // logger.debug("Token found in cookies");
        headers.set("Authorization", `${token}`);
      } else {
        logger.warn("No token found in cookies");
      }

      // logger.debug("Final headers:", Object.fromEntries(headers.entries()));
      return headers;
    },
  }),
  tagTypes: ["Auth", "DynamicType"],
  endpoints: (builder) => ({}),
});
