"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Social() {
  return (
    <div className="flex items-center  gap-x-2 w-full">
      <Button
        size={"lg"}
        variant={"mybutton"}
        className="w-full"
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" />
        <p className="pl-2">Google</p>
      </Button>
      <Button
        size={"lg"}
        variant={"mybutton"}
        className="w-full"
        onClick={() => {}}
      >
        <FaGithub className="h-5 w-5" />
        <p className="pl-2">Github</p>
      </Button>
    </div>
  );
}
