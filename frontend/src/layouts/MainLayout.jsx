import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Dashboard from "../pages/Dashboard/Dashboard";

function MainLayout() {
  return (
    <div className="flex h-screen bg-slate-950">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 bg-slate-900 p-6 overflow-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;