import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="h-screen p-4">
      <div className="h-full flex flex-col">
        <Navbar />
        <div className="flex flex-1 min-h-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
