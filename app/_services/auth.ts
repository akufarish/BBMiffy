import { LoginPayload, RegisterPayload } from "../_utils/auth";
import pb from "./pocketbase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useAuth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  async function Login(payload: LoginPayload) {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(payload.identity, payload.password);
      console.log(authData);
      setIsLogin(true);
      document.cookie = `authToken=${pb.authStore.token}`;
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function Register(payload: RegisterPayload) {
    try {
      const record = await pb.collection("users").create(payload);
      console.log(record);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  }
  async function oAuth() {
    const authData = await pb
      .collection("users")
      .authWithOAuth2({ provider: "google" });
    console.log("auth", authData);
    document.cookie = `authToken=${pb.authStore.token}`;
    router.push("/");
  }

  async function logOut() {
    pb.authStore.clear();
  }

  return {
    Login,
    Register,
    isLogin,
    oAuth,
    logOut,
  };
}
