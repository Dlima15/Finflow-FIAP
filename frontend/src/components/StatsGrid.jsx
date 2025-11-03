import CountUp from "react-countup";

export default function StatsGrid({ stats }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between shadow-[0_0_24px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,191,255,0.25)] transition"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-white/70 font-medium">{s.title}</h3>
            <span className="text-xl" style={{ color: s.color }}>
              {s.icon}
            </span>
          </div>
          <div className="text-3xl font-bold mt-3 text-white">
            {typeof s.value === "number" ? <CountUp end={s.value} /> : s.value}
          </div>
        </div>
      ))}
    </div>
  );
}
