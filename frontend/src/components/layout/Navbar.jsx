import {
  Bell,
  Search,
  Settings,
  UserCircle,
} from "lucide-react";

function Navbar() {
  return (
    <header className="h-20 bg-slate-950 border-b border-slate-800 px-8 flex items-center justify-between">

      {/* Left Section */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          AI Twin Smart City Monitoring Platform
        </p>
      </div>

      {/* Right Section */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="
              bg-slate-900
              border
              border-slate-700
              rounded-xl
              pl-11
              pr-4
              py-2
              w-64
              text-white
              outline-none
              focus:border-cyan-500
            "
          />

        </div>

        {/* Notification */}

        <button className="bg-slate-900 p-3 rounded-xl hover:bg-slate-800 transition">
          <Bell className="text-slate-300" size={20} />
        </button>

        {/* Settings */}

        <button className="bg-slate-900 p-3 rounded-xl hover:bg-slate-800 transition">
          <Settings className="text-slate-300" size={20} />
        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 bg-slate-900 rounded-xl px-4 py-2">

          <UserCircle
            className="text-cyan-400"
            size={34}
          />

          <div>

            <h3 className="text-white font-semibold">
              Admin
            </h3>

            <p className="text-xs text-slate-400">
              Smart City Control
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;