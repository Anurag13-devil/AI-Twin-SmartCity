function TrafficSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
        <p className="text-slate-400">Total Vehicles</p>
        <h2 className="text-3xl font-bold text-cyan-400 mt-2">
          ...
        </h2>
      </div>

      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
        <p className="text-slate-400">Average Speed</p>
        <h2 className="text-3xl font-bold text-green-400 mt-2">
          ...
        </h2>
      </div>

      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
        <p className="text-slate-400">Total Accidents</p>
        <h2 className="text-3xl font-bold text-red-400 mt-2">
          ...
        </h2>
      </div>

      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
        <p className="text-slate-400">Traffic Records</p>
        <h2 className="text-3xl font-bold text-yellow-400 mt-2">
          ...
        </h2>
      </div>

    </div>
  );
}

export default TrafficSummary;