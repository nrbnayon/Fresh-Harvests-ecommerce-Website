import { apiSlice } from "@/redux/services/apiSlice";
import { setCredentials, clearCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/api/register",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success) {
            dispatch(setCredentials(data.userData));
          }
        } catch (error) {
          console.error("Registration error:", error);
        }
      },
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success) {
            dispatch(setCredentials(data.userData));
          }
        } catch (error) {
          console.error("Login error:", error);
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/api/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success) {
            dispatch(clearCredentials());
          }
        } catch (error) {
          console.error("Logout error:", error);
        }
      },
    }),
    loggedInUser: builder.query({
      query: () => ({
        url: "/api/me",
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.user) {
            dispatch(setCredentials(data.user));
          }
        } catch {
          dispatch(clearCredentials());
        }
      },
      providesTags: ["Auth"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useLoggedInUserQuery,
} = authApiSlice;

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
