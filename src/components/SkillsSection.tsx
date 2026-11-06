import { useState, useMemo } from 'react';
import { Terminal, Network, Cloud, Shield, Search } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, typeof Terminal> = {
    os: Terminal,
    network: Network,
    cloud: Cloud,
    security: Shield
  };

  const filteredCategories = useMemo(() => {
    return PORTFOLIO_DATA.skillsCategories
      .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
      .map((cat) => {
        const filteredSkills = cat.skills.filter((skill) => {
          if (!searchQuery) return true;
          const query = searchQuery.toLowerCase();
          return (
            skill.name.toLowerCase().includes(query) ||
            skill.tags.some((t) => t.toLowerCase().includes(query))
          );
        });
        return {
          ...cat,
          skills: filteredSkills
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-16 bg-[#080d1a] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Minimalist */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
              02. Technical Arsenal
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight mt-1">
              Core Skills
            </h2>
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full sm:w-60">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#0c1427] border border-slate-800 rounded-lg text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Clean Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-slate-200 bg-[#0d1426] border border-slate-800'
            }`}
          >
            All Domains
          </button>
          <button
            onClick={() => setSelectedCategory('os')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'os'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-slate-200 bg-[#0d1426] border border-slate-800'
            }`}
          >
            Operating Systems
          </button>
          <button
            onClick={() => setSelectedCategory('network')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'network'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-slate-200 bg-[#0d1426] border border-slate-800'
            }`}
          >
            Networking & Security
          </button>
          <button
            onClick={() => setSelectedCategory('cloud')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'cloud'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-slate-200 bg-[#0d1426] border border-slate-800'
            }`}
          >
            Cloud & DevOps
          </button>
          <button
            onClick={() => setSelectedCategory('security')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'security'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-slate-200 bg-[#0d1426] border border-slate-800'
            }`}
          >
            SOC & Threat Defense
          </button>
        </div>

        {/* Clean, Compact Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Terminal;
            return (
              <div
                key={category.id}
                className="p-6 rounded-xl bg-[#0f172a] border border-slate-800/90 glow-card space-y-4"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Compact Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span className="font-mono text-emerald-400 text-[11px] tabular-nums">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <div className="flex flex-wrap gap-1 text-[10px] font-mono text-slate-500 pt-0.5">
                        {skill.tags.map((t, idx) => (
                          <span key={idx} className="text-slate-400">
                            {t}{idx < skill.tags.length - 1 ? ' ·' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
