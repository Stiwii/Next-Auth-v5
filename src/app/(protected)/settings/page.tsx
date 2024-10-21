"use client";

import { logout } from "@/actions/logout";
import ThemeToggle from "@/components/ThemeToggle";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logout();
  };
  return (
    <div className="p-10 rounded-xl border-2 border-black dark:border-white">
      <ThemeToggle />

      <form action="">
        <button onClick={onClick} type="submit">
          Sign out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
