"use client";

import { useEffect, useState } from "react";
import { Menu, X, PenTool } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Stats", href: "#stats" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-ink/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-ink flex items-center justify-center transition-transform group-hover:rotate-6 group-hover:scale-110">
            <PenTool className="w-5 h-5 text-paper" strokeWidth={2.5} />
          </div>

          <span className="font-extrabold text-xl tracking-tight">
            Excalidraw
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-ink-light hover:text-ink transition-colors rounded-lg hover:bg-ink/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-semibold text-ink-light hover:text-ink transition-colors px-4 py-2"
          >
            Sign in
          </a>

          <a href="#" className="btn-primary text-sm py-2.5 px-5">
            Try Excalidraw
          </a>
        </div>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-ink/5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-paper/95 backdrop-blur-md border-b border-ink/5 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-ink-light hover:text-ink hover:bg-ink/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="h-px bg-ink/10 my-2" />

          <a
            href="#"
            className="px-4 py-3 text-sm font-semibold text-ink hover:bg-ink/5 rounded-lg"
          >
            Sign in
          </a>

          <a href="#" className="btn-primary text-sm justify-center">
            Try Excalidraw
          </a>
        </div>
      </div>
    </header>
  );
}
