"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle";
import Social from "@/components/auth/social";
import Header from "@/components/auth/header";
import BackButton from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export default function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: Readonly<CardWrapperProps>) {
  return (
    <Card className="flex flex-col justify-center  max-w-[350px] w-full sm:max-w-[400px] shadow-lg shadow-black dark:shadow-white border-2 border-gray-900 dark:border-white bg-white bg-opacity-75 dark:bg-transparent ">
      <ThemeToggle />
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter className="flex justify-center w-full">
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
}
