import { useDispatch } from "react-redux";
import {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} from "@/redux/features/auth/authApiSlice";

export const useAuth = () => {
  const [loginMutation] = useLoginMutation();
  const [registerMutation] = useRegisterMutation();
  const [logoutMutation] = useLogoutMutation();

  const login = async (email, password) => {
    try {
      const result = await loginMutation({ email, password }).unwrap();
      return { success: true, data: result };
    } catch (error) {
      return {
        success: false,
        error: error.data?.message || "Login failed",
      };
    }
  };

  const register = async (userData) => {
    try {
      const result = await registerMutation(userData).unwrap();
      return { success: true, data: result };
    } catch (error) {
      return {
        success: false,
        error: error.data?.message || "Registration failed",
      };
    }
  };

  const logout = async () => {
    try {
      await logoutMutation().unwrap();
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.data?.message || "Logout failed",
      };
    }
  };

  return { login, register, logout };
};
// "use client";

// import React, { createContext, useContext, useState, useEffect } from "react";
// import { login as apiLogin, register as apiRegister } from "@/lib/api";
// import {
//   setAuthCookies,
//   clearAuthCookies,
//   getAuthFromCookies,
// } from "@/lib/auth-cookies";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [cartCount, setCartCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Check for existing session on mount
//   useEffect(() => {
//     const { user: savedUser } = getAuthFromCookies();
//     if (savedUser) {
//       setUser(savedUser);
//     }
//     setIsLoading(false);
//   }, []);

//   const login = async (email, password, remember = false) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await apiLogin({ email, password });

//       // Assuming response contains token and user data
//       const { token, user: userData } = response;

//       // Set cookies and update state
//       setAuthCookies(token, userData, remember);
//       setUser(userData);

//       return { success: true };
//     } catch (err) {
//       setError("Login failed");
//       return { success: false, error: "Login failed" };
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const register = async (fullName, email, password) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await apiRegister({ fullName, email, password });

//       // Assuming response contains token and user data
//       const { token, user: userData } = response;

//       // Set cookies and update state
//       setAuthCookies(token, userData, false); // Default to not remembered for new registrations
//       setUser(userData);

//       return { success: true };
//     } catch (err) {
//       setError("Registration failed");
//       return { success: false, error: "Registration failed" };
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = () => {
//     clearAuthCookies();
//     setUser(null);
//     setCartCount(0);
//   };

//   const updateCartCount = (count) => {
//     setCartCount(count);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         cartCount,
//         isLoading,
//         error,
//         login,
//         register,
//         logout,
//         updateCartCount,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
