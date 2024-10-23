"use client";

import useCurrentRole from "@/hooks/use-current-role";
import { FormError } from "@/components/form-error";
import { UserRole } from "@prisma/client";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export default function RoleGate({ children, allowedRole }: RoleGateProps) {
  const role = useCurrentRole();
  if (role !== allowedRole) {
    return <FormError message={`You don't have access to this content.`} />;
  }

  return <>{children}</>;
}
