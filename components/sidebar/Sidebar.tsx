const Sidebar = () => {
  return (
    <div className="flex py-6 flex-col border-r border-gray-300 justify-between w-64 h-full">
      <div className="flex flex-col gap-1">
        <div className="px-4 py-3 rounded-lg font-bold"> Dashboard</div>
        <div className="px-4 py-3 rounded-lg font-medium"> Projects</div>
        <div className="px-4 py-3 rounded-lg font-medium"> Missions</div>
        <div className="px-4 py-3 rounded-lg font-medium"> Learning</div>
        <div className="px-4 py-3 rounded-lg font-medium"> System</div>
      </div>
      <div className="px-4 py-3 rounded-lg font-medium"> Settings</div>
    </div>
  );
};

export default Sidebar;
