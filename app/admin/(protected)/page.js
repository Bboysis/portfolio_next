import Link from "next/link";
import AdminLogout from "@/components/admin/AdminLogout";
export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-cyan-400 text-sm font-medium">
            ADMIN PANEL
          </p>

          <h1 className="text-4xl font-bold mt-2">
            Dashboard
          </h1>
<AdminLogout/>
          <p className="text-slate-400 mt-2">
            Manage your portfolio from one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link
            href="/admin/testimonials"
            className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/50 transition"
          >
            <div className="text-4xl mb-4">
              💬
            </div>

            <h2 className="text-xl font-semibold">
              Testimonials
            </h2>

            <p className="text-slate-400 mt-2">
              Manage visitor opinions.
            </p>
          </Link>

          <Link
            href="/admin/messages"
            className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/50 transition"
          >
            <div className="text-4xl mb-4">
              📧
            </div>

            <h2 className="text-xl font-semibold">
              Messages
            </h2>

            <p className="text-slate-400 mt-2">
              View contact form messages.
            </p>
          </Link>

          <Link
            href="/admin/projects"
            className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400/50 transition"
          >
            <div className="text-4xl mb-4">
              🚀
            </div>

            <h2 className="text-xl font-semibold">
              Projects
            </h2>

            <p className="text-slate-400 mt-2">
              Manage portfolio projects.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}