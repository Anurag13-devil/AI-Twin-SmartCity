import { useEffect, useState } from "react";
import { getDashboardSummary } from "../../services/trafficService";

function TrafficSummary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    async function loadSummary() {
      try {
        const data = await getDashboardSummary();
        setSummary(data);
      } catch (error) {
        console.error("Error loading dashboard summary:", error);
      }
    }

    loadSummary();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {/* Total Vehicles */}
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
        <p className="text-slate-400">Total Vehicles</p>

        <h2 className="text-3xl font-bold text-cyan-400 mt-2">
          {summary
            ? summary.total_vehicles.toLocaleString()
            : "..."}
        </h2>
      </div>

      {/* Average Speed */}
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
        <p className="text-slate-400">Average Speed</p>

        <h2 className="text-3xl font-bold text-green-400 mt-2">
          {summary
            ? `${summary.average_speed} km/h`
            : "..."}
        </h2>
      </div>

      {/* Total Accidents */}
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
        <p className="text-slate-400">Total Accidents</p>

        <h2 className="text-3xl font-bold text-red-400 mt-2">
          {summary
            ? summary.total_accidents
            : "..."}
        </h2>
      </div>

      {/* Traffic Records */}
      <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
        <p className="text-slate-400">Traffic Records</p>

        <h2 className="text-3xl font-bold text-yellow-400 mt-2">
          {summary
            ? summary.total_records
            : "..."}
        </h2>
      </div>

    </div>
  );
}

export default TrafficSummary;