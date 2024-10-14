interface HeaderProps {
  label: string;
}

const Header = ({ label }: Readonly<HeaderProps>) => {
  return (
    <div className=" w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold"> 🔐Auth</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
        {label}
      </p>
    </div>
  );
};

export default Header;
