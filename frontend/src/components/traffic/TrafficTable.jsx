function TrafficTable({ traffic }) {
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

            {traffic.length > 0 ? (

              traffic.map((record) => (

                <tr
                  key={record.Record_ID}
                  className="border-b border-slate-800 hover:bg-slate-800"
                >

                  <td className="py-3 text-white">
                    {record.Record_ID}
                  </td>

                  <td className="text-white">
                    {record.Road_ID}
                  </td>

                  <td className="text-white">
                    {record.Vehicle_Count}
                  </td>

                  <td className="text-white">
                    {record.Avg_Speed} km/h
                  </td>

                  <td className="text-white">
                    {record.Weather}
                  </td>

                  <td className="text-white">
                    {record.Traffic_Density}
                  </td>

                  <td>
                    <span
                      className={
                        record.Accident === "Yes"
                          ? "text-red-400 font-semibold"
                          : "text-green-400 font-semibold"
                      }
                    >
                      {record.Accident}
                    </span>
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="7"
                  className="py-8 text-center text-slate-500"
                >
                  Search a Road ID or select a Weather/Density filter.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default TrafficTable;