"use client";

import { useEffect, useRef, useState } from "react";

const suggestions = [
  "What skills do you have?",
  "Tell me about your projects",
  "How can I contact you?",
  "What technologies do you use?",
];

const getAssistantResponse = (message) => {
  const text = message.toLowerCase();

  if (
    text.includes("skill") ||
    text.includes("technology") ||
    text.includes("technologies")
  ) {
    return "I work with technologies including HTML, CSS, JavaScript, PHP, MySQL, Bootstrap, React, Next.js, Tailwind CSS, and modern web development tools.";
  }

  if (
    text.includes("project") ||
    text.includes("portfolio") ||
    text.includes("work")
  ) {
    return "Some of my projects include a Pharmacy Management System, School Management System, Hotel Management System, E-Commerce Website, QR Menu System, and Personal Gym Trainer Website.";
  }

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("reach")
  ) {
    return "You can contact Sisay by email at sisayabebayew@gmail.com or through WhatsApp. Visit the Get In Touch section for more information.";
  }

  if (
    text.includes("experience") ||
    text.includes("about") ||
    text.includes("who")
  ) {
    return "I am a Computer Science student and developer focused on building modern, practical, and interactive digital solutions.";
  }

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hello! 👋 Welcome to Sisay portfolio. Ask me anything about skills, projects, experience, or contact, map information.";
  }

  if (text.includes("thank")) {
    return "You're welcome! 😊 Feel free to ask me anything else.";
  }

  return "I can help you learn about Sisay's skills, projects, experience, and contact information. Try asking me one of the suggested questions below.";
};

function BotIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="7" width="18" height="13" rx="3" />

      <path d="M12 3v4" />

      <circle cx="9" cy="13" r="1" fill="currentColor" />

      <circle cx="15" cy="13" r="1" fill="currentColor" />

      <path d="M9 17h6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />

      <path d="M22 2 11 13" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />

      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hi! 👋 I'm Sisay's portfolio assistant. Ask me about skills, projects, experience, or contact information.",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [messages, isOpen]);

  const sendMessage = (customMessage) => {
    const message = (customMessage || input).trim();

    if (!message) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      text: message,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setInput("");

    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        text: getAssistantResponse(message),
      };
      setMessages((previous) => [
        ...previous,
        assistantMessage,
      ]);
    }, 500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    sendMessage();
  };

  return (
    <>
      {/* Assistant Window */}
      <div
        className={`
          fixed
          bottom-24
          right-5
          z-[100]
          w-[calc(100vw-2.5rem)]
          max-w-[380px]
          overflow-hidden
          rounded-3xl
          border
          border-slate-line
          bg-[#0b1220]/95
          shadow-2xl
          shadow-black/30
          backdrop-blur-2xl
          transition-all
          duration-300
          light:bg-white/95
          ${
            isOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-8 scale-95 opacity-0"
          }
       `}
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-line
            bg-accent/[0.06]
            px-5
            py-4
          "
        >
          <div className="flex items-center gap-3">
            {/* Bot Icon */}
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                bg-accent
                text-navy
                shadow-lg
                shadow-accent/20
              "
            >
              <BotIcon />
            </div>

            <div>
              <h3 className="font-display font-semibold text-paper light:text-navy">
                Portfolio Assistant
              </h3>

              <div className="mt-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>

                <span className="text-xs text-paper/50 light:text-navy/50">
                  Online
                </span>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close assistant"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              text-paper/60
              transition
              hover:bg-white/[0.06]
              hover:text-accent
              light:text-navy/60
              light:hover:bg-slate-100
            "
          >
            <CloseIcon />
          </button>
        </div>

        {/* Messages */}
        <div
          className="
            max-h-[360px]
            min-h-[300px]
            space-y-4
            overflow-y-auto
            px-4
            py-5
          "
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`
                  max-w-[85%]
                  rounded-2xl
                  px-4
                  py-3
                  text-sm
                  leading-6
                  ${
                    message.role === "user"
                      ? "rounded-br-md bg-accent text-navy"
                      : "rounded-bl-md bg-white/[0.06] text-paper/75 light:bg-slate-100 light:text-navy/75"
                  }
                `}
              >
                {message.text}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>
        {/* Suggestions */}
        {messages.length <= 3 && (
          <div className="border-t border-slate-line px-4 py-3">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-paper/40 light:text-navy/40">
              Try asking
            </p>

            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                  className="
                    rounded-full
                    border
                    border-accent/20
                    bg-accent/[0.05]
                    px-3
                    py-1.5
                    text-xs
                    text-paper/60
                    transition
                    hover:border-accent/50
                    hover:bg-accent/10
                    hover:text-accent
                    light:text-navy/60
                  "
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="
            flex
            gap-2
            border-t
            border-slate-line
            p-3
          "
        >
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask me something..."
            className="
              min-w-0
              flex-1
              rounded-xl
              border
              border-slate-line
              bg-white/[0.04]
              px-4
              py-3
              text-sm
              text-paper
              outline-none
              transition
              placeholder:text-paper/30
              focus:border-accent/50
              focus:ring-2
              focus:ring-accent/10
              light:bg-slate-50
              light:text-navy
              light:placeholder:text-navy/35
            "
          />

          <button
            type="submit"
            aria-label="Send message"
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-accent
              text-navy
              transition-all
              hover:scale-105
              hover:bg-accent-bright
              active:scale-95
            "
          >
            <SendIcon />
          </button>
        </form>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label="Open portfolio assistant"
        className="
          group
          fixed
          bottom-5
          right-5
          z-[101]
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-accent
          text-navy
          shadow-2xl
          shadow-accent/30
          transition-all
          duration-300
          hover:scale-110
          active:scale-95
        "
      >
        {/* Pulse */}
        {!isOpen && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-2xl bg-accent opacity-20" />
        )}

        <span className="relative">
          {isOpen ? <CloseIcon /> : <BotIcon />}
        </span>
      </button>
    </>
  );
}