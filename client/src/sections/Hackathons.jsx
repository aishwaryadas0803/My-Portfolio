'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Code, Cpu, Server, Sparkles, MapPin, Users, Trophy, ExternalLink, ArrowUpRight } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────── */
const hackathons = [
  {
    name: 'Hack4Bengal',
    edition: 'Season 3',
    year: '2024',
    organizer: 'Hack4Bengal Community',
    location: 'Kolkata, WB',
    team: 'Team of 4',
    result: 'Participant',
    description:
      'Built a community-driven hyperlocal platform connecting residents for resource-sharing and neighbourhood alerts, leveraging real-time WebSocket updates.',
    icon: Code,
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    color: '#E0A96D',
    link: null,
  },
  {
    name: 'Status Code 2',
    edition: 'IIT Kalyani',
    year: '2025',
    organizer: 'IIT Kalyani',
    location: 'Kalyani, WB',
    team: 'Team of 3',
    result: 'Finalist',
    description:
      'Engineered a cloud-native microservices dashboard for backend observability — focusing on latency metrics, error rates, and auto-scaling heuristics.',
    icon: Server,
    tags: ['Next.js', 'Docker', 'PostgreSQL', 'Go'],
    color: '#F2D492',
    link: null,
  },
  {
    name: 'Technoverse',
    edition: 'Cognizant',
    year: '2026',
    organizer: 'Cognizant',
    location: 'Remote',
    team: 'Team of 2',
    result: 'Top 10',
    description:
      'Developed an AI-powered full-stack product recommendation engine with personalised embeddings and a real-time inference API served via edge functions.',
    icon: Cpu,
    tags: ['Python', 'FastAPI', 'AI/ML', 'Next.js'],
    color: '#E0A96D',
    link: null,
  },
  {
    name: 'AgentifAI Buildathon',
    edition: 'Capgemini',
    year: '2026',
    organizer: 'Capgemini',
    location: 'Remote',
    team: 'Solo',
    result: 'Finalist',
    description:
      'Architected an autonomous multi-agent workflow system that automates repetitive developer tasks — PR review, test generation, and release-note drafting.',
    icon: Sparkles,
    tags: ['LangChain', 'TypeScript', 'OpenAI', 'Node.js'],
    color: '#F2D492',
    link: null,
  },
];

