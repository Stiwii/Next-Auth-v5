"use client";

import { logout } from "@/actions/logout";
import { useTransition } from "react";

interface LogoutButtonProps {
  children: React.ReactNode;
}

export function LogoutButton({ children }: Readonly<LogoutButtonProps>) {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      logout().then(() => {
        window.location.reload();
      });
    });
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {isPending ? <span>Logging out...</span> : children}
    </span>
  );
}
