import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex bg-[#0A0F1E] min-h-screen text-white font-[Segoe UI]">
      <Sidebar />
      <main className="flex-1 p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