/* ─── Intersection observer hook ────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Single Card ───────────────────────────────────────────────── */
function HackCard({ hack, index }) {
  const [cardRef, cardVisible] = useInView(0.1);
  const [hovered, setHovered] = useState(false);
  const Icon = hack.icon;

  return (
    <div
      ref={cardRef}
      className="group relative cursor-default"
      style={{
        opacity: cardVisible ? 1 : 0,
        transform: cardVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${index * 120}ms, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 120}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer glow on hover */}
      <div
        className="absolute -inset-px rounded-[22px] pointer-events-none transition-all duration-500"
        style={{
          boxShadow: hovered
            ? `0 0 28px 0 ${hack.color}28, 0 0 0 1px ${hack.color}50`
            : '0 0 0 0 transparent, 0 0 0 1px rgba(255,255,255,0.06)',
        }}
      />

      {/* Card shell */}
      <div
        className="relative rounded-[22px] overflow-hidden"
        style={{
          background: hovered
            ? `rgba(255,255,255,0.045)`
            : `rgba(255,255,255,0.03)`,
          border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), background 0.3s ease',
        }}
      >
        {/* Subtle inner radial highlight */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-[22px]"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 20% 0%, ${hack.color}0d 0%, transparent 70%)`,
            opacity: hovered ? 1 : 0,
          }}
        />

        <div className="relative z-10 p-6">
          {/* ── Top row: icon + title + year pill ── */}
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-400"
              style={{
                background: hovered ? `${hack.color}18` : 'rgba(255,255,255,0.05)',
                border: `1px solid ${hovered ? hack.color + '40' : 'rgba(255,255,255,0.08)'}`,
              }}
            >
              <Icon
                size={20}
                style={{
                  color: hovered ? hack.color : '#9ca3af',
                  transition: 'color 0.3s ease',
                }}
              />
            </div>

            {/* Title + meta */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3
                  className="text-[15px] font-bold text-white leading-tight truncate"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {hack.name}
                </h3>
                {/* Year pill – top right */}
                <span
                  className="shrink-0 text-[10px] font-semibold px-2.5 py-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: hovered ? `${hack.color}20` : 'rgba(255,255,255,0.06)',
                    color: hovered ? hack.color : '#6b7280',
                    border: `1px solid ${hovered ? hack.color + '35' : 'rgba(255,255,255,0.1)'}`,
                    letterSpacing: '0.04em',
                  }}
                >
                  {hack.year}
                </span>
              </div>

              {/* Status line */}
              <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                <MapPin size={10} className="text-neutral-500 shrink-0" />
                <span className="text-[12px] text-neutral-500 leading-none">{hack.location}</span>
                <span className="text-neutral-700 text-[10px]">•</span>
                <Users size={10} className="text-neutral-500 shrink-0" />
                <span className="text-[12px] text-neutral-500 leading-none">{hack.team}</span>
                <span className="text-neutral-700 text-[10px]">•</span>
                <Trophy size={10} className="shrink-0" style={{ color: hack.color + 'bb' }} />
                <span
                  className="text-[12px] font-medium leading-none"
                  style={{ color: hack.color + 'cc' }}
                >
                  {hack.result}
                </span>
              </div>
            </div>
          </div>

          {/* Organizer tag */}
          <div className="mt-3">
            <span className="text-[11px] text-neutral-600 font-medium">
              by {hack.organizer}
            </span>
          </div>

          {/* ── Reveal on hover: description ── */}
          <div
            className="overflow-hidden transition-all duration-500"
            style={{
              maxHeight: hovered ? '80px' : '0px',
              opacity: hovered ? 1 : 0,
              marginTop: hovered ? '12px' : '0px',
            }}
          >
            <p className="text-[12.5px] text-neutral-400 leading-relaxed">
              {hack.description}
            </p>
          </div>

          {/* ── Bottom row: tech tags + CTA ── */}
          <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {hack.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md transition-all duration-300"
                  style={{
                    background: hovered ? `${hack.color}12` : 'rgba(255,255,255,0.04)',
                    color: hovered ? hack.color + 'cc' : '#6b7280',
                    border: `1px solid ${hovered ? hack.color + '28' : 'rgba(255,255,255,0.07)'}`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA – appears on hover */}
            <div
              className="transition-all duration-400 shrink-0"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'translateX(0)' : 'translateX(8px)',
              }}
            >
              {hack.link ? (
                <a
                  href={hack.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] font-semibold rounded-lg px-2.5 py-1 transition-all duration-200"
                  style={{
                    background: `${hack.color}18`,
                    color: hack.color,
                    border: `1px solid ${hack.color}35`,
                  }}
                >
                  View <ArrowUpRight size={11} />
                </a>
              ) : (
                <span
                  className="flex items-center gap-1 text-[11px] font-semibold rounded-lg px-2.5 py-1"
                  style={{
                    background: `${hack.color}12`,
                    color: hack.color + 'aa',
                    border: `1px solid ${hack.color}25`,
                  }}
                >
                  Read More <ExternalLink size={10} />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────── */
const Hackathons = () => {
  const [headerRef, headerVisible] = useInView(0.2);

  return (
    <section id="hackathons" className="relative py-20 px-6 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[#080808]" />

        {/* Faint radial depth glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(224,169,109,0.055) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute bottom-0 inset-x-0 h-64"
          style={{
            background:
              'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(242,212,146,0.04) 0%, transparent 70%)',
          }}
        />

        {/* Very subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 px-3 py-1 rounded-full"
            style={{
              color: '#E0A96D',
              background: 'rgba(224,169,109,0.1)',
              border: '1px solid rgba(224,169,109,0.2)',
            }}
          >
            <Trophy size={11} />
            Competitive Experience
          </span>

          <h2
            className="text-[28px] md:text-[38px] font-bold text-white leading-tight"
            style={{ letterSpacing: '-0.025em' }}
          >
            Hackathons &amp; Competitions
          </h2>

          <p className="mt-3 text-[13.5px] text-neutral-500 max-w-md mx-auto leading-relaxed">
            Building under pressure, shipping fast, and learning faster — across four competitions.
          </p>

          {/* Thin divider */}
          <div
            className="mx-auto mt-5 h-px w-24"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(224,169,109,0.5), transparent)',
            }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathons.map((hack, idx) => (
            <HackCard key={hack.name} hack={hack} index={idx} />
          ))}
        </div>

        {/* Footer count */}
        <div
          className="mt-10 text-center text-[12px] text-neutral-600 tracking-wide"
          style={{ letterSpacing: '0.06em' }}
        >
          {hackathons.length} COMPETITIONS &nbsp;·&nbsp; 2024 – 2026
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
