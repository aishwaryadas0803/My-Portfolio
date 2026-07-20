'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Coffee, Zap, Code2, Puzzle, Rocket, ExternalLink } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/* ─── Intersection-observer hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Animated typing hook ─── */
function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ─── Stat pill ─── */
function StatPill({ icon: Icon, label, value, color, delay, inView }) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-plum-muted/20 border border-girly-lavender/10 glass-morphism hover:border-girly-pink/30 transition-all duration-300 group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <div className={`p-2 rounded-lg bg-darkBg-primary/60 border border-girly-lavender/10 ${color}`}>
        <Icon size={16} />
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-offwhite/40">{label}</p>
        <p className="text-sm font-bold text-offwhite/90">{value}</p>
      </div>
    </div>
  );
}

/* ─── "What I do" card ─── */
function DoCard({ icon: Icon, title, desc, color, border, delay, inView }) {
  return (
    <div
      className={`p-5 rounded-2xl bg-plum-muted/15 border border-girly-lavender/8 glass-morphism ${border} hover:-translate-y-1 transition-all duration-300 cursor-default group`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.97)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <div className={`mb-3 w-10 h-10 rounded-xl flex items-center justify-center bg-darkBg-primary/60 border border-girly-lavender/10 ${color} group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={18} />
      </div>
      <h4 className="text-sm font-bold text-offwhite mb-1.5 tracking-wide">{title}</h4>
      <p className="text-xs text-offwhite/50 font-light leading-relaxed">{desc}</p>
    </div>
  );
}

/* ─── Profile Image with 3D Tilt ─── */
function ProfileImage({ inView }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease 0.4s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s',
        perspective: 1000
      }}
      className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[400px] mx-auto lg:mx-0 shrink-0"
    >
      <div className="absolute inset-0 bg-yellow-500/15 rounded-full blur-[70px] -z-10 group-hover:bg-yellow-500/25 transition-colors duration-500" />
      
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="w-full"
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          whileHover={{ scale: 1.02 }}
          className="relative group w-full aspect-[4/5] rounded-[32px] p-2 bg-gradient-to-br from-white/5 to-white/0 border border-yellow-500/30 glass-morphism shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-colors duration-500 hover:border-yellow-400/50"
        >
          <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none" />
          <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-black/50">
            <img 
              src="/profile.jpg?v=5" 
              alt="Aishwarya" 
              className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── Main component ─── */
const Introduction = () => {
  const [sectionRef, inView] = useInView(0.1);
  const roles = [
    'BTech CSE Student',
    'Problem Solver',
    'Full Stack Developer',
  ];
  const typedRole = useTypingEffect(roles);

  const stats = [
    { icon: MapPin,  label: 'Based in',    value: 'West Bengal, India',  color: 'text-girly-pink',     delay: 100 },
    { icon: Coffee,  label: 'Fuelled by',  value: 'Coffee & Curiosity',  color: 'text-girly-lavender', delay: 200 },
    { icon: Zap,     label: 'Currently',   value: 'Working @ PAROT',     color: 'text-emerald-400',    delay: 300 },

  ];

  const doCards = [
    {
      icon: Code2,
      title: 'Full-Stack Engineering',
      desc: 'Building end-to-end web apps with React, Next.js, Node.js, and MongoDB — from pixel-perfect UIs to robust REST APIs.',
      color: 'text-girly-pink',
      border: 'hover:border-girly-pink/30',
      delay: 100,
    },
    {
      icon: Puzzle,
      title: 'Problem Solver',
      desc: 'Breaking down complex challenges into clean, elegant solutions — with a logical mindset and a passion for getting things right.',
      color: 'text-girly-lavender',
      border: 'hover:border-girly-lavender/30',
      delay: 200,
    },
    {
      icon: Rocket,
      title: 'Product Thinking',
      desc: 'Treating every project as a product — understanding users, iterating fast, and shipping work that actually matters.',
      color: 'text-girly-lavender',
      border: 'hover:border-girly-lavender/30',
      delay: 400,
    },
  ];

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden bg-darkBg-primary scroll-mt-20"
    >
      {/* Gradient bridge from Hero to Introduction (Now pure black) */}
      <div className="absolute top-0 left-0 w-full h-28 pointer-events-none z-0"
        style={{ background: 'linear-gradient(to bottom, #000000, #000000)' }} />

      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-girly-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-girly-lavender/5 blur-[100px] pointer-events-none" />
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-[0.02]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Top: label + headline + image ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-8 mb-16">
          <div
            className="flex-1 max-w-2xl w-full flex flex-col items-center text-center lg:items-start lg:text-left"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            <span className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold uppercase tracking-widest text-girly-pink mb-4">
              <span className="w-5 h-px bg-girly-pink/60 inline-block" />
              Introduction
            </span>

            {/* Static + typed headline */}
            <h2 className="text-4xl md:text-6xl font-black text-offwhite leading-tight tracking-tight">
              Hi, I'm{' '}
              <span
                className="bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #E0A96D, #F2D492)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Aishwarya.
              </span>
              <br />
              <span className="text-offwhite/80 text-2xl md:text-4xl font-semibold mt-2 block min-h-[1.4em]">
                I'm a{' '}
                <span className="text-girly-lavender typing-cursor">{typedRole}</span>
              </span>
            </h2>

            <p
              className="mt-6 text-offwhite/55 text-sm md:text-base font-light leading-loose max-w-2xl"
              style={{
                opacity: inView ? 1 : 0,
                transition: 'opacity 0.8s ease 0.3s',
              }}
            >
              I'm a Computer Science student and developer passionate about building things that live on the internet.
              I care deeply about the intersection of{' '}
              <strong className="text-girly-pink font-semibold">elegant design</strong> and{' '}
              <strong className="text-girly-lavender font-semibold">clean engineering</strong> — creating experiences that are
              not just functional, but genuinely memorable.
            </p>
          </div>

          <ProfileImage inView={inView} />
        </div>

        {/* ── Mid: Stats row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {stats.map((s) => (
            <StatPill key={s.label} {...s} inView={inView} />
          ))}
        </div>

        {/* ── PAROT highlight banner ── */}
        <div
          className="mb-16 relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-900/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.4s',
            boxShadow: '0 0 40px rgba(52,211,153,0.06), inset 0 1px 0 rgba(52,211,153,0.08)',
          }}
        >
          {/* Subtle glow blob */}
          <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10">
            {/* Pulsing dot */}
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/70 mb-0.5">Current Role</p>
              <p className="text-sm md:text-base font-semibold text-offwhite/90">
                Developer at{' '}
                <span className="text-emerald-400">PAROT</span>
                <span className="text-offwhite/40 font-light"> — Product Architecture &amp; Real-world Optimization Technologies</span>
              </p>
            </div>
          </div>

          <a
            href="https://parot.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-xl border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-semibold hover:bg-emerald-950/70 hover:border-emerald-400/50 transition-all duration-200 whitespace-nowrap group shrink-0"
          >
            Visit PAROT
            <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* ── Bottom: What I do cards ── */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.5s ease 0.2s',
          }}
        >
          <h3 className="text-lg font-bold text-offwhite/80 mb-6 flex items-center gap-2">
            <span className="w-4 h-px bg-girly-lavender/60 inline-block" />
            What I do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {doCards.map((card) => (
              <DoCard key={card.title} {...card} inView={inView} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Introduction;
