import { Heart, Terminal } from 'lucide-react';

const Github = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-darkBg-primary border-t border-girly-lavender/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand and Tagline */}
        <div className="flex items-center gap-2 font-sans font-semibold text-lg tracking-tight">
          <Terminal size={18} className="text-girly-pink" />
          <span className="text-offwhite">Aishwarya Das</span>
          <span className="text-girly-pink/60">|</span>
          <span className="text-offwhite/60 text-sm font-light">CSE Portfolio</span>
        </div>

        {/* Middle: Made with Love */}
        <div className="text-offwhite/50 text-xs font-light flex items-center gap-1">
          <span>Designed & Built with</span>
          <Heart size={12} className="text-girly-pink animate-pulse fill-girly-pink" />
          <span>using Next.js & Tailwind</span>
        </div>

        {/* Right Side: Social Connections */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/aishwaryadas0803" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-plum-muted border border-girly-lavender/10 text-offwhite/80 hover:text-girly-pink hover:border-girly-pink/40 hover:shadow-pink-glow transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://linkedin.com/in/aishwarya-das-52004a301" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-plum-muted border border-girly-lavender/10 text-offwhite/80 hover:text-girly-pink hover:border-girly-pink/40 hover:shadow-pink-glow transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-girly-lavender/5 text-center">
        <p className="text-offwhite/40 text-xs font-light">
          &copy; {currentYear} Aishwarya Das. All rights reserved. B.Tech Computer Science & Engineering, JIS College of Engineering.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
