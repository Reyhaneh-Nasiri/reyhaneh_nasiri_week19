// Set Cookie
export const setCookie = (name, value, maxAgeSeconds = 3600) => {
  document.cookie = [
    `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    `max-age=${maxAgeSeconds}`,
    "path=/",
  ].join("; ");
};

// Get Cookie
export const getCookie = (name) => {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split("=");

    if (cookieName === decodeURIComponent(name)) {
      return decodeURIComponent(cookieValue);
    }
  }

  return null;
};

// Remove Cookie
export const removeCookie = (name) => {
  document.cookie = [
    `${encodeURIComponent(name)}=`,
    "max-age=0",
    "path=/",
  ].join("; ");
};