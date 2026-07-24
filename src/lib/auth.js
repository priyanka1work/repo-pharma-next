const { cookies } = require("next/headers");

export function login() {
  //session id
  // setcookie
  const sessionID = "FakeId123456";
  document.cookies = `sessionId:${sessionID}; path=/`;
}

export function isAuthenticated() {}

export function logout() {
  document.cookies = `sessionId:${sessionID}; expires:Thur 1 jan 1970 00:00:00 GMT; path=/`;
}

export function getSession() {
  const cookies = document.cookie;

  const cookieArray = cookies.split(";");

  for (let cookie of cookieArray) {
    cookie = cookie.trim();

    if (cookie.startsWith("sessionId=")) {
      return cookie.substring(10);
    }
  }

  return null;
}
