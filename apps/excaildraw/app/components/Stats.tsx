"use client";

import { Star, GitFork, Eye, Download } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const stats = [
  {
    value: "38.5k",
    label: "GitHub Stars",
    icon: Star,
    color: "text-accent-amber",
  },
  {
    value: "2.4M+",
    label: "Active Users",
    icon: Eye,
    color: "text-accent-purple",
  },
  {
    value: "180+",
    label: "Contributors",
    icon: GitFork,
    color: "text-accent-green",
  },
  {
    value: "5.2M",
    label: "Diagrams Created",
    icon: Download,
    color: "text-accent-blue",
  },
];

type Stat = (typeof stats)[number];

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const { ref, visible } = useReveal();

  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} text-center`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="inline-flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center mb-4">
        <Icon className={`w-7 h-7 ${stat.color}`} strokeWidth={2} />
      </div>

      <div className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-1">
        {stat.value}
      </div>

      <div className="text-sm text-paper/60 font-medium">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="stats"
      className="relative py-20 lg:py-24 bg-ink text-paper overflow-hidden"
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-blue/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-14 reveal ${
            visible ? "is-visible" : ""
          }`}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-amber">
            <Star className="w-4 h-4 fill-accent-amber" />
            By the Numbers
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            A community that keeps{" "}
            <span className="font-hand text-accent-amber text-4xl sm:text-5xl lg:text-6xl">
              growing
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
