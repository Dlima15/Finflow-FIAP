import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="stats-card"
        >
          <div className="stats-card-title">
            <span className="icon text-[var(--color-accent-green)] text-lg">{s.icon}</span>
            {s.title}
          </div>

          <div className="stats-card-value">
            {typeof s.value === "number" ? (
              <CountUp end={s.value} duration={1.5} />
            ) : (
              s.value
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
