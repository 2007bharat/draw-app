"use client";

import {
  Briefcase,
  GraduationCap,
  Users,
  Code2,
  Rocket,
  Palette,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const useCases = [
  {
    icon: Briefcase,
    title: "Product Teams",
    desc: "Map user journeys, sketch wireframes, and align stakeholders in real time.",
    tag: "Most popular",
    color: "accent-purple",
    delay: 0,
  },
  {
    icon: GraduationCap,
    title: "Educators",
    desc: "Explain complex concepts with visual diagrams students can follow along with.",
    tag: "",
    color: "accent-blue",
    delay: 80,
  },
  {
    icon: Users,
    title: "Workshops & Retro",
    desc: "Run brainstorming sessions and retros that feel like a real whiteboard.",
    tag: "",
    color: "accent-green",
    delay: 160,
  },
  {
    icon: Code2,
    title: "Engineers",
    desc: "Document architecture, sequence diagrams, and system design decisions.",
    tag: "",
    color: "accent-amber",
    delay: 240,
  },
  {
    icon: Rocket,
    title: "Founders",
    desc: "Sketch your MVP, pitch flows, and customer journeys in minutes.",
    tag: "",
    color: "accent-coral",
    delay: 320,
  },
  {
    icon: Palette,
    title: "Designers",
    desc: "Rapid-prototype layouts and user flows before committing to Figma.",
    tag: "",
    color: "accent-pink",
    delay: 400,
  },
];

export default function UseCases() {
  const { ref, visible } = useReveal();

  return (
    <section id="use-cases" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-2xl mb-14 reveal ${visible ? "is-visible" : ""}`}
        >
          <span className="eyebrow">
            <Users className="w-4 h-4" />
            Use Cases
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Loved by{" "}
            <span className="font-hand text-accent-green text-4xl sm:text-5xl lg:text-6xl">
              every kind of thinker
            </span>
          </h2>
          <p className="mt-4 text-lg text-ink-light">
            Whether you're planning a product or teaching a class, Excalidraw
            keeps your ideas flowing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc) => {
            const { ref: cardRef, visible: cardVis } = useReveal();
            const Icon = uc.icon;
            return (
              <div
                key={uc.title}
                ref={cardRef}
                className={`reveal ${cardVis ? "is-visible" : ""} group relative p-6 bg-white rounded-2xl border border-ink/8 hover:shadow-xl hover:shadow-ink/5 transition-all duration-300 hover:-translate-y-1`}
                style={{ transitionDelay: `${uc.delay}ms` }}
              >
                {uc.tag && (
                  <span className="absolute -top-2.5 right-4 px-3 py-0.5 bg-ink text-paper text-xs font-semibold rounded-full">
                    {uc.tag}
                  </span>
                )}
                <div
                  className={`w-12 h-12 rounded-xl bg-${uc.color}/8 border border-${uc.color}/20 flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
                >
                  <Icon
                    className={`w-6 h-6 text-${uc.color}`}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-lg font-bold mb-1.5">{uc.title}</h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {uc.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-ink group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
