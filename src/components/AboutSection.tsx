import { useState } from 'react';
import { Shield, Cpu, Activity, Copy, Check, Terminal, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function AboutSection() {
  const [copiedBio, setCopiedBio] = useState(false);

  const handleCopyBio = () => {
    const fullText = PORTFOLIO_DATA.about.bio.join('\n\n');
    navigator.clipboard.writeText(fullText);
    setCopiedBio(true);
    setTimeout(() => setCopiedBio(false), 2000);
  };

  const icons = [Shield, Cpu, Activity];

  return (
    <section id="about" className="py-20 bg-[#0a0f1d] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">
              01. Background & Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight mt-1">
              About Me
            </h2>
          </div>

          <button
            onClick={handleCopyBio}
            className="self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-400 hover:text-white bg-[#0e162b] border border-slate-800 hover:border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            {copiedBio ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Bio Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Bio</span>
              </>
            )}
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Bio */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p className="text-lg font-medium text-white leading-snug">
              {PORTFOLIO_DATA.about.lead}
            </p>
            {PORTFOLIO_DATA.about.bio.map((paragraph, index) => (
              <p key={index} className="text-slate-400 text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Quick Specs Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-[#0d152a] rounded-lg border border-slate-800/80">
                <span className="text-slate-500 block">DIPLOMA SPECIALIZATION</span>
                <span className="text-slate-200 font-semibold">CDAC ACTS - ITISS (2024–2025)</span>
              </div>
              <div className="p-3 bg-[#0d152a] rounded-lg border border-slate-800/80">
                <span className="text-slate-500 block">CURRENT STATUS</span>
                <span className="text-emerald-400 font-semibold">{PORTFOLIO_DATA.profile.availability}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Core Engineering Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Core Engineering Pillars
            </h3>

            {PORTFOLIO_DATA.about.corePrinciples.map((pillar, idx) => {
              const IconComp = icons[idx] || Shield;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0f172a] border border-slate-800/80 hover:border-blue-500/30 transition-all glow-card"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white font-heading">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-11">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
