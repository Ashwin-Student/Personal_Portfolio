import { useState } from 'react';
import { Award, GraduationCap, MapPin, ExternalLink, ShieldCheck, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA, CertificationItem } from '../data/portfolioData';

export function EducationSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="credentials" className="py-16 bg-[#080d1a] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
            05. Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight mt-1">
            Education & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                Education
              </h3>
            </div>

            <div className="space-y-3">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0f172a] border border-slate-800/90 glow-card space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-blue-400">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 pt-0.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {edu.location}
                    </span>
                    <span className="text-emerald-400 font-medium">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                Certifications
              </h3>
            </div>

            <div className="space-y-2.5">
              {PORTFOLIO_DATA.certifications.map((cert) => {
                const isSelected = selectedCert?.id === cert.id;
                return (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCert(isSelected ? null : cert)}
                    className={`p-3.5 rounded-xl bg-[#0f172a] border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-emerald-500/60 bg-[#111c36]'
                        : 'border-slate-800/90 hover:border-blue-500/40 glow-card'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white">
                            {cert.name}
                          </h4>
                          <p className="text-[11px] font-mono text-slate-400">
                            {cert.issuer} · ID: {cert.credentialId}
                          </p>
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isSelected ? 'rotate-90 text-emerald-400' : ''}`} />
                    </div>

                    {isSelected && (
                      <div className="mt-3 pt-2.5 border-t border-slate-800 text-xs space-y-2 animate-in fade-in duration-150">
                        <div className="flex flex-wrap gap-1">
                          {cert.skillsCovered.map((s, idx) => (
                            <span key={idx} className="bg-slate-800 text-slate-300 font-mono text-[10px] px-2 py-0.5 rounded">
                              {s}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-end">
                          <a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 font-medium"
                          >
                            <span>Verify Credential</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
