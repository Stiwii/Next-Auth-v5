import Navbar from "@/app/(protected)/_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="min-h-screen  max-h-max h-full w-full flex flex-col gap-y-10 items-center justify-center overflow-y-auto bg-red">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
