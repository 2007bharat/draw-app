"use client";

import { useState } from "react";
import { Layers, Lightbulb, Code, BookOpen } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const tabs = [
  {
    id: "flowchart",
    label: "Flowchart",
    icon: Layers,
    hand: "Flow it",
    svg: (
      <svg viewBox="0 0 360 240" className="w-full h-full">
        <rect
          x="30"
          y="20"
          width="100"
          height="40"
          fill="rgba(105,103,217,0.08)"
          stroke="#6967d9"
          strokeWidth="2"
          rx="4"
        />
        <text
          x="80"
          y="45"
          textAnchor="middle"
          fontSize="12"
          fill="#1b1b1f"
          fontWeight="600"
        >
          Start
        </text>

        <path
          d="M 80 60 L 80 90"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="2"
          markerEnd="url(#flow-arrow)"
        />

        <polygon
          points="80,90 140,125 80,160 20,125"
          fill="rgba(245,166,35,0.08)"
          stroke="#f5a623"
          strokeWidth="2"
        />

        <text
          x="80"
          y="130"
          textAnchor="middle"
          fontSize="11"
          fill="#1b1b1f"
          fontWeight="600"
        >
          Valid?
        </text>

        <path
          d="M 140 125 L 220 125"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="2"
          markerEnd="url(#flow-arrow)"
        />

        <rect
          x="220"
          y="105"
          width="100"
          height="40"
          fill="rgba(45,157,120,0.08)"
          stroke="#2d9d78"
          strokeWidth="2"
          rx="4"
        />

        <text
          x="270"
          y="130"
          textAnchor="middle"
          fontSize="12"
          fill="#1b1b1f"
          fontWeight="600"
        >
          Process
        </text>

        <path
          d="M 80 160 L 80 195"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="2"
          markerEnd="url(#flow-arrow)"
        />

        <rect
          x="30"
          y="195"
          width="100"
          height="35"
          fill="rgba(224,49,75,0.08)"
          stroke="#e0314b"
          strokeWidth="2"
          rx="4"
        />

        <text
          x="80"
          y="217"
          textAnchor="middle"
          fontSize="12"
          fill="#1b1b1f"
          fontWeight="600"
        >
          End
        </text>

        <text
          x="170"
          y="118"
          fontSize="14"
          fill="#1b1b1f"
          fontFamily="Caveat"
          fontWeight="700"
        >
          Yes
        </text>

        <text
          x="95"
          y="180"
          fontSize="14"
          fill="#1b1b1f"
          fontFamily="Caveat"
          fontWeight="700"
        >
          No
        </text>

        <defs>
          <marker
            id="flow-arrow"
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
    ),
  },

  {
    id: "wireframe",
    label: "Wireframe",
    icon: BookOpen,
    hand: "Sketch it",
    svg: (
      <svg viewBox="0 0 360 240" className="w-full h-full">
        <rect
          x="20"
          y="15"
          width="320"
          height="210"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="2"
          rx="6"
        />

        <rect
          x="20"
          y="15"
          width="320"
          height="30"
          fill="rgba(105,103,217,0.06)"
          stroke="#6967d9"
          strokeWidth="1.5"
        />

        {[38, 52, 66].map((cx) => (
          <circle
            key={cx}
            cx={cx}
            cy="30"
            r="4"
            fill="none"
            stroke="#1b1b1f"
            strokeWidth="1.5"
          />
        ))}

        <rect
          x="40"
          y="60"
          width="130"
          height="50"
          fill="rgba(45,157,120,0.06)"
          stroke="#2d9d78"
          strokeWidth="1.5"
          rx="3"
        />

        <text
          x="105"
          y="88"
          textAnchor="middle"
          fontSize="11"
          fill="#1b1b1f"
          fontFamily="Caveat"
          fontWeight="600"
        >
          Hero image
        </text>

        {[60, 100, 80].map((width, i) => (
          <rect
            key={i}
            x="40"
            y={120 + i * 15}
            width={width}
            height="8"
            fill="none"
            stroke="#1b1b1f"
            strokeWidth="1.5"
            rx="2"
          />
        ))}

        <rect
          x="40"
          y="175"
          width="70"
          height="25"
          fill="#6967d9"
          stroke="#6967d9"
          strokeWidth="1.5"
          rx="4"
        />

        <text
          x="75"
          y="192"
          textAnchor="middle"
          fontSize="10"
          fill="white"
          fontWeight="600"
        >
          CTA
        </text>

        <rect
          x="190"
          y="60"
          width="130"
          height="150"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="1.5"
          rx="4"
        />

        <rect
          x="200"
          y="70"
          width="50"
          height="50"
          fill="rgba(245,166,35,0.08)"
          stroke="#f5a623"
          strokeWidth="1.5"
          rx="3"
        />

        <rect
          x="200"
          y="130"
          width="110"
          height="8"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="1.5"
          rx="2"
        />

        <rect
          x="200"
          y="145"
          width="80"
          height="8"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="1.5"
          rx="2"
        />

        <rect
          x="200"
          y="165"
          width="110"
          height="30"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="1.5"
          rx="3"
        />

        <text
          x="255"
          y="184"
          textAnchor="middle"
          fontSize="9"
          fill="#1b1b1f"
          fontWeight="500"
        >
          Card content
        </text>
      </svg>
    ),
  },

  {
    id: "mindmap",
    label: "Mind Map",
    icon: Lightbulb,
    hand: "Map it",
    svg: (
      <svg viewBox="0 0 360 240" className="w-full h-full">
        <ellipse
          cx="180"
          cy="120"
          rx="45"
          ry="25"
          fill="rgba(105,103,217,0.1)"
          stroke="#6967d9"
          strokeWidth="2"
        />

        <text
          x="180"
          y="125"
          textAnchor="middle"
          fontSize="13"
          fill="#1b1b1f"
          fontWeight="700"
        >
          Product
        </text>

        {[
          { x: 60, y: 40, tx: 95, ty: 55, label: "Design", c: "#2d9d78" },
          { x: 300, y: 40, tx: 265, ty: 55, label: "Dev", c: "#f5a623" },
          { x: 60, y: 200, tx: 95, ty: 185, label: "Market", c: "#e0314b" },
          { x: 300, y: 200, tx: 265, ty: 185, label: "Sales", c: "#3460d4" },
          { x: 180, y: 25, tx: 180, ty: 50, label: "Vision", c: "#e85a8a" },
          { x: 180, y: 215, tx: 180, ty: 190, label: "Growth", c: "#6967d9" },
        ].map((node, i) => (
          <g key={i}>
            <path
              d={`M ${node.tx} ${node.ty} Q ${
                (node.tx + 180) / 2
              } ${(node.ty + 120) / 2}, 180 120`}
              fill="none"
              stroke="#1b1b1f"
              strokeWidth="1.5"
              opacity="0.5"
            />

            <ellipse
              cx={node.x}
              cy={node.y}
              rx="35"
              ry="18"
              fill={`${node.c}15`}
              stroke={node.c}
              strokeWidth="2"
            />

            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fontSize="11"
              fill="#1b1b1f"
              fontWeight="600"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    ),
  },

  {
    id: "system",
    label: "Architecture",
    icon: Code,
    hand: "Arch it",
    svg: (
      <svg viewBox="0 0 360 240" className="w-full h-full">
        <rect
          x="130"
          y="15"
          width="100"
          height="35"
          fill="rgba(105,103,217,0.08)"
          stroke="#6967d9"
          strokeWidth="2"
          rx="4"
        />

        <text
          x="180"
          y="37"
          textAnchor="middle"
          fontSize="11"
          fill="#1b1b1f"
          fontWeight="600"
        >
          API Gateway
        </text>

        <path
          d="M 180 50 L 180 70"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="2"
          markerEnd="url(#architecture-arrow)"
        />

        <rect
          x="30"
          y="80"
          width="90"
          height="35"
          fill="rgba(45,157,120,0.08)"
          stroke="#2d9d78"
          strokeWidth="2"
          rx="4"
        />

        <text
          x="75"
          y="102"
          textAnchor="middle"
          fontSize="10"
          fill="#1b1b1f"
          fontWeight="600"
        >
          Auth Service
        </text>

        <rect
          x="135"
          y="80"
          width="90"
          height="35"
          fill="rgba(245,166,35,0.08)"
          stroke="#f5a623"
          strokeWidth="2"
          rx="4"
        />

        <text
          x="180"
          y="102"
          textAnchor="middle"
          fontSize="10"
          fill="#1b1b1f"
          fontWeight="600"
        >
          Core Logic
        </text>

        <rect
          x="240"
          y="80"
          width="90"
          height="35"
          fill="rgba(52,96,212,0.08)"
          stroke="#3460d4"
          strokeWidth="2"
          rx="4"
        />

        <text
          x="285"
          y="102"
          textAnchor="middle"
          fontSize="10"
          fill="#1b1b1f"
          fontWeight="600"
        >
          Cache Layer
        </text>

        <path
          d="M 150 50 L 75 80"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="1.5"
          markerEnd="url(#architecture-arrow)"
        />

        <path
          d="M 180 50 L 180 80"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="1.5"
          markerEnd="url(#architecture-arrow)"
        />

        <path
          d="M 210 50 L 285 80"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="1.5"
          markerEnd="url(#architecture-arrow)"
        />

        <path
          d="M 180 115 L 180 140"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="2"
          markerEnd="url(#architecture-arrow)"
        />

        <rect
          x="100"
          y="145"
          width="160"
          height="35"
          fill="rgba(224,49,75,0.08)"
          stroke="#e0314b"
          strokeWidth="2"
          rx="4"
        />

        <text
          x="180"
          y="167"
          textAnchor="middle"
          fontSize="11"
          fill="#1b1b1f"
          fontWeight="600"
        >
          Database
        </text>

        <path
          d="M 75 115 L 75 145 L 130 162"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          markerEnd="url(#architecture-arrow)"
        />

        <path
          d="M 285 115 L 285 145 L 230 162"
          fill="none"
          stroke="#1b1b1f"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          markerEnd="url(#architecture-arrow)"
        />

        <defs>
          <marker
            id="architecture-arrow"
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
    ),
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal();

  return (
    <section
      id="showcase"
      className="relative py-20 lg:py-28 bg-paper-warm border-y border-ink/5"
    >
      <div className="absolute inset-0 dot-paper opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-2xl mb-12 reveal ${visible ? "is-visible" : ""}`}
        >
          <span className="eyebrow">
            <Layers className="w-4 h-4" />
            Showcase
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            One canvas,{" "}
            <span className="font-hand text-accent-blue text-4xl sm:text-5xl lg:text-6xl">
              infinite possibilities
            </span>
          </h2>

          <p className="mt-4 text-lg text-ink-light">
            From quick sketches to complex system diagrams — Excalidraw adapts
            to how you think.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col gap-2">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(index)}
                  className={`group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                    active === index
                      ? "bg-white border-2 border-ink/10 shadow-md"
                      : "bg-transparent border-2 border-transparent hover:bg-white/60"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      active === index
                        ? "bg-ink text-paper"
                        : "bg-ink/5 text-ink-light"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <div className="font-bold text-sm">{tab.label}</div>
                    <div className="font-hand text-sm text-ink-soft">
                      {tab.hand}
                    </div>
                  </div>

                  {active === index && (
                    <div className="w-1.5 h-8 rounded-full bg-accent-purple animate-fade-in" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8">
            <div className="relative bg-white rounded-2xl border-2 border-ink/10 shadow-xl overflow-hidden">
              <div className="h-10 bg-paper-warm border-b border-ink/8 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-coral/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-amber/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-green/60" />
                </div>

                <span className="ml-3 text-xs font-mono text-ink-soft">
                  {tabs[active].label.toLowerCase()}.excalidraw
                </span>
              </div>

              <div className="p-6 lg:p-10 dot-paper min-h-[280px] lg:min-h-[340px] flex items-center justify-center">
                <div key={active} className="w-full max-w-md animate-fade-in">
                  {tabs[active].svg}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
