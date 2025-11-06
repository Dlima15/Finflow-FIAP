// src/utils/api.js
const BASE_URL = "http://localhost:8080/api";

/* ===============================
   CLIENTES
================================= */
export async function getClientes() {
  const res = await fetch(`${BASE_URL}/clientes`);
  if (!res.ok) throw new Error("Erro ao buscar clientes");
  return res.json();
}

/* ===============================
   CONTAS
================================= */
export async function getContas() {
  const res = await fetch(`${BASE_URL}/contas`);
  if (!res.ok) throw new Error("Erro ao buscar contas");
  return res.json();
}

export async function getContaById(id) {
  const res = await fetch(`${BASE_URL}/contas/${id}`);
  if (!res.ok) throw new Error("Conta não encontrada");
  return res.json();
}

/* ===============================
   TRANSAÇÕES
================================= */
export async function getTransacoes() {
  const res = await fetch(`${BASE_URL}/transacoes`);
  if (!res.ok) throw new Error("Erro ao buscar transações");
  return res.json();
}

export async function postTransacao(contaId, data) {
  try {
    // Garante que o valor seja numérico (o input HTML manda string)
    const body = {
      ...data,
      valor: parseFloat(data.valor),
    };

    const res = await fetch(`${BASE_URL}/transacoes/conta/${contaId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Erro ao criar transação:", errorText);
      throw new Error("Falha ao criar transação");
    }

    const json = await res.json();
    console.log("✅ Transação criada com sucesso:", json);
    return json;
  } catch (error) {
    console.error("Erro no postTransacao:", error);
    alert("⚠️ Erro ao enviar transação. Veja o console para detalhes.");
  }
}
