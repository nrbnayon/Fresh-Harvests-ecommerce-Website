import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCredentials, clearCredentials, setLoading } =
  authSlice.actions;
export default authSlice.reducer;

// // redux/authSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   token: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       state.user = action.payload;
//       // Assuming token is handled by HTTP-only cookie
//       state.token = action.payload.token;
//     },
//     clearCredentials: (state) => {
//       state.user = null;
//       state.token = null;
//     },
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//     },
//   },
// });

// export const { setCredentials, clearCredentials, setLoading } =
//   authSlice.actions;

// export default authSlice.reducer;
