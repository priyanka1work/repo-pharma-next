export function loginAuth() {
  //session id
  // setcookie
  const sessionID = "FakeId123456";
  document.cookie = `sessionId=${sessionID}; path=/`;
}

export function isAuthenticated() {
  return getSession()!==null
}

export function logout() {
  document.cookie =
    "sessionId:; expires=  expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
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
