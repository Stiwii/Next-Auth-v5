"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary flex justify-between p-4 rounded-xl max-w-[600px] w-full shadow-sm">
      <div className="flex  gap-x-2">
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "mybutton"}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "default" : "mybutton"}
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/admin" ? "default" : "mybutton"}
        >
          <Link href="/admin">Admin</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "mybutton"}
        >
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
}
