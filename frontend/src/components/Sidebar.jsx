import { FiHome, FiUsers, FiSettings } from "react-icons/fi";

export default function Sidebar() {
  const items = [
    { icon: <FiHome />, label: "Dashboard" },
    { icon: <FiUsers />, label: "Clientes" },
    { icon: <FiSettings />, label: "Configurações" },
  ];

  return (
    <aside className="hidden md:flex w-60 flex-col bg-[#0E1528] border-r border-white/10 py-6 px-4">
      <h1 className="text-2xl font-semibold text-white mb-8 text-center">FinFlow 💸</h1>
      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition"
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-auto text-xs text-white/40 text-center pt-8">© 2025 FinFlow</div>
    </aside>
  );
}
