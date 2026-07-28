const Navbar = () => {
  return (
    <div className="flex flex-col gap-2 border-b border-gray-300 px-4 py-3 font-bold sm:flex-row sm:items-center sm:justify-between sm:gap-0">
      <div className="text-lg font-bold text-gray-800">VANGUARD</div>
      <div className="text-sm text-gray-700 sm:text-base">
        Welcome back, Architect!
      </div>
      <div className="text-sm text-amber-400 sm:text-lg">
        System Status: <span className="text-green-500">Online</span>
      </div>
    </div>
  );
};

export default Navbar;
