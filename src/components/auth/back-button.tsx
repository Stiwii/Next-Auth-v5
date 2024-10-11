"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton = ({ href, label }: Readonly<BackButtonProps>) => {
  return (
    <Button variant={"link"} size={"sm"}>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;