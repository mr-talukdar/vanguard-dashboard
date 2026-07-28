import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Dashboard from "../components/dashboard/Dashboard";

const App = () => {
  return (
    <div className="h-screen p-4">
      <div className="h-full flex flex-col">
        <Navbar />
        <div className="flex flex-1 gap-2 min-h-0">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
