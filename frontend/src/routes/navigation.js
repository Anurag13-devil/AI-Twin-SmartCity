import {
  LayoutDashboard,
  Car,
  CloudSun,
  Trees,
  Droplets,
  Zap,
  ShieldAlert,
  BrainCircuit,
  Settings,
} from "lucide-react";

const navigation = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Traffic",
    icon: Car,
    path: "/traffic",
  },
  {
    title: "Weather",
    icon: CloudSun,
    path: "/weather",
  },
  {
    title: "Air Quality",
    icon: Trees,
    path: "/aqi",
  },
  {
    title: "Water",
    icon: Droplets,
    path: "/water",
  },
  {
    title: "Energy",
    icon: Zap,
    path: "/energy",
  },
  {
    title: "Crime",
    icon: ShieldAlert,
    path: "/crime",
  },
  {
    title: "AI Prediction",
    icon: BrainCircuit,
    path: "/prediction",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default navigation;