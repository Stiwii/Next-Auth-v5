import LoginButton from "@/components/auth/login-button";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full ">
      <ThemeToggle />
      <div className="space-y-4 text-center">
        <h1 className="text-4xl fontbold"> 🔐AUTH</h1>
        <p className="text-lg">A simple authentication</p>
        <div>
          <LoginButton>
            <Button variant="default" size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
