"use client";

import React from "react";

function RegisterForm() {
  return (
    <>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white font-bold text-sm">
            Email or username
          </label>
          <input
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

export default RegisterForm;
