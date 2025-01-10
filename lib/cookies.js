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
