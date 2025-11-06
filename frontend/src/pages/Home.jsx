export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0A0F1E] via-[#0F1536] to-[#0A0F1E] text-white text-center relative overflow-hidden px-6">
      {/* brilho de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(127,0,255,0.2),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(0,191,255,0.15),transparent_70%)] blur-3xl"></div>

      {/* Conteúdo */}
      <h1 className="text-6xl font-extrabold text-[#00FF88] mb-6 drop-shadow-[0_0_15px_#00FF88]">
        FinFlow Bank
      </h1>
      <p className="text-lg text-white/70 max-w-2xl mb-10 leading-relaxed">
        Uma nova geração de controle financeiro: simples, rápido e poderoso.  
        Gerencie contas, clientes e transações em um só lugar.
      </p>

      <a
        href="/dashboard"
        className="bg-[#00FF88] text-black font-bold px-8 py-3 rounded-full hover:bg-[#00cc6f] transition-all shadow-[0_0_15px_#00FF88]"
      >
        Acessar o sistema →
      </a>

      <p className="absolute bottom-6 text-xs text-white/30">
        © 2025 FinFlow — Developed by Danilo Lima
      </p>
    </div>
  );
}
