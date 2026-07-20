const Navbar = () => {
  return (
    <div className="flex justify-center  h-screen">
      <div className=" font-bold text-gray-800">VANGUARD</div>
      <div className="text-2xl"> Welcome back, Architect! </div>
      <div className="text-lg text-amber-400">
        {" "}
        System Status : <span className="text-green-500">Online</span>{" "}
      </div>
    </div>
  );
};

export default Navbar;
