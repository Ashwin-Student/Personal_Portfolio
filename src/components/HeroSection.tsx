import { useState, useEffect } from 'react';
import { 
  Download, 
  Terminal as TerminalIcon, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  BookOpen, 
  ShieldCheck, 
  Network, 
  Server, 
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  // Terminal typing animation state
  const subtitles = PORTFOLIO_DATA.profile.subtitles;
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  useEffect(() => {
    const currentFullText = subtitles[subtitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          // Pause at full word
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(55);
        }
      } else {
        // Deleting backward
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
          setTypingSpeed(350);
        } else {
          setTypingSpeed(25);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, subtitleIndex, subtitles, typingSpeed]);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden cyber-grid border-b border-slate-800/80">
      
      {/* Subtle background ambient cyber glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Pitch */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Terminal prompt kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0e162b] border border-blue-500/30 text-xs font-mono text-slate-300">
              <span className="text-emerald-400 font-bold">ashwin@itiss-lab:~$</span>
              <span className="text-blue-300">cat credentials.nfo</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">Ashwin Debre</span>
              </h1>

              {/* Terminal Style Typing Subtitle */}
              <div className="h-9 sm:h-10 flex items-center">
                <span className="text-base sm:text-xl font-mono text-blue-400 font-semibold tracking-wide">
                  &gt; {displayText}
                  <span className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 ml-1 bg-emerald-400 cursor-blink align-middle" />
                </span>
              </div>
            </div>

            {/* Impactful Bio Pitch */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.profile.pitch}
            </p>

            {/* Technical Verification Highlights (Zero-Pill clean typography per rules) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-400 font-mono pt-1">
              <span className="text-emerald-400 font-semibold">CDAC ITISS Diploma</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-blue-300">RHCSA Certified</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">AWS Solutions Architect</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-300">CompTIA Security+</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all cursor-pointer hover:translate-y-[-1px]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#tools"
                className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 bg-[#101935] hover:bg-[#16234b] border border-blue-500/30 hover:border-blue-400/60 rounded-lg transition-all"
              >
                <span>View Languages & Tools</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-800/80">
              <span className="text-xs text-slate-500 font-mono">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PORTFOLIO_DATA.profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-950/40 rounded-lg transition-colors border border-transparent hover:border-blue-500/30"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-700"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-emerald-950/40 rounded-lg transition-colors border border-transparent hover:border-emerald-500/30"
                  aria-label="Medium Articles"
                >
                  <BookOpen className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-sky-400 hover:bg-sky-950/40 rounded-lg transition-colors border border-transparent hover:border-sky-500/30"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="p-2 text-slate-400 hover:text-amber-400 hover:bg-amber-950/40 rounded-lg transition-colors border border-transparent hover:border-amber-500/30"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Cyber Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Outer Glowing Cyber Border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600/40 via-cyan-500/20 to-emerald-500/40 blur-sm opacity-70 group-hover:opacity-100 transition duration-500" />
              
              {/* Frame Container */}
              <div className="relative bg-[#0d1424] border border-blue-500/40 rounded-2xl p-3 shadow-2xl overflow-hidden">
                
                {/* Tech Terminal Header for Photo */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-[#090e1c] rounded-lg border border-slate-800 text-[11px] font-mono text-slate-400 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>HOST: ITISS-NODE-01</span>
                  </div>
                  <span className="text-blue-400">SELINUX: ENFORCING</span>
                </div>

                {/* Professional Portrait Image */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-slate-800 bg-[#080d19]">
                  <img
                    src="/src/assets/images/profile_engineer_portrait_1793947447316.jpg"
                    alt="Ashwin Debre - IT Infrastructure & System Security Engineer"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Resilient CSS Fallback if image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle ambient scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>

                {/* Telemetry Card under photo */}
                <div className="mt-3 p-2.5 rounded-lg bg-[#090f21] border border-slate-800/80 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <div className="truncate">
                      <p className="text-[10px] text-slate-500">INFRA ROLE</p>
                      <p className="text-slate-200 font-semibold truncate">SecOps & Cloud</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div className="truncate">
                      <p className="text-[10px] text-slate-500">CLEARANCE</p>
                      <p className="text-emerald-400 font-semibold truncate">Zero-Trust L4</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Key Metric Strip Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.profile.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums">
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
