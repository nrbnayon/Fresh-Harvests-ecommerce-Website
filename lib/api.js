// // lib/api.js
// // import { cookies } from "./cookies";

// const mockProducts = [
//   {
//     id: "1",
//     name: "Fresh Coconut",
//     price: 6.3,
//     image: "/products/coconut.jpg",
//     category: "fruits",
//   },
//   {
//     id: "2",
//     name: "Organic Kiwi",
//     price: 5.3,
//     image: "/products/kiwi.jpg",
//     category: "fruits",
//   },
//   {
//     id: "3",
//     name: "Sweet Orange",
//     price: 4.2,
//     image: "/products/orange.jpg",
//     category: "fruits",
//   },
//   {
//     id: "4",
//     name: "Fresh Guava",
//     price: 2.2,
//     image: "/products/guava.jpg",
//     category: "fruits",
//   },
//   {
//     id: "5",
//     name: "Eggplant",
//     price: 1.2,
//     image: "/products/eggplant.jpg",
//     category: "vegetables",
//   },
// ];

// // API Configuration
// const BASE_URL =
//   process.env.NEXT_PUBLIC_API_URL ||
//   "api-fresh-harvest.code-commando.com/api/v1";

// // Custom error class
// class APIError extends Error {
//   constructor(message, status) {
//     super(message);
//     this.status = status;
//     this.name = "APIError";
//   }
// }

// // Helper function to handle API responses
// async function handleResponse(response) {
//   const contentType = response.headers.get("content-type");
//   const isJson = contentType?.includes("application/json");

//   console.debug("API Response:", { status: response.status, contentType });

//   if (!response.ok) {
//     const error = isJson ? await response.json() : await response.text();
//     console.error("API Error:", { error, status: response.status });
//     throw new APIError(error.message || response.statusText, response.status);
//   }

//   return isJson ? response.json() : response;
// }

// // Fetch wrapper with timeout and abort controller
// async function fetchWithTimeout(url, options = {}, timeout = 5000) {
//   console.debug("API Request:", { url, options, timeout });

//   const controller = new AbortController();
//   const timeoutId = setTimeout(() => controller.abort(), timeout);

//   try {
//     const response = await fetch(url, {
//       ...options,
//       signal: controller.signal,
//       headers: {
//         "Content-Type": "application/json",
//         ...options.headers,
//       },
//     });
//     return await handleResponse(response);
//   } catch (error) {
//     if (error.name === "AbortError") {
//       console.error("API Timeout:", { url, timeout });
//       throw new APIError("Request timed out", 408);
//     }
//     console.error("API Fetch Error:", error);
//     throw error;
//   } finally {
//     clearTimeout(timeoutId);
//   }
// }

// // Get auth headers from cookies
// const getAuthHeaders = () => {
//   const token = cookies.getToken();
//   if (!token) {
//     console.warn("No auth token found in cookies");
//   }
//   return token ? { Authorization: `Bearer ${token}` } : {};
// };

// // Products API
// export async function fetchProducts(params = {}) {
//   console.debug("Fetching products with params:", params);

//   if (process.env.NODE_ENV === "development") {
//     console.debug("Returning mock products (development mode)");
//     return mockProducts;
//   }

//   const queryString = new URLSearchParams(params).toString();
//   const url = `${BASE_URL}/products${queryString ? `?${queryString}` : ""}`;

//   return fetchWithTimeout(url);
// }

// export async function fetchProduct(id) {
//   console.debug("Fetching product with ID:", id);

//   if (process.env.NODE_ENV === "development") {
//     const product = mockProducts.find((p) => p.id === id);
//     if (!product) {
//       console.error("Mock product not found:", id);
//       throw new APIError("Product not found", 404);
//     }
//     return product;
//   }

//   return fetchWithTimeout(`${BASE_URL}/products/${id}`);
// }

// // Authentication API
// export async function login(credentials) {
//   console.debug("Logging in with credentials:", credentials);

//   return fetchWithTimeout(`${BASE_URL}/auth/login`, {
//     method: "POST",
//     body: JSON.stringify(credentials),
//   });
// }

// export async function register(userData) {
//   console.debug("Registering user with data:", userData);

//   return fetchWithTimeout(`${BASE_URL}/users/register`, {
//     method: "POST",
//     body: JSON.stringify(userData),
//   });
// }

// // Cart API
// export async function addToCart(productId, quantity) {
//   console.debug("Adding to cart:", { productId, quantity });

//   const headers = getAuthHeaders();
//   if (!headers.Authorization) {
//     console.error("User not authenticated");
//     throw new APIError("User not authenticated", 401);
//   }

//   return fetchWithTimeout(`${BASE_URL}/cart/items`, {
//     method: "POST",
//     headers: {
//       ...headers,
//     },
//     body: JSON.stringify({ productId, quantity }),
//   });
// }

// // Categories API
// export async function fetchCategories() {
//   console.debug("Fetching categories");

//   return fetchWithTimeout(`${BASE_URL}/category`);
// }

// const api = {
//   fetchProducts,
//   fetchProduct,
//   login,
//   register,
//   addToCart,
//   fetchCategories,
// };

// export default api;
