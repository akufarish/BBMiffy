import React from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import LoginForm from "./LoginForm";
import Oauth from "@/app/_components/Oauth";
import Link from "next/link";

function LoginPage() {
  return (
    <section className="flex flex-col gap-4 items-center">
      <Image src={logo} width={50} height={50} alt="logo" />
      <h1 className="text-white font-bold text-3xl my-5">Log in to BBMIFFY</h1>

      <Oauth />
      <div className="w-full border border-gray-500 my-2.5"></div>
      <LoginForm />
      <div className="w-full border border-gray-500 my-2.5"></div>
      <div className="flex justify-between items-center gap-4">
        <p className="text-gray-400">Don't have an account?</p>
        <Link href={"/register"} className="text-white underline">
          Sign up for BBMIFFY
        </Link>
      </div>
    </section>
  );
}

export default LoginPage;
