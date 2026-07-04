function DashboardCharts() {
  return (
    <div className="grid grid-cols-2 gap-6">

      <div className="bg-slate-900 rounded-2xl border border-slate-700 h-72 flex items-center justify-center">

        <div className="text-center">

          <div className="text-5xl">
            📊
          </div>

          <p className="text-slate-400 mt-4">
            Traffic Analytics
          </p>

        </div>

      </div>

      <div className="bg-slate-900 rounded-2xl border border-slate-700 h-72 flex items-center justify-center">

        <div className="text-center">

          <div className="text-5xl">
            📈
          </div>

          <p className="text-slate-400 mt-4">
            Smart City Statistics
          </p>

        </div>

      </div>

    </div>
  );
}

export default DashboardCharts;