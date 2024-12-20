import { ExtendedUser } from "@/next-auth";

interface UserInfoProps {
  user?: ExtendedUser | null;
  label: string;
}

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function UserInfo({ user, label }: Readonly<UserInfoProps>) {
  return (
    <Card className="max-w-[600px] w-full shadow-md ">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex  items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 dark:bg-slate-800 rounded-md">
            {user?.id}
          </p>
        </div>
        <div className="flex  items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 dark:bg-slate-800 rounded-md">
            {user?.name}
          </p>
        </div>
        <div className="flex  items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 dark:bg-slate-800 rounded-md">
            {user?.email}
          </p>
        </div>
        <div className="flex  items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 dark:bg-slate-800 rounded-md">
            {user?.role}
          </p>
        </div>
        <div className="flex  items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
