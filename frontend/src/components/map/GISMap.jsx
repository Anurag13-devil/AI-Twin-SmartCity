function GISMap() {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 h-[430px] flex flex-col">

      <div className="px-6 py-4 border-b border-slate-700">
        <h2 className="text-xl font-semibold text-white">
          🌍 Smart City GIS
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Live Digital Twin Visualization
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center">

        <div className="text-center">

          <div className="text-7xl mb-4">
            🗺️
          </div>

          <p className="text-slate-400 text-lg">
            GIS Map will be integrated here
          </p>

          <p className="text-slate-500 text-sm mt-2">
            ArcGIS / Leaflet / Mapbox
          </p>

        </div>

      </div>

    </div>
  );
}

export default GISMap;