 "use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function MessagesManager() {
  const supabase = createClient();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadMessages() {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setMessages(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadMessages();
  }, []);

  async function deleteMessage(id) {
    if (!window.confirm("Delete this message?")) {
      return;
    }

    const { error } = await supabase
      .from("contact_messages")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    loadMessages();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold">
          Contact Messages
        </h1>

        <p className="text-slate-400 mt-2 mb-8">
          Messages received from your portfolio.
        </p>

        {loading ? (
          <p className="text-slate-400">
            Loading messages...
          </p>
        ) : messages.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            No messages yet.
          </div>
        ) : (
          <div className="space-y-5">
            {messages.map((message) => (
              <div
                key={message.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
              >
                <div className="flex justify-between gap-5">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {message.name}
                    </h2>

                    <a
                      href={`mailto:${message.email}`}
                      className="text-cyan-400 text-sm"
                    >
                      {message.email}
                    </a>

                    <h3 className="font-medium mt-4">
                      {message.subject || "No subject"}
                    </h3>

                    <p className="text-slate-300 mt-2">
                      {message.message}
                    </p>

                    <p className="text-xs text-slate-500 mt-4">
                      {new Date(
                        message.created_at
                      ).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      deleteMessage(message.id)
                    }
                    className="text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}