import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, ShieldCheck, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c1326] border border-blue-500/30 rounded-xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090e1c] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">Curriculum Vitae / Resume</h2>
              <p className="text-xs text-slate-400">Ashwin Debre · IT Infrastructure & System Security</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/portfolio-standalone.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 rounded-lg transition-colors"
              title="Open Standalone Single HTML File"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Standalone HTML</span>
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm bg-[#0a0f1d] selection:bg-blue-500/30">
          
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Ashwin Debre</h1>
            <p className="text-blue-400 font-medium mt-1 text-base">
              IT Infrastructure & System Security Engineer (CDAC ITISS)
            </p>
            
            <div className="flex flex-wrap gap-y-2 gap-x-4 mt-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                ashvindebre@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                +91 98765 43210
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                Pune / Mumbai, India
              </span>
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                github.com/ashwindebre
              </span>
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                linkedin.com/in/ashwindebre
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">Professional Summary</h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Certified IT Infrastructure and System Security Engineer with specialized post-graduate training from CDAC ITISS. Demonstrated expertise in architecting resilient zero-trust networks, hardening enterprise Linux and Active Directory systems to CIS benchmarks, configuring high-availability firewalls (pfSense/Fortinet), and deploying automated DevSecOps pipelines. Proven track record in SIEM log analysis (Wazuh/ELK), container security (Kubernetes/Cilium), and Infrastructure as Code (Terraform/Ansible).
            </p>
          </div>

          {/* Core Technical Proficiencies */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">Core Technical Proficiencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-[#0f172a] p-3 rounded-lg border border-slate-800">
                <p className="font-semibold text-white mb-1.5">Operating Systems</p>
                <p className="text-slate-400 leading-relaxed">
                  RHEL 8/9, Rocky Linux, Ubuntu Server, Windows Server 2022, Active Directory, GPO, LAPS, Bash & PowerShell Scripting, SELinux, Systemd, PAM.
                </p>
              </div>
              <div className="bg-[#0f172a] p-3 rounded-lg border border-slate-800">
                <p className="font-semibold text-white mb-1.5">Networking & Security</p>
                <p className="text-slate-400 leading-relaxed">
                  TCP/IP, OSPF, BGP, VLANs (802.1Q), WireGuard & IPsec VPN, pfSense, Snort/Suricata, Wireshark, 802.1X FreeRADIUS, Wazuh SIEM, Nmap, Nessus.
                </p>
              </div>
              <div className="bg-[#0f172a] p-3 rounded-lg border border-slate-800">
                <p className="font-semibold text-white mb-1.5">Cloud & DevSecOps</p>
                <p className="text-slate-400 leading-relaxed">
                  Docker, Kubernetes, Cilium eBPF, Terraform, Ansible, AWS (VPC, IAM, EC2), GitHub Actions CI/CD, HashiCorp Vault, Trivy, Prometheus, Grafana.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">Education</h3>
            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-slate-700 pl-4 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="font-semibold text-white text-sm">{edu.degree}</h4>
                    <span className="text-xs text-slate-400 font-mono">{edu.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">{edu.institution} · {edu.location}</p>
                  <p className="text-xs text-emerald-400 mt-0.5 font-mono">{edu.grade}</p>
                  <p className="text-xs text-slate-400 mt-1">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">Certifications & Accreditations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div key={cert.id} className="flex items-start gap-2 bg-[#0f172a] p-2.5 rounded-lg border border-slate-800">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">{cert.name}</p>
                    <p className="text-slate-400 text-[11px]">{cert.issuer} · ID: {cert.credentialId}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">Key Engineering Projects</h3>
            <div className="space-y-4">
              {PORTFOLIO_DATA.projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="border-l-2 border-blue-500/40 pl-4 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="font-semibold text-white text-sm">{proj.title}</h4>
                    <span className="text-xs text-slate-400 font-mono">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{proj.summary}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-[#090e1c] text-xs text-slate-400 shrink-0">
          <span>Available for Full-time Roles & Immediate Onboarding</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors cursor-pointer"
            >
              Print / Export Resume
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
