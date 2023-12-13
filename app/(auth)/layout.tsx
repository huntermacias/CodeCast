const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center">
      {/* <nav className="p-1 bg-red-500 w-full">Auth Navbar</nav> */}
      {children}
    </div>
  );
};

export default AuthLayout;
