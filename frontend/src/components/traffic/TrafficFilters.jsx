function TrafficFilters() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="Search Road ID..."
          className="bg-slate-800 rounded-lg p-3 text-white outline-none"
        />

        <select className="bg-slate-800 rounded-lg p-3 text-white">
          <option>All Weather</option>
        </select>

        <select className="bg-slate-800 rounded-lg p-3 text-white">
          <option>All Density</option>
        </select>

      </div>

    </div>
  );
}

export default TrafficFilters;