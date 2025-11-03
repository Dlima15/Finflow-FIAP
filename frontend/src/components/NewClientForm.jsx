import { useState } from "react";
import { toast } from "react-toastify";
import { postCliente } from "../utils/api";

export default function NewClientForm({ onCreated }) {
  const [form, setForm] = useState({ nome: "", cpf: "", email: "", senha: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const novo = await postCliente(form);
      onCreated(novo);
      setForm({ nome: "", cpf: "", email: "", senha: "" });
      toast.success("Cliente cadastrado!");
    } catch {
      toast.error("Erro ao cadastrar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
      <h3 className="text-lg font-semibold text-white mb-4">Cadastrar novo cliente</h3>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        {["nome", "cpf", "email", "senha"].map((f) => (
          <input
            key={f}
            name={f}
            type={f === "senha" ? "password" : "text"}
            placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
            value={form[f]}
            onChange={handleChange}
            required
            className="px-4 py-2.5 rounded-lg bg-[#111829] text-white border border-white/10 focus:ring-2 focus:ring-[#00BFFF] outline-none transition"
          />
        ))}
        <button
          type="submit"
          disabled={loading}
          className="col-span-2 bg-gradient-to-r from-[#7F00FF] to-[#00BFFF] hover:opacity-90 font-semibold py-2.5 rounded-lg mt-2 transition"
        >
          {loading ? "Cadastrando..." : "Cadastrar Cliente 🚀"}
        </button>
      </form>
    </div>
  );
}
