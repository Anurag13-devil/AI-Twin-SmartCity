import { useEffect, useState } from "react";

import {
  Car,
  CloudSun,
  Droplets,
  Leaf,
  ShieldAlert,
  Zap,
} from "lucide-react";

import { getDashboardSummary } from "../../services/trafficService";

function KpiCards() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboardSummary();
        setDashboard(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadDashboard();
  }, []);

  const cards = [
  {
    title: "Traffic",
    value: dashboard
      ? dashboard.total_vehicles.toLocaleString()
      : "...",
    subtitle: "Vehicles",
    icon: <Car size={28} />,
    color: "text-cyan-400",
  },
  {
    title: "Weather",
    value: "27°C",
    subtitle: "Clear Sky",
    icon: <CloudSun size={28} />,
    color: "text-yellow-400",
  },
  {
    title: "Air Quality",
    value: "AQI 72",
    subtitle: "Good",
    icon: <Leaf size={28} />,
    color: "text-green-400",
  },
  {
    title: "Water",
    value: "82%",
    subtitle: "Reservoir",
    icon: <Droplets size={28} />,
    color: "text-blue-400",
  },
  {
    title: "Energy",
    value: "91%",
    subtitle: "Efficiency",
    icon: <Zap size={28} />,
    color: "text-orange-400",
  },
  {
    title: "Crime",
    value: "14",
    subtitle: "Active Cases",
    icon: <ShieldAlert size={28} />,
    color: "text-red-400",
  },
];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-5
            transition-all
            duration-300
            hover:border-cyan-500
            hover:-translate-y-1
            hover:shadow-lg
            hover:shadow-cyan-500/10
          "
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-400 text-sm">
                {card.title}
              </p>

              <h2 className="text-white text-3xl font-bold mt-2">
                {card.value}
              </h2>

              <p className="text-slate-500 text-sm mt-1">
                {card.subtitle}
              </p>
            </div>

            <div className={card.color}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default KpiCards;