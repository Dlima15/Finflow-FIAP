import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "🏠 Início" },
    { to: "/dashboard", label: "💳 Dashboard" },
    { to: "/clientes", label: "👥 Clientes" },
    { to: "/novo-cliente", label: "➕ Novo Cliente" },
  ];

  return (
    <aside className="bg-[#0D1325] w-64 min-h-screen p-6 flex flex-col justify-between border-r border-white/10">
      <div>
        <h2 className="text-2xl font-bold text-[#00FF88] mb-10 text-center">
          FinFlow Bank
        </h2>

        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-all text-white/70 hover:text-[#00FF88] ${
                location.pathname === link.to ? "text-[#00FF88]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="text-xs text-white/30 text-center mt-8">
        © 2025 FinFlow — Developed by Danilo Lima
      </div>
    </aside>
  );
}
