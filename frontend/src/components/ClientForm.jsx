import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { postCliente } from "../utils/api";
import { FiUserPlus } from "react-icons/fi";

const campos = [
  { name: "nome", label: "Nome completo", type: "text", autoComplete: "name" },
  { name: "cpf", label: "CPF", type: "text", autoComplete: "off", mask: "999.999.999-99" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "senha", label: "Senha", type: "password", autoComplete: "new-password" },
];

export default function ClientForm({ onCreated }) {
  const [form, setForm] = useState({ nome: "", cpf: "", email: "", senha: "" });
  const [loading, setLoading] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!form.nome || !form.cpf || !form.email || !form.senha) {
      toast.warn("Preencha todos os campos.");
      return;
    }
    try {
      setLoading(true);
      const novo = await postCliente(form);
      onCreated?.(novo);
      setForm({ nome: "", cpf: "", email: "", senha: "" });
      toast.success("Cliente cadastrado com sucesso!");
    } catch (err) {
      toast.error("Erro ao cadastrar cliente.");
      // console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const Field = ({ name, label, type, autoComplete }) => (
    <div className="relative group">
      <input
        name={name}
        id={name}
        type={type}
        autoComplete={autoComplete}
        value={form[name]}
        onChange={onChange}
        required
        className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-[#111829]/90 border border-[#00BFFF33]
          text-white placeholder-transparent outline-none
          focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF33] transition"
        placeholder={label}
      />
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-4 top-2 text-xs text-zinc-300/90
          transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-zinc-400
          peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#00BFFF]"
      >
        {label}
      </label>
    </div>
  );

  return (
    <motion.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="rounded-2xl p-5 md:p-6 bg-white/5 border border-white/10 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-tr from-[#7F00FF] to-[#00BFFF] text-white">
          <FiUserPlus />
        </div>
        <h3 className="text-lg font-semibold text-white">Cadastrar novo cliente</h3>
      </div>

      <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
        {campos.map(c => (
          <Field key={c.name} {...c} />
        ))}

        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          disabled={loading}
          className="md:col-span-2 h-12 rounded-xl font-semibold text-white
            bg-gradient-to-r from-[#7F00FF] to-[#00BFFF]
            shadow-[0_0_24px_rgba(127,0,255,0.35)]
            hover:shadow-[0_0_36px_rgba(0,191,255,0.45)]
            transition disabled:opacity-60"
        >
          {loading ? "Cadastrando..." : "Cadastrar Cliente 🚀"}
        </motion.button>
      </form>
    </motion.section>
  );
}
