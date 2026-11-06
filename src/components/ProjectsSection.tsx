import { useState, useMemo } from 'react';
import { ExternalLink, Code2, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem, tab: 'architecture' | 'code') => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Network Security', 'DevSecOps', 'Threat Defense', 'SysAdmin', 'Cloud Infra'];

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PORTFOLIO_DATA.projects;
    return PORTFOLIO_DATA.projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-16 bg-[#0a0f1d] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">
              04. Featured Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight mt-1">
              Featured Projects
            </h2>
          </div>

          {/* Clean Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-slate-200 bg-[#0d1426] border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-5 rounded-xl bg-[#0f172a] border border-slate-800/90 glow-card flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                
                {/* Category Kicker */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors font-heading leading-snug">
                  {project.title}
                </h3>

                {/* Clean 2-Line Summary */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {project.summary}
                </p>

                {/* Tech Stack List */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono text-slate-500 px-1 py-0.5">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Actions */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project, 'code')}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-500/30 rounded-lg transition-colors cursor-pointer"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>View Code</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProject(project, 'architecture')}
                    className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-700/80 rounded-lg transition-colors cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    <span>Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
