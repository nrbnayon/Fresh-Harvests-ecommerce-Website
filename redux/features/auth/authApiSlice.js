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
          url: `/api/me`,
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
// import { apiSlice } from "@/redux/services/apiSlice";
// import { setCredentials, clearCredentials } from "./authSlice";

// export const authApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     register: builder.mutation({
//       query: (credentials) => ({
//         url: "/api/register",
//         method: "POST",
//         body: credentials,
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           if (data.success) {
//             dispatch(setCredentials(data.userData));
//           }
//         } catch (error) {
//           console.error("Registration error:", error);
//         }
//       },
//     }),
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: "/api/login",
//         method: "POST",
//         body: credentials,
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           if (data.success) {
//             dispatch(setCredentials(data.userData));
//           }
//         } catch (error) {
//           // Enhanced error handling
//           const errorMessage =
//             error.data?.error ||
//             error.error?.message ||
//             "Login failed. Please try again.";
//           console.error("Login error:", errorMessage);
//           throw new Error(errorMessage);
//         }
//       },
//     }),
//     logout: builder.mutation({
//       query: () => ({
//         url: "/api/logout",
//         method: "POST",
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           if (data.success) {
//             dispatch(clearCredentials());
//           }
//         } catch (error) {
//           console.error("Logout error:", error);
//         }
//       },
//     }),
//     loggedInUser: builder.query({
//       query: () => ({
//         url: "/api/me",
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json;charset=UTF-8",
//         },
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           if (data.user) {
//             dispatch(setCredentials(data.user));
//           }
//         } catch {
//           dispatch(clearCredentials());
//         }
//       },
//       providesTags: ["Auth"],
//     }),
//   }),
// });

// export const {
//   useRegisterMutation,
//   useLoginMutation,
//   useLogoutMutation,
//   useLoggedInUserQuery,
// } = authApiSlice;

// // redux/services/authApiSlice.js

// import { apiSlice } from "@/redux/services/apiSlice"; // Assuming you have a base apiSlice setup
// import { setCredentials, clearCredentials } from "./authSlice";

// export const authApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     // User Registration Mutation
//     userRegistration: builder.mutation({
//       query: (newData) => ({
//         url: "/api/register",
//         method: "POST",
//         body: JSON.stringify(newData),
//         headers: { "Content-Type": "application/json;charset=UTF-8" },
//       }),
//       async onQueryStarted(arg, { queryFulfilled, dispatch }) {
//         try {
//           const { data } = await queryFulfilled;
//           if (data.success) {
//             dispatch(setCredentials(data.userData));
//           }
//         } catch (error) {
//           console.error("Registration error:", error);
//         }
//       },
//       invalidatesTags: ["Auth"],
//     }),

//     // User Login Mutation
//     userLogin: builder.mutation({
//       query: (newData) => ({
//         url: "/api/login",
//         method: "POST",
//         body: JSON.stringify(newData),
//         headers: { "Content-Type": "application/json;charset=UTF-8" },
//       }),
//       async onQueryStarted(arg, { queryFulfilled, dispatch }) {
//         try {
//           const { data } = await queryFulfilled;
//           if (data.success) {
//             dispatch(setCredentials(data.userData));
//           }
//         } catch (error) {
//           console.error("Login error:", error);
//         }
//       },
//       invalidatesTags: ["Auth"],
//     }),

//     // User Logout Mutation
//     userLogout: builder.mutation({
//       query: () => ({
//         url: "/api/logout",
//         method: "POST",
//         headers: { "Content-Type": "application/json;charset=UTF-8" },
//       }),
//       async onQueryStarted(arg, { queryFulfilled, dispatch }) {
//         try {
//           const { data } = await queryFulfilled;
//           if (data.success) {
//             dispatch(clearCredentials());
//           }
//         } catch (error) {
//           console.error("Logout error:", error);
//         }
//       },
//       invalidatesTags: ["Auth"],
//     }),

//     // Get Logged-In User Query
//     getLoggedInUser: builder.query({
//       query: () => ({
//         url: "/api/user", // Change to your endpoint that retrieves logged-in user data
//         method: "GET",
//         headers: { "Content-Type": "application/json;charset=UTF-8" },
//       }),
//       transformResponse: (response) => response.data, // Optionally, transform the response
//       providesTags: ["Auth"],
//     }),
//   }),
// });

// export const {
//   useUserRegistrationMutation,
//   useUserLoginMutation,
//   useLoggedInUserQuery,
//   useUserLogoutMutation,
// } = authApiSlice;
