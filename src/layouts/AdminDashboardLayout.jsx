import { useState } from "react";
import Sidebar from "../components/common/Sidebar";
import HamburgerMenu from "../components/common/HamburgerMenu";

export default function AdminDashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar for mobile */}
        <div className="md:hidden flex items-center p-2 bg-white shadow">
          <HamburgerMenu onClick={() => setSidebarOpen(true)} />
          <span className="ml-4 font-bold text-lg text-blue-700">Panel Admin</span>
        </div>
        <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
