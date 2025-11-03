import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUsers, FiActivity, FiCheckCircle } from "react-icons/fi";

import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import StatsGrid from "./components/StatsGrid";
import NewClientForm from "./components/NewClientForm";
import ClientsTable from "./components/ClientsTable";
import Footer from "./components/Footer";
import { getClientes } from "./utils/api";

export default function App() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverOnline, setServerOnline] = useState(false);

  useEffect(() => {
    const fetch = async () => {
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
    fetch();
  }, []);

  const total = clientes.length;
  const ultimo = total ? clientes[clientes.length - 1].nome : "—";

  return (
    <div className="flex min-h-screen bg-[#0B0F19] text-[#EAEAEA] font-inter">
      <Sidebar />

      <main className="flex-1 min-w-0 px-6 md:px-12 py-8 max-w-[1600px] mx-auto">
        <DashboardHeader />

        <StatsGrid
          stats={[
            { title: "Total de Clientes", value: total, icon: <FiUsers />, color: "#00FF88" },
            { title: "Último Cadastrado", value: ultimo, icon: <FiActivity />, color: "#00BFFF" },
            { title: "Servidor", value: serverOnline ? "Online 🟢" : "Offline 🔴", icon: <FiCheckCircle />, color: "#7F00FF" },
          ]}
        />

        <div className="grid gap-6 mt-8">
          <NewClientForm onCreated={(novo) => setClientes((p) => [...p, novo])} />
          <ClientsTable clientes={clientes} loading={loading} />
        </div>

        <Footer />
      </main>

      <ToastContainer position="top-right" theme="dark" />
    </div>
  );
}
