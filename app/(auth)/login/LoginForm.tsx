"use client";

import useAuth from "@/app/_services/auth";
import { LoginPayload } from "@/app/_utils/auth";
import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Login } = useAuth();

  async function doLogin(e: React.FormEvent) {
    e.preventDefault();

    const payload: LoginPayload = {
      identity: email,
      password: password,
    };

    console.log(payload);

    await Login(payload);
  }

  return (
    <>
      <form onSubmit={doLogin} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white font-bold text-sm">
            Email or username
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            type="text"
            className="auth-input"
            placeholder="Email or username"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-white font-bold text-sm">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            type="password"
            className="auth-input"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="w-[324px] h-[48px] rounded-full text-black bg-green-500 font-bold"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
