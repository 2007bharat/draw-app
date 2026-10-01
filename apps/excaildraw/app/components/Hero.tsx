"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Github, Users, Sparkles } from "lucide-react";

function AnimatedCanvas() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 1100),
      setTimeout(() => setStep(3), 1900),
      setTimeout(() => setStep(4), 2700),
      setTimeout(() => setStep(5), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] bg-white rounded-2xl border-2 border-ink/10 shadow-2xl shadow-ink/10 overflow-hidden">
      {/* Toolbar */}
      <div className="absolute top-0 left-0 right-0 h-11 bg-paper-warm border-b border-ink/8 flex items-center px-3 gap-1 z-10">
        <div className="flex gap-1.5 mr-3">
          <div className="w-3 h-3 rounded-full bg-accent-coral/70" />
          <div className="w-3 h-3 rounded-full bg-accent-amber/70" />
          <div className="w-3 h-3 rounded-full bg-accent-green/70" />
        </div>
        {[
          { icon: "M", label: "Move", active: false },
          { icon: "▭", label: "Rect", active: false },
          { icon: "◇", label: "Diamond", active: false },
          { icon: "○", label: "Ellipse", active: false },
          { icon: "/", label: "Arrow", active: false },
          { icon: "A", label: "Text", active: false },
        ].map((t, i) => (
          <div
            key={t.label}
            className={`w-8 h-7 flex items-center justify-center rounded-md text-sm font-bold transition-all ${
              i === 1 && step >= 1
                ? "bg-accent-purple text-white scale-110"
                : "text-ink-soft hover:bg-ink/5"
            }`}
          >
            {t.icon}
          </div>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-ink/5 flex items-center justify-center">
            <Users className="w-3.5 h-3.5 text-ink-soft" />
          </div>
          <div className="flex -space-x-1.5">
            <div className="w-6 h-6 rounded-full bg-accent-purple border-2 border-white" />
            <div className="w-6 h-6 rounded-full bg-accent-green border-2 border-white" />
            <div className="w-6 h-6 rounded-full bg-accent-amber border-2 border-white" />
          </div>
        </div>
      </div>

      {/* Canvas area */}
      <div className="absolute top-11 left-0 right-0 bottom-0 dot-paper">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Rectangle 1 */}
          {step >= 1 && (
            <g className="animate-fade-in">
              <rect
                x="40"
                y="35"
                width="120"
                height="60"
                fill="rgba(105,103,217,0.08)"
                stroke="#6967d9"
                strokeWidth="2"
                rx="4"
                className="animate-draw-stroke"
                style={{ strokeDasharray: 1000 }}
              />
              <text
                x="100"
                y="70"
                textAnchor="middle"
                fontSize="13"
                fill="#1b1b1f"
                fontFamily="Inter"
                fontWeight="600"
              >
                Idea
              </text>
            </g>
          )}

          {/* Arrow 1 */}
          {step >= 2 && (
            <g className="animate-fade-in">
              <path
                d="M 160 65 C 195 65, 210 65, 235 65"
                fill="none"
                stroke="#1b1b1f"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
                className="animate-draw-stroke"
                style={{ strokeDasharray: 1000 }}
              />
            </g>
          )}

          {/* Rectangle 2 */}
          {step >= 2 && (
            <g className="animate-fade-in">
              <rect
                x="240"
                y="35"
                width="120"
                height="60"
                fill="rgba(45,157,120,0.08)"
                stroke="#2d9d78"
                strokeWidth="2"
                rx="4"
                className="animate-draw-stroke"
                style={{ strokeDasharray: 1000 }}
              />
              <text
                x="300"
                y="70"
                textAnchor="middle"
                fontSize="13"
                fill="#1b1b1f"
                fontFamily="Inter"
                fontWeight="600"
              >
                Design
              </text>
            </g>
          )}

          {/* Arrow 2 */}
          {step >= 3 && (
            <g className="animate-fade-in">
              <path
                d="M 300 95 C 300 130, 300 150, 300 175"
                fill="none"
                stroke="#1b1b1f"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
                className="animate-draw-stroke"
                style={{ strokeDasharray: 1000 }}
              />
            </g>
          )}

          {/* Diamond */}
          {step >= 3 && (
            <g className="animate-fade-in">
              <polygon
                points="300,175 360,215 300,255 240,215"
                fill="rgba(245,166,35,0.08)"
                stroke="#f5a623"
                strokeWidth="2"
                className="animate-draw-stroke"
                style={{ strokeDasharray: 1000 }}
              />
              <text
                x="300"
                y="220"
                textAnchor="middle"
                fontSize="12"
                fill="#1b1b1f"
                fontFamily="Inter"
                fontWeight="600"
              >
                Ship
              </text>
            </g>
          )}

          {/* Hand-drawn note */}
          {step >= 4 && (
            <g className="animate-fade-in">
              <path
                d="M 50 160 Q 70 150, 90 160 T 130 165 Q 140 170, 130 180 Q 100 190, 60 185 Q 45 175, 50 160"
                fill="rgba(224,49,75,0.05)"
                stroke="#e0314b"
                strokeWidth="2"
                fillOpacity="0.3"
              />
              <text
                x="90"
                y="178"
                textAnchor="middle"
                fontSize="16"
                fill="#e0314b"
                fontFamily="Caveat"
                fontWeight="700"
              >
                Sprint 3!
              </text>
            </g>
          )}

          {/* Sticky note */}
          {step >= 5 && (
            <g className="animate-fade-in">
              <rect
                x="40"
                y="220"
                width="110"
                height="60"
                fill="#fff9c4"
                stroke="#f5a623"
                strokeWidth="1.5"
                rx="2"
                transform="rotate(-3 95 250)"
              />
              <text
                x="95"
                y="245"
                textAnchor="middle"
                fontSize="14"
                fill="#1b1b1f"
                fontFamily="Caveat"
                fontWeight="600"
              >
                Don't forget
              </text>
              <text
                x="95"
                y="265"
                textAnchor="middle"
                fontSize="14"
                fill="#1b1b1f"
                fontFamily="Caveat"
                fontWeight="600"
              >
                user testing!
              </text>
            </g>
          )}

          {/* Collaborator cursor */}
          {step >= 4 && (
            <g className="animate-bob">
              <path
                d="M 250 130 L 256 142 L 252 144 L 254 150 L 250 152 L 248 146 L 244 148 Z"
                fill="#2d9d78"
              />
              <rect
                x="256"
                y="142"
                width="48"
                height="16"
                rx="3"
                fill="#2d9d78"
              />
              <text
                x="280"
                y="153"
                textAnchor="middle"
                fontSize="9"
                fill="white"
                fontFamily="Inter"
                fontWeight="700"
              >
                Sarah
              </text>
            </g>
          )}

          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="8"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#1b1b1f" />
            </marker>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 grid-paper opacity-60" />
      <div className="absolute top-20 -left-20 w-72 h-72 bg-accent-purple/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent-green/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-ink/10 rounded-full text-sm font-medium text-ink-light shadow-sm mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-accent-purple" />
              <span>Now with real-time collaboration</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-soft" />
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] animate-fade-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              The virtual whiteboard
              <br />
              for{" "}
              <span className="relative inline-block">
                <span className="relative z-10">sketching</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 2 6 Q 50 2, 100 6 T 198 6"
                    stroke="#6967d9"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    className="animate-draw-stroke"
                    style={{ strokeDasharray: 1000 }}
                  />
                </svg>
              </span>{" "}
              hand-drawn
              <br />
              diagrams.
            </h1>

            <p
              className="mt-6 text-lg lg:text-xl text-ink-light max-w-xl mx-auto lg:mx-0 animate-fade-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              An open-source canvas for thinking visually. Sketch flowcharts,
              wireframes, and ideas with the warmth of a notebook — right in
              your browser.
            </p>

            <div
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              <a href="#" className="btn-primary text-base group">
                Start drawing — it's free
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#" className="btn-secondary text-base group">
                <Play className="w-4 h-4 fill-ink" />
                Watch demo
              </a>
            </div>

            <div
              className="mt-8 flex items-center gap-5 justify-center lg:justify-start text-sm text-ink-soft animate-fade-up"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <a
                href="#"
                className="flex items-center gap-1.5 hover:text-ink transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="font-semibold">38.5k</span> GitHub stars
              </a>
              <span className="w-1 h-1 rounded-full bg-ink-soft/40" />
              <span>No signup needed</span>
              <span className="w-1 h-1 rounded-full bg-ink-soft/40" />
              <span>Open source</span>
            </div>
          </div>

          {/* Right: Animated canvas mock */}
          <div
            className="relative animate-fade-up"
            style={{ animationDelay: "0.3s", opacity: 0 }}
          >
            <AnimatedCanvas />
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-amber rounded-2xl rotate-6 shadow-lg flex items-center justify-center animate-float">
              <span className="font-hand text-2xl font-bold text-ink">!</span>
            </div>
            <div className="absolute -bottom-3 -left-3 px-4 py-2 bg-white rounded-xl shadow-lg border border-ink/10 animate-float-slow">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                <span className="text-sm font-medium text-ink">
                  3 collaborators online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
