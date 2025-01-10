"use client";

import React, { createContext, useContext, useState } from "react";
import { login as apiLogin, register as apiRegister } from "@/lib/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiLogin({ email, password });
      localStorage.setItem("token", response.token);
      setUser(response.user);
    } catch (err) {
      setError("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (fullName, email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiRegister({ fullName, email, password });
      localStorage.setItem("token", response.token);
      setUser(response.user);
    } catch (err) {
      setError("Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setCartCount(0);
  };

  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        cartCount,
        isLoading,
        error,
        login,
        register,
        logout,
        updateCartCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
