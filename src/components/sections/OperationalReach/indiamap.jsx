import indiaMap from "../../../assets/maps/india.svg";

const locations = [
  {
    name: "Bengaluru (HQ)",
    top: "72%",
    left: "36%",
    query: "Bengaluru Karnataka",
  },
  {
    name: "Chennai",
    top: "80%",
    left: "44%",
    query: "Chennai Tamil Nadu",
  },
  {
    name: "Hyderabad",
    top: "64%",
    left: "42%",
    query: "Hyderabad Telangana",
  },
  {
    name: "Pune",
    top: "58%",
    left: "29%",
    query: "Pune Maharashtra",
  },
  {
    name: "Ahmedabad",
    top: "42%",
    left: "20%",
    query: "Ahmedabad Gujarat",
  },
  {
    name: "Jaipur",
    top: "32%",
    left: "25%",
    query: "Jaipur Rajasthan",
  },
];

export default function IndiaMap() {
  const openMaps = (query) => {
    window.open(
      `https://www.google.com/maps/search/${encodeURIComponent(query)}`,
      "_blank",
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <img src={indiaMap} alt="India Map" className="w-full select-none" />

      {locations.map((location) => (
        <button
          key={location.name}
          onClick={() => openMaps(location.query)}
          title={location.name}
          className="absolute group"
          style={{
            top: location.top,
            left: location.left,
            transform: "translate(-50%,-50%)",
          }}
        >
          <span className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70"></span>

            <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-600 border-2 border-white shadow-lg"></span>
          </span>

          <span
            className="
              absolute
              left-1/2
              -translate-x-1/2
              mt-3
              whitespace-nowrap
              bg-slate-900
              text-white
              text-xs
              px-3
              py-1
              rounded-lg
              opacity-0
              group-hover:opacity-100
              transition
            "
          >
            {location.name}
          </span>
        </button>
      ))}
    </div>
  );
}
