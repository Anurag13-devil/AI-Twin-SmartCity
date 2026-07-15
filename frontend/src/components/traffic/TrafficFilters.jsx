import { useState, useEffect } from "react";
import {
  getAllTraffic,
  filterTraffic,
} from "../../services/trafficService";

function TrafficFilters({ setTraffic }) {
  const [roadId, setRoadId] = useState("");
  const [weather, setWeather] = useState("");
  const [density, setDensity] = useState("");

  // Load traffic records
  async function loadTraffic() {
    try {
      // No filters selected -> show all records
      if (!roadId && !weather && !density) {
        const data = await getAllTraffic();
        setTraffic(data);
        return;
      }

      // Apply combined filters
      const data = await filterTraffic(
        roadId,
        weather,
        density
      );

      setTraffic(data);
    } catch (error) {
      console.error(error);
    }
  }

  // Initial Load
  useEffect(() => {
    loadTraffic();
  }, []);

  // Reload whenever filters change
  useEffect(() => {
    loadTraffic();
  }, [roadId, weather, density]);

  // Reset all filters
  function resetFilters() {
    setRoadId("");
    setWeather("");
    setDensity("");
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

      <div className="grid md:grid-cols-4 gap-4">

        {/* Search Road ID */}

        <input
          type="text"
          placeholder="Search Road ID..."
          value={roadId}
          onChange={(e) => setRoadId(e.target.value)}
          className="bg-slate-800 rounded-lg p-3 text-white outline-none"
        />

        {/* Weather */}

        <select
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
          className="bg-slate-800 rounded-lg p-3 text-white"
        >
          <option value="">All Weather</option>
          <option value="Clear">Clear</option>
          <option value="Fog">Fog</option>
          <option value="Rain">Rain</option>
          <option value="Storm">Storm</option>
          <option value="Snow">Snow</option>
        </select>

        {/* Density */}

        <select
          value={density}
          onChange={(e) => setDensity(e.target.value)}
          className="bg-slate-800 rounded-lg p-3 text-white"
        >
          <option value="">All Density</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Very High">Very High</option>
        </select>

        {/* Reset Button */}

        <button
          onClick={resetFilters}
          className="bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition"
        >
          Reset Filters
        </button>

      </div>

    </div>
  );
}

export default TrafficFilters;