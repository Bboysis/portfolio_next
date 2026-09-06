"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLogout() {
  const router = useRouter();
  const supabase = createClient();

  async function logout() {
    await supabase.auth.signOut();

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      className="rounded-xl border border-red-500/30 text-red-400 px-5 py-2 hover:bg-red-500/10 transition"
    >
      Logout
    </button>
  );
}