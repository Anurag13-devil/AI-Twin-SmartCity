import { useState } from "react";

import TrafficSummary from "../../components/traffic/TrafficSummary";
import TrafficFilters from "../../components/traffic/TrafficFilters";
import TrafficTable from "../../components/traffic/TrafficTable";

function Traffic() {

  // Stores traffic records
  const [traffic, setTraffic] = useState([]);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold text-white">
          Traffic Management
        </h1>

        <p className="text-slate-400 mt-2">
          Live Traffic Monitoring & Analytics
        </p>

      </div>

      {/* Summary */}

      <TrafficSummary />

      {/* Filters */}

      <TrafficFilters
        setTraffic={setTraffic}
      />

      {/* Table */}

      <TrafficTable
        traffic={traffic}
      />

    </div>
  );
}

export default Traffic;