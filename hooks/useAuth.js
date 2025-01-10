import {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} from "@/redux/features/auth/authApiSlice";
import logger from "@/utils/logger";

export const useAuth = () => {
  const [loginMutation] = useLoginMutation();
  const [registerMutation] = useRegisterMutation();
  const [logoutMutation] = useLogoutMutation();

  const login = async (email, password) => {
    try {
      logger.debug("Login attempt in useAuth hook");
      const result = await loginMutation({ email, password }).unwrap();
      logger.debug("Login result:", result);

      if (!result.success) {
        logger.warn("Login failed:", result.error || "Unknown error");
        return { success: false, error: result.error || "Login failed" };
      }

      logger.info("Login successful in useAuth hook");
      return { success: true, data: result };
    } catch (error) {
      logger.error("Login error in useAuth hook:", error);
      return {
        success: false,
        error:
          error.data?.message ||
          error.message ||
          "Not found, please try again or register again",
      };
    }
  };

  const register = async (userData) => {
    try {
      logger.debug("Registration attempt in useAuth hook");
      logger.debug("Registration user data:", userData);

      const result = await registerMutation(userData).unwrap();
      logger.debug("Registration result:", result);

      if (!result.success) {
        logger.warn("Registration failed:", result.error || result.message);
        return { success: false, error: result.error || result.message };
      }

      logger.info("Registration successful in useAuth hook");
      return { success: true, data: result };
    } catch (error) {
      logger.error("Registration error in useAuth hook:", error);
      return {
        success: false,
        error:
          error.data?.message ||
          error.message ||
          "An unexpected error occurred during registration",
      };
    }
  };

  const logout = async () => {
    try {
      logger.debug("Logout attempt in useAuth hook");
      const result = await logoutMutation().unwrap();
      logger.debug("Logout result:", result);

      if (!result.success) {
        logger.warn("Logout failed:", result.error);
        return { success: false, error: result.error || "Logout failed" };
      }

      logger.info("Logout successful in useAuth hook");
      return { success: true };
    } catch (error) {
      logger.error("Logout error in useAuth hook:", error);
      return {
        success: false,
        error:
          error.data?.message || "An unexpected error occurred during logout",
      };
    }
  };

  // const profile = async();

  return { login, register, logout };
};
