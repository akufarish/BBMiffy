"use client";

import useAuth from "@/app/_services/auth";
import { RegisterPayload } from "@/app/_utils/auth";
import React, { useState } from "react";

function RegisterForm() {
  const { Register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function doRegister(e: React.FormEvent) {
    e.preventDefault();

    const payload: RegisterPayload = {
      email: email,
      password: password,
      passwordConfirm: password,
      username: "Farish",
    };

    await Register(payload);
  }

  return (
    <>
      <form onSubmit={doRegister} className="flex flex-col gap-5">
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
          Register
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
