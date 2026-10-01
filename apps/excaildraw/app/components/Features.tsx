"use client";

import {
  PenTool,
  Users,
  Share2,
  Download,
  MousePointer2,
  Image as ImageIcon,
  Zap,
  Lock,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const features = [
  {
    icon: PenTool,
    title: "Hand-drawn aesthetic",
    desc: "Every stroke feels like pen on paper. Sketchy, rough, and charmingly imperfect.",
    color: "text-accent-purple",
    bg: "bg-accent-purple/8",
    border: "border-accent-purple/20",
    hand: "Hand-drawn",
    delay: 0,
    size: "lg:col-span-2",
    visual: (
      <div className="flex items-end gap-3 mt-4">
        <svg viewBox="0 0 120 60" className="w-32 h-16">
          <rect
            x="5"
            y="8"
            width="40"
            height="28"
            fill="none"
            stroke="#6967d9"
            strokeWidth="2"
            rx="4"
            className="animate-draw-stroke"
            style={{ strokeDasharray: 1000 }}
          />
          <path
            d="M 48 22 C 65 22, 70 22, 85 22"
            fill="none"
            stroke="#1b1b1f"
            strokeWidth="2"
            markerEnd="url(#f1arrow)"
            className="animate-draw-stroke"
            style={{ strokeDasharray: 1000 }}
          />
          <rect
            x="88"
            y="8"
            width="28"
            height="28"
            fill="rgba(45,157,120,0.08)"
            stroke="#2d9d78"
            strokeWidth="2"
            rx="4"
            className="animate-draw-stroke"
            style={{ strokeDasharray: 1000 }}
          />
          <defs>
            <marker
              id="f1arrow"
              markerWidth="8"
              markerHeight="6"
              refX="6"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill="#1b1b1f" />
            </marker>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    icon: Users,
    title: "Real-time collaboration",
    desc: "See teammates' cursors move live as you brainstorm together.",
    color: "text-accent-green",
    bg: "bg-accent-green/8",
    border: "border-accent-green/20",
    hand: "Live cursors",
    delay: 100,
    size: "",
    visual: (
      <div className="flex -space-x-2 mt-4">
        {["#6967d9", "#2d9d78", "#f5a623", "#e0314b"].map((c, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border-2 border-white shadow-sm animate-bob"
            style={{ background: c, animationDelay: `${i * 0.3}s` }}
          />
        ))}
        <div className="w-8 h-8 rounded-full border-2 border-white bg-ink/5 flex items-center justify-center text-xs font-bold text-ink-soft">
          +5
        </div>
      </div>
    ),
  },
  {
    icon: Share2,
    title: "Share with a link",
    desc: "Send a single link. No sign-up required for viewers.",
    color: "text-accent-blue",
    bg: "bg-accent-blue/8",
    border: "border-accent-blue/20",
    hand: "One-click",
    delay: 200,
    size: "",
    visual: (
      <div className="mt-4 flex items-center gap-2 px-3 py-2 bg-ink/5 rounded-lg">
        <span className="text-xs font-mono text-ink-soft truncate">
          excalidraw.com/c/sk8...
        </span>
        <span className="text-xs font-bold text-accent-blue whitespace-nowrap">
          Copy
        </span>
      </div>
    ),
  },
  {
    icon: Download,
    title: "Export anywhere",
    desc: "Download as PNG, SVG, or embed code. Your art goes everywhere.",
    color: "text-accent-amber",
    bg: "bg-accent-amber/8",
    border: "border-accent-amber/20",
    hand: "PNG · SVG",
    delay: 300,
    size: "lg:col-span-2",
    visual: (
      <div className="flex gap-2 mt-4">
        {["PNG", "SVG", "Embed", "Link"].map((f) => (
          <span
            key={f}
            className="px-3 py-1.5 bg-white border border-ink/10 rounded-lg text-xs font-semibold text-ink-light"
          >
            {f}
          </span>
        ))}
      </div>
    ),
  },
  {
    icon: ImageIcon,
    title: "Drag & drop images",
    desc: "Drop screenshots, mockups, or photos right onto the canvas.",
    color: "text-accent-pink",
    bg: "bg-accent-pink/8",
    border: "border-accent-pink/20",
    hand: "Drop it",
    delay: 400,
    size: "",
    visual: (
      <div className="mt-4 w-20 h-16 bg-paper-warm border-2 border-dashed border-ink/15 rounded-lg flex items-center justify-center">
        <ImageIcon className="w-6 h-6 text-ink-soft" />
      </div>
    ),
  },
  {
    icon: Lock,
    title: "End-to-end encryption",
    desc: "Your scenes are encrypted. Even we can't read them.",
    color: "text-accent-coral",
    bg: "bg-accent-coral/8",
    border: "border-accent-coral/20",
    hand: "Secure",
    delay: 500,
    size: "",
    visual: (
      <div className="mt-4 flex items-center gap-2">
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-accent-coral/60 animate-pulse-soft"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        <span className="text-xs font-mono text-ink-soft">AES-256</span>
      </div>
    ),
  },
];

export default function Features() {
  const { ref, visible } = useReveal();

  return (
    <section id="features" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-2xl mb-14 reveal ${visible ? "is-visible" : ""}`}
        >
          <span className="eyebrow">
            <MousePointer2 className="w-4 h-4" />
            Features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Everything you need to{" "}
            <span className="font-hand text-accent-purple text-4xl sm:text-5xl lg:text-6xl">
              think visually
            </span>
          </h2>
          <p className="mt-4 text-lg text-ink-light">
            Built for thinkers, planners, and makers. No setup, no friction —
            just you and your ideas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:auto-rows-fr">
          {features.map((f, i) => {
            const { ref: cardRef, visible: cardVis } = useReveal();
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                ref={cardRef}
                className={`reveal ${cardVis ? "is-visible" : ""} ${f.size} group relative p-6 lg:p-7 bg-white rounded-2xl border border-ink/8 hover:border-ink/15 hover:shadow-xl hover:shadow-ink/5 transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${f.delay}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${f.bg} ${f.border} border flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className={`w-6 h-6 ${f.color}`} strokeWidth={2} />
                  </div>
                  <span className="font-hand text-lg text-ink-soft">
                    {f.hand}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1.5">{f.title}</h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {f.desc}
                </p>
                {f.visual}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
