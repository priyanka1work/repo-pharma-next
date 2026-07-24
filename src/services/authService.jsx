async function login({ email, password }) {
  await new Promise((res) => setTimeout(res, 2000));
  if (email == "admin@123.com" && password == "admin") {
    return {
      success: true,
      user: {
        id: 1,
        name: "Admin",
        email,
      },
    };
  } else {
    return{
        success: false,
        message: "Invalid email or password",
    }
  }
}

export default login;
