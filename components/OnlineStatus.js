"use client";

import { useEffect, useState } from "react";

export default function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
      setShowMessage(true);
    };

    const handleOnline = () => {
      setIsOnline(true);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!showMessage) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2
        rounded-full border px-5 py-3 shadow-2xl backdrop-blur-xl
        transition-all duration-300
        ${
          isOnline
            ? "border-emerald-400/30 bg-emerald-500/15 text-emerald-300"
            : "border-amber-400/30 bg-amber-500/15 text-amber-300"
        }
      `}
    >
      <div className="flex items-center gap-3 text-sm font-medium">
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            isOnline
              ? "bg-emerald-400"
              : "bg-amber-400"
          }`}
        />

        <span>
          {isOnline
            ? "Back online"
            : "You're offline — cached content is available"}
        </span>
      </div>
    </div>
  );
}