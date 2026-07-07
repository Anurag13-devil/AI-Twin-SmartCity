function TrafficTable() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

      <h2 className="text-2xl font-bold text-white mb-5">
        Traffic Records
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-slate-700 text-slate-400">

              <th className="py-3">ID</th>
              <th>Road</th>
              <th>Vehicles</th>
              <th>Speed</th>
              <th>Weather</th>
              <th>Density</th>
              <th>Accident</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="py-4 text-slate-500" colSpan="7">
                Loading Traffic Data...
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TrafficTable;