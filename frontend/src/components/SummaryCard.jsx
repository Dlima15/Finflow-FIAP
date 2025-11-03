import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function SummaryCard({ title, value, icon, color = "#00FF88", suffix = "" }) {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex-1 min-w-[220px] rounded-2xl p-5 bg-[#0E1425]/80 border border-white/10 shadow-[0_0_24px_rgba(0,255,136,0.15)] hover:shadow-[0_0_36px_rgba(0,191,255,0.25)] transition-shadow"
      style={{ boxShadow: `0 0 22px ${color}25` }}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-zinc-300">{title}</h4>
        <div className="text-xl" style={{ color }}>{icon}</div>
      </div>
      <div className="mt-2 text-3xl font-semibold text-white tracking-tight">
        {typeof value === "number" ? (
          <CountUp end={value} duration={1.2} separator="." suffix={suffix} />
        ) : (
          <span>{value}</span>
        )}
      </div>
    </motion.div>
  );
}
