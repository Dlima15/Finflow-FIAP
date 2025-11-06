// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { getContas, getTransacoes, postTransacao } from "../utils/api";

export default function Dashboard() {
  const [contas, setContas] = useState([]);
  const [transacoes, setTransacoes] = useState([]);
  const [nova, setNova] = useState({ tipo: "credito", valor: "", descricao: "" });
  const [carregando, setCarregando] = useState(true);

  // ✅ Corrigido — carrega os dados assim que o componente monta
  useEffect(() => {
    carregarDados();
  }, []);

  // ✅ Busca contas e transações
  async function carregarDados() {
    try {
      setCarregando(true);
      const contasData = await getContas();
      const transacoesData = await getTransacoes();
      setContas(contasData || []);
      setTransacoes(transacoesData || []);
    } catch (err) {
      console.error("Erro ao carregar dados:", err);
      alert("⚠️ Erro ao conectar com o servidor. Verifique se o backend está rodando.");
    } finally {
      setCarregando(false);
    }
  }

  // ✅ Envia nova transação (com validação)
  async function enviarTransacao() {
    if (contas.length === 0) {
      alert("⚠️ Nenhuma conta encontrada. Cadastre uma conta antes de adicionar transações.");
      return;
    }
    if (!nova.valor || parseFloat(nova.valor) <= 0) {
      alert("⚠️ Informe um valor válido para a transação.");
      return;
    }

    const contaId = contas[0].id;
    try {
      await postTransacao(contaId, nova);
      setNova({ tipo: "credito", valor: "", descricao: "" });
      await carregarDados();
    } catch (err) {
      console.error("Erro ao enviar transação:", err);
      alert("⚠️ Erro ao enviar transação. Veja o console para detalhes.");
    }
  }

  // ✅ Se ainda estiver carregando
  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0F1E] text-white">
        <p className="text-lg animate-pulse">🔄 Carregando dados do banco...</p>
      </div>
    );
  }

  // ✅ Interface principal
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white p-10">
      <h1 className="text-3xl font-bold text-[#00FF88] mb-8">FinFlow Bank Dashboard 💳</h1>

      {/* SALDO */}
      <div className="bg-white/10 p-6 rounded-2xl mb-8 shadow-lg">
        <h2 className="text-xl mb-2">💰 Saldo Atual</h2>
        <p className="text-4xl font-bold">
          R$
          {contas[0]?.saldo?.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          }) ?? "0,00"}
        </p>
        <p className="text-sm text-white/60 mt-1">
          Conta: {contas[0]?.numero ?? "—"}
        </p>
      </div>

      {/* NOVA TRANSAÇÃO */}
      <div className="bg-white/10 p-6 rounded-2xl mb-8 shadow-lg">
        <h2 className="text-xl mb-4">➕ Nova Transação</h2>
        <div className="flex gap-3 flex-wrap">
          <select
            value={nova.tipo}
            onChange={(e) => setNova({ ...nova, tipo: e.target.value })}
            className="bg-white/5 p-2 rounded border border-white/20"
          >
            <option value="credito">Crédito</option>
            <option value="debito">Débito</option>
          </select>
          <input
            type="number"
            placeholder="Valor"
            value={nova.valor}
            onChange={(e) => setNova({ ...nova, valor: e.target.value })}
            className="bg-white/5 p-2 rounded border border-white/20"
          />
          <input
            type="text"
            placeholder="Descrição"
            value={nova.descricao}
            onChange={(e) => setNova({ ...nova, descricao: e.target.value })}
            className="bg-white/5 p-2 rounded border border-white/20 flex-1"
          />
          <button
            onClick={enviarTransacao}
            className="bg-[#00FF88] hover:bg-[#00cc6f] text-black px-4 py-2 rounded font-bold transition"
          >
            Enviar
          </button>
        </div>
      </div>

      {/* HISTÓRICO */}
      <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl mb-4">📜 Histórico de Transações</h2>
        {transacoes.length === 0 ? (
          <p className="text-white/60">Nenhuma transação registrada ainda.</p>
        ) : (
          <div className="space-y-3">
            {transacoes.map((t) => (
              <div
                key={t.id}
                className={`flex justify-between items-center p-3 rounded-lg ${
                  t.tipo === "credito" ? "bg-green-500/20" : "bg-red-500/20"
                }`}
              >
                <span>{t.descricao}</span>
                <span className="font-mono">
                  {t.tipo === "credito" ? "+" : "-"} R$
                  {t.valor.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
