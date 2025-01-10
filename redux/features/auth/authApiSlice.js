import { apiSlice } from "@/redux/services/apiSlice";
import { setCredentials, clearCredentials } from "./authSlice";
import logger from "@/utils/logger";

export const authApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        logger.debug("Login attempt with:", { email: credentials.email });
        return {
          url: "/api/login",
          method: "POST",
          body: credentials,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          logger.debug("Login request started");
          const { data } = await queryFulfilled;
          logger.debug("Login response received:", data);

          if (data.result?.success) {
            const userData = data.result.data?.userData;
            if (userData) {
              logger.info("Login successful, setting credentials");
              dispatch(setCredentials(userData));
            } else {
              logger.warn("Login successful but no user data received");
            }
          } else {
            logger.warn(
              "Login response indicates failure:",
              data.result?.error
            );
          }
        } catch (error) {
          logger.error("Login error:", error);
        }
      },
      invalidatesTags: ["Auth"],
    }),

    register: builder.mutation({
      query: (userData) => {
        logger.debug("Registration attempt with:", { email: userData.email });
        return {
          url: "/api/register",
          method: "POST",
          body: userData,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          logger.debug("Registration request started");
          const { data } = await queryFulfilled;
          logger.debug("Registration response received:", data);

          if (data.result?.success) {
            const userData = data.result.data?.userData;
            if (userData) {
              logger.info("Registration successful, setting credentials");
              dispatch(setCredentials(userData));
            } else {
              logger.warn("Registration successful but no user data received");
            }
          } else {
            logger.warn(
              "Registration response indicates failure:",
              data.result?.error
            );
          }
        } catch (error) {
          logger.error("Registration error:", error);
        }
      },
      invalidatesTags: ["Auth"],
    }),

    logout: builder.mutation({
      query: () => {
        logger.debug("Logout attempt");
        return {
          url: "/api/logout",
          method: "POST",
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          logger.debug("Logout request started");
          const { data } = await queryFulfilled;
          logger.debug("Logout response received:", data);

          if (data.result?.success) {
            logger.info("Logout successful, clearing credentials");
            dispatch(clearCredentials());
          } else {
            logger.warn(
              "Logout response indicates failure:",
              data.result?.error
            );
          }
        } catch (error) {
          logger.error("Logout error:", error);
        }
      },
      invalidatesTags: ["Auth"],
    }),

    loggedInUser: builder.query({
      query: () => {
        return {
          url: `/api/user`,
          method: "GET",

          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          console.log("data from my profile api...:", data);
          if (data.user) {
            dispatch(setCredentials(data.user));
          }
        } catch {
          dispatch(clearCredentials());
        }
      },
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useLoggedInUserQuery,
} = authApiSlice;
