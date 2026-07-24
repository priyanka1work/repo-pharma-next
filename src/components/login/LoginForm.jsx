"use client";
import React, { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import login from "@/services/authService";
import { loginAuth } from "@/lib/auth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Validation Failed");
      setError("Please Fill email or password");
      return;
    }

    setLoading(true);
    setError("");
    const result = await login({ email, password });
    if (!result.success) {
      setError(result.message);
      setLoading(false);
      return;
    }
    if (result.success) {
      // localStorage.setItem("user",JSON.stringify(result.user))
      loginAuth()
      router.push("/dashboard");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && error}
      <Input
        label="Email"
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
      {password}
      {email}
      <Button type="submit" disabled={loading}>
        {loading ? "loading" : "LogIn"}
      </Button>
    </form>
  );
}

export default LoginForm;
