import { Trophy, Star, BookOpen, Server, Flame } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function AchievementsSection() {
  const categoryIcons: Record<string, typeof Trophy> = {
    Competition: Trophy,
    'Open Source': Star,
    Publication: BookOpen,
    'Engineering Impact': Server,
    'Skills Mastery': Flame
  };

  return (
    <section id="achievements" className="py-16 bg-[#0a0f1d] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">
            06. Recognition
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight mt-1">
            Key Achievements
          </h2>
        </div>

        {/* Clean Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_DATA.achievements.map((item) => {
            const Icon = categoryIcons[item.category] || Trophy;
            return (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-[#0f172a] border border-slate-800/90 glow-card flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="text-blue-400 font-medium">{item.category}</span>
                    <span>{item.date}</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-snug line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {item.metric && (
                  <div className="pt-3 mt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono text-emerald-400 font-medium">
                      ★ {item.metric}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
