import { useState } from "react";

// Este é um componente mock, você deve substituir pela sua lógica real de formulário.
// A importância aqui é usar as classes de estilo: .input-field e .primary-button
export default function NewClientForm({ onCreated }) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !cpf || !email) return alert("Preencha todos os campos!");

    // Simulação de criação (Substitua pela sua chamada de API real)
    const novoCliente = { 
      id: Math.floor(Math.random() * 1000) + 5, 
      nome, 
      cpf, 
      email 
    };
    onCreated(novoCliente); 
    
    // Limpar campos
    setNome("");
    setCpf("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          placeholder="Nome Completo"
          className="input-field"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="CPF (ex: 123.456.789-00)"
          className="input-field"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          placeholder="Email (ex: cliente@email.com)"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Placeholder para um campo extra, como telefone ou endereço, se necessário */}
        <input
          type="text"
          placeholder="Telefone (Opcional)"
          className="input-field"
        />
      </div>
      
      <button type="submit" className="primary-button">
        Cadastrar Cliente
      </button>
    </form>
  );
}