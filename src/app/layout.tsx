import type { Metadata } from "next";
import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

import { balooTamma2 } from "@/fonts/fonts";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Auth",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${balooTamma2.variable} antialiased   w-full min-h-screen max-h-max  overflow-auto `}
        >
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
