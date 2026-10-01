"use client";
import { ArrowRight, Github, Heart } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function CTA() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-paper opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-ink/10 rounded-full text-sm font-medium text-ink-light shadow-sm mb-6">
            <Heart className="w-4 h-4 text-accent-coral fill-accent-coral" />
            <span>Free forever · Open source</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Ready to start{" "}
            <span className="relative inline-block">
              <span className="relative z-10">drawing?</span>
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M 2 6 Q 50 2, 100 6 T 198 6"
                  stroke="#2d9d78"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-6 text-lg lg:text-xl text-ink-light max-w-xl mx-auto">
            No signup. No download. Just open a new canvas and let your ideas
            flow. Your diagrams save automatically in your browser.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="btn-primary text-base group">
              Open a new canvas
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#" className="btn-secondary text-base group">
              <Github className="w-5 h-5" />
              Star on GitHub
            </a>
          </div>

          <p className="mt-6 text-sm text-ink-soft">
            Join 2.4M+ users who think visually with Excalidraw.
          </p>
        </div>
      </div>
    </section>
  );
}
