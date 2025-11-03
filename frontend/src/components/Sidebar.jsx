import { FiLayout, FiUsers, FiBarChart2 } from "react-icons/fi";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">FinFlow Bank</div>
      
      {/* Menu para telas grandes */}
      <div className="sidebar-item active">
        <a href="#">
          <FiLayout className="sidebar-item-icon" />
          Dashboard
        </a>
      </div>
      <div className="sidebar-item">
        <a href="#">
          <FiUsers className="sidebar-item-icon" />
          Clientes
        </a>
      </div>
      <div className="sidebar-item">
        <a href="#">
          <FiBarChart2 className="sidebar-item-icon" />
          Relatórios
        </a>
      </div>
      
      {/* O menu lateral se transforma em um menu horizontal responsivo no mobile */}
    </nav>
  );
}