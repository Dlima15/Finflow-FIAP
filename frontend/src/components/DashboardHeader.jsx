export default function DashboardHeader() {
  const hoje = new Date().toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="mb-8">
      <h2 className="text-3xl font-semibold text-white">Olá, Administrador 👋</h2>
      <p className="text-white/60">{hoje}</p>
    </header>
  );
}
