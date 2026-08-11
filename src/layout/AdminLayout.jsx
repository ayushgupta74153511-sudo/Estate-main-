import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-xl font-bold mb-6">Zenova Admin</h2>
        <nav className="space-y-3">
          <Link to="dashboard">Dashboard</Link>
          <Link to="add-property">Add Property</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;