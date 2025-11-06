import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ClientsTable from "./components/ClientsTable";
import NewClientForm from "./components/NewClientForm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 🏠 Tela inicial */}
        <Route path="/" element={<Home />} />

        {/* 💳 Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 👥 Clientes */}
        <Route path="/clientes" element={<ClientsTable />} />
        <Route path="/novo-cliente" element={<NewClientForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
