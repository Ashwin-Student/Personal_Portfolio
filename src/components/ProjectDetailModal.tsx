import { useState } from 'react';
import { X, Copy, Check, ExternalLink, Code2, Layers, Shield, Terminal } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  initialTab?: 'architecture' | 'code';
}

export function ProjectDetailModal({ project, onClose, initialTab = 'architecture' }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'code'>(initialTab);
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(project.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-[#0c1427] border border-blue-500/30 rounded-xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090e1d] shrink-0">
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-emerald-400 font-semibold tracking-wider uppercase">
              {project.category} · Project Deep-Dive
            </span>
            <h3 className="text-lg font-semibold text-white tracking-tight">{project.title}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-6 pt-3 bg-[#0a0f1f] border-b border-slate-800 text-xs shrink-0">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-1.5 px-4 py-2 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Specifications</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-4 py-2 border-b-2 font-medium transition-colors cursor-pointer ${
              activeTab === 'code'
                ? 'border-emerald-500 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Configuration & Code ({project.codeSnippetTitle})</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 bg-[#0a0f1d] text-sm">
          {activeTab === 'architecture' ? (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5">Project Overview</h4>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">Architectural Highlights & Hardening</h4>
                <div className="space-y-2">
                  {project.architectureHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#0e162a] border border-slate-800 text-xs">
                      <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics & SLA */}
              <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-500/20">
                <p className="text-xs font-mono text-blue-400 font-semibold mb-0.5">Defensive Metric / Benchmark SLA:</p>
                <p className="text-xs text-slate-300 font-mono">{project.metrics}</p>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">Technologies & Protocols</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono text-slate-300">{project.codeSnippetTitle}</span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded">
                    {project.codeLanguage}
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-lg bg-[#060a14] border border-slate-800 overflow-hidden">
                <pre className="p-4 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed max-h-[380px]">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-[#090e1d] text-xs shrink-0">
          <span className="text-slate-500 font-mono text-[11px]">
            Repository: {project.id}
          </span>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
