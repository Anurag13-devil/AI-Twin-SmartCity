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

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6">

        {navigation.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                flex
                items-center
                gap-4
                px-4
                py-3
                mb-2
                rounded-xl
                cursor-pointer
                text-slate-300
                hover:bg-slate-800
                hover:text-cyan-400
                transition-all
                duration-300
              "
            >

              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>

            </div>

          );

        })}

      </nav>

    </aside>
  );
}

export default Sidebar;