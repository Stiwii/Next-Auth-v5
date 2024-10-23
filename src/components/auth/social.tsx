"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export default function Social() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: callbackUrl ?? DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <div className="flex items-center  gap-x-2 w-full">
      <Button
        size={"lg"}
        variant={"mybutton"}
        className="w-full"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
        <p className="pl-2">Google</p>
      </Button>
      <Button
        size={"lg"}
        variant={"mybutton"}
        className="w-full"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />
        <p className="pl-2">Github</p>
      </Button>
    </div>
  );
}
