import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null; // Mientras la sesión está cargando
  }

  return session?.user;
};
