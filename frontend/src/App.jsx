import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Importando ícones para os cards
import { FiUsers, FiActivity, FiServer, FiPlusCircle, FiList } from "react-icons/fi"; 

import Sidebar from "./components/Sidebar";
// import StatsGrid from "./components/StatsGrid"; // StatsGrid foi incorporado
import NewClientForm from "./components/NewClientForm";
import ClientsTable from "./components/ClientsTable";
import Footer from "./components/Footer";
import { getClientes } from "./utils/api";
import "./App.css"; 

export default function App() {
  // ===============================
  // 🎯 Estados e carregamento inicial
  // ===============================
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverOnline, setServerOnline] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getClientes();
        setClientes(data);
        setServerOnline(true);
      } catch {
        setServerOnline(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const total = clientes.length;
  // Exemplo de como formatar o nome para o último cadastrado (para evitar overflow)
  const ultimo = total ? clientes[total - 1].nome.split(" ")[0] + (clientes[total - 1].nome.split(" ").length > 1 ? " " + clientes[total - 1].nome.split(" ")[1].charAt(0) + "." : "") : "—";

  // ===============================
  // 💎 Layout Principal
  // ===============================
  return (
    <div className="app-container">
      <Sidebar /> {/* Menu Lateral */}

      <main className="main-content">
        {/* =======================
            HEADER / TÍTULO
        ======================== */}
        <header className="dashboard-header">
          <div className="header-title">
            <h1>
              Olá, Administrador <span className="wave">👋</span>
            </h1>
            <p className="header-date">
              {new Date().toLocaleDateString("pt-BR", { dateStyle: "full" })}
            </p>
          </div>
        </header>

        {/* =======================
            GRID DE ESTATÍSTICAS
        ======================== */}
        <section className="stats-section">
          <div className="stats-grid">
            {/* Card 1: Total de Clientes */}
            <div className="stats-card">
              <FiUsers className="stats-card-icon" />
              <h3>Total de Clientes</h3>
              <p className="stat-value">{total}</p>
            </div>

            {/* Card 2: Último Cadastrado */}
            <div className="stats-card">
              <FiActivity className="stats-card-icon" />
              <h3>Último Cadastrado</h3>
              <p className="stat-value">{ultimo}</p>
            </div>

            {/* Card 3: Status do Servidor */}
            <div className="stats-card">
              <FiServer 
                className="stats-card-icon"
                style={{ color: serverOnline ? "var(--color-accent-green)" : "var(--color-server-offline)" }}
              />
              <h3>Status do Servidor</h3>
              <p
                className="stat-value"
                style={{
                  color: serverOnline ? "var(--color-accent-green)" : "var(--color-server-offline)",
                  fontSize: '32px' // Ajuste de tamanho para o status (mais descritivo)
                }}
              >
                {serverOnline ? "Online Operacional" : "Offline Indisponível"}
              </p>
            </div>
          </div>
        </section>

        {/* =======================
            FORMULÁRIO NOVO CLIENTE
        ======================== */}
        <section className="panel card new-client-panel">
          <div className="panel-header">
            <FiPlusCircle className="sidebar-item-icon" style={{ marginRight: '8px', color: 'var(--color-accent-blue)' }} />
            <h2>Cadastrar Novo Cliente</h2>
          </div>
          <div className="panel-body">
            {/* O componente NewClientForm precisa usar as classes .input-field e .primary-button */}
            <NewClientForm onCreated={(novo) => setClientes((p) => [...p, novo])} />
          </div>
        </section>

        {/* =======================
            TABELA DE CLIENTES
        ======================== */}
        <section className="panel card table-panel">
          <div className="panel-header">
            <FiList className="sidebar-item-icon" style={{ marginRight: '8px', color: 'var(--color-accent-green)' }} />
            <h2>Lista de Clientes</h2>
          </div>
          <div className="panel-body">
            {/* O componente ClientsTable precisa usar as classes .clients-table */}
            <ClientsTable clientes={clientes} loading={loading} />
          </div>
        </section>

        {/* =======================
            FOOTER
        ======================== */}
        <Footer />
      </main>

      <ToastContainer position="top-right" theme="dark" />
    </div>
  );
}