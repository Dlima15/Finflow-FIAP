import { FiLoader } from "react-icons/fi";

export default function ClientsTable({ clientes, loading }) {
  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'var(--color-accent-blue)' }}>
        <FiLoader size={24} style={{ animation: 'spin 2s linear infinite' }} />
        <p style={{ marginTop: '10px' }}>Carregando dados dos clientes...</p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (clientes.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: 'var(--color-text-muted)' }}>
        <p>Nenhum cliente cadastrado ainda.</p>
      </div>
    );
  }

  return (
    <div className="clients-table-container">
      <table className="clients-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={cliente.id || index}>
              <td data-label="ID">
                <span className="client-id-badge">#{cliente.id}</span>
              </td>
              <td data-label="Nome">{cliente.nome}</td>
              <td data-label="CPF">{cliente.cpf}</td>
              <td data-label="Email">{cliente.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}