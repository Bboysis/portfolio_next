"use client";

import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handler);

    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("installPromptDismissed");

      if (!dismissed) {
        setShowPrompt(true);
      }
    }, 10000);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      clearTimeout(timer);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      alert(
        "To install the app, open the browser menu and choose Install App or Add to Home Screen."
      );
      return;
    }

    deferredPrompt.prompt();

    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === "accepted") {
      console.log("User installed the app");
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleClose = () => {
    setShowPrompt(false);

    localStorage.setItem(
      "installPromptDismissed",
      "true"
    );
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/40 p-4 sm:items-center">
      
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0b1220] p-6 shadow-2xl">
        
        <button
          onClick={handleClose}
          className="float-right text-xl text-gray-400 hover:text-white"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="mb-4 text-5xl">
          🚀
        </div>

        <h2 className="mb-2 text-2xl font-bold text-white">
          Install My Portfolio
        </h2>

        <p className="mb-6 text-gray-400">
          Get the Sisay Portfolio app on your phone for a faster and better experience.
        </p>

        <div className="flex gap-3">
          
          <button
            onClick={handleClose}
            className="flex-1 rounded-xl border border-white/10 px-4 py-3 text-gray-300 transition hover:bg-white/5"
          >
            Not Now
          </button>

          <button
            onClick={handleInstall}
            className="flex-1 rounded-xl bg-[#4ECDC4] px-4 py-3 font-semibold text-[#06101f] transition hover:scale-[1.02]"
          >
            Install App
          </button>

        </div>

      </div>

    </div>
  );
}