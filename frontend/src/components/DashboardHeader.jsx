export default function DashboardHeader() {
  const hoje = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="dashboard-header">
      <h1 className="text-3xl font-bold text-[var(--color-accent-green)] drop-shadow-[0_0_8px_rgba(25,245,141,0.25)]">
        Olá, Administrador 👋
      </h1>

      <p className="subtext flex items-center gap-2 text-[var(--color-text-secondary)]">
        <span className="status-dot" />
        Servidor Online • {hoje}
      </p>
    </header>

    
  );

  <h1 className="text-3xl font-bold text-[#00FF88] mb-8">
  💳 FinFlow Dashboard
  </h1>

}
