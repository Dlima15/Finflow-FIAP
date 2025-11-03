export default function ClientsTable({ clientes, loading }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 overflow-x-auto">
      <h3 className="text-lg font-semibold text-white mb-4">Lista de clientes</h3>
      {loading ? (
        <p className="text-white/60">Carregando...</p>
      ) : (
        <table className="w-full text-sm border-separate border-spacing-y-2">
          <thead>
            <tr className="text-white/70">
              <th className="text-left px-3">Nome</th>
              <th className="text-left px-3">CPF</th>
              <th className="text-left px-3">Email</th>
              <th className="text-left px-3">ID</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr
                key={c.id}
                className="bg-[#0E1425] hover:bg-[#151C31] transition rounded-xl"
              >
                <td className="px-3 py-2">{c.nome}</td>
                <td className="px-3 py-2">{c.cpf}</td>
                <td className="px-3 py-2">{c.email}</td>
                <td className="px-3 py-2 text-white/50">{c.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
