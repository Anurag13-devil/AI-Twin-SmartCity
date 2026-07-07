import { NavLink } from "react-router-dom";
import navigation from "../../routes/navigation";

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="px-8 py-8">
        <h1 className="text-cyan-400 text-3xl font-bold">
          AI Twin
        </h1>

        <p className="text-slate-400 mt-1">
          Smart City Platform
        </p>
      </div>

      <div className="border-t border-slate-800"></div>

      <nav className="flex-1 px-4 py-6">

        {navigation.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-4
                px-4
                py-3
                mb-2
                rounded-xl
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                }
                `
              }
            >

              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>

            </NavLink>

          );

        })}

      </nav>

    </aside>
  );
}

export default Sidebar;