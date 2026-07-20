"use client";
import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email || !password){
      console.log("Validation Failed");
      setError("Please Fill email or password")
      return
    }
    console.log("Validation passed");
    setError("")
    setLoading(true);

    await new Promise((res) => setTimeout(res, 2000));

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (error)}
      <Input
        label="Email"
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />
      <Input
        label="Password"
        placeholder=" Enter your password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
{password }{email}
      <Button type="submit" disabled={loading}>{loading ? "loading" : "LogIn"}</Button>
    </form>
  );
}

export default LoginForm;
