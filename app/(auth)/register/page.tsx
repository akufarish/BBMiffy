import React from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Oauth from "@/app/_components/Oauth";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

function LoginPage() {
  return (
    <section className="flex flex-col gap-4 items-center">
      <Image src={logo} width={50} height={50} alt="logo" />
      <h1 className="text-white font-bold text-3xl my-5 w-60 text-center">
        Sign up to start listening
      </h1>

      <RegisterForm />
      <div className="w-full border border-gray-500 my-2.5"></div>
      <Oauth />
      <div className="w-full border border-gray-700 my-2.5"></div>
      <div className="flex justify-between items-center gap-4">
        <p className="text-gray-400">Already have an account? </p>
        <Link href={"/register"} className="text-white underline">
          Log in here
        </Link>
      </div>
    </section>
  );
}

export default LoginPage;
