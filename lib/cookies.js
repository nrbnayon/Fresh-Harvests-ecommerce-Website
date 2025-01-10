export function setCookie(response, name, value, options = {}) {
  const maxAge = 60 * 60 * 24 * 7;
  response.cookies.set(name, value, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    maxAge,
    ...options,
  });
}

// import Cookies from "js-cookie";

// export const AUTH_TOKEN_KEY = "auth_token";
// export const AUTH_USER_KEY = "auth_user";

// export const cookieOptions = {
//   secure: process.env.NODE_ENV === "production",
//   sameSite: "strict",
// };

// export const cookies = {
//   // Auth Token
//   setToken: (token, remember = false) => {
//     const options = {
//       ...cookieOptions,
//       expires: remember ? 30 : 1,
//     };
//     Cookies.set(AUTH_TOKEN_KEY, token, options);
//   },

//   getToken: () => Cookies.get(AUTH_TOKEN_KEY),

//   removeToken: () => Cookies.remove(AUTH_TOKEN_KEY),

//   // User Data
//   setUser: (user, remember = false) => {
//     const options = {
//       ...cookieOptions,
//       expires: remember ? 30 : 1,
//     };
//     Cookies.set(AUTH_USER_KEY, JSON.stringify(user), options);
//   },

//   getUser: () => {
//     const user = Cookies.get(AUTH_USER_KEY);
//     return user ? JSON.parse(user) : null;
//   },

//   removeUser: () => Cookies.remove(AUTH_USER_KEY),

//   // Clear all auth related cookies
//   clearAuth: () => {
//     Cookies.remove(AUTH_TOKEN_KEY);
//     Cookies.remove(AUTH_USER_KEY);
//   },
// };
