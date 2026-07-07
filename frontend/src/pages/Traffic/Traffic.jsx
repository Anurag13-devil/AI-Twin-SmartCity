import TrafficSummary from "../../components/traffic/TrafficSummary";
import TrafficFilters from "../../components/traffic/TrafficFilters";
import TrafficTable from "../../components/traffic/TrafficTable";

function Traffic() {
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

      <TrafficFilters />

      {/* Table */}

      <TrafficTable />

    </div>
  );
}

export default Traffic;