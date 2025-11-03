import { motion } from "framer-motion";

function formatarDataPTBR(date = new Date()) {
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Header() {
  return (
    <header className="relative rounded-2xl p-5 md:p-6 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#7F00FF]/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#00BFFF]/30 rounded-full blur-3xl" />

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Olá, Administrador <span className="opacity-90">👋</span>
          </h2>
          <p className="text-sm text-zinc-300 mt-1">{formatarDataPTBR()}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#7F00FF] to-[#00BFFF] p-[2px]">
            <div className="h-full w-full rounded-full bg-[#0A0F1E] grid place-items-center text-white/80 text-sm">
              ADM
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 18 }}
        className="mt-4 h-[2px] w-full origin-left bg-gradient-to-r from-[#7F00FF] via-[#00FF88] to-[#00BFFF]"
      />
    </header>
  );
}
