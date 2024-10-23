import { useSession } from "next-auth/react";

export default function useCurrentRole() {
  const session = useSession({ required: true });
  return session.data?.user?.role;
}
