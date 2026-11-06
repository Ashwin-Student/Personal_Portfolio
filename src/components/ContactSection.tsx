import { useState, FormEvent } from 'react';
import { Mail, Send, Check, Copy, MapPin, Shield } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-[#080d1a] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
            07. Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight mt-1">
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white font-heading">
                Direct Channels
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0a0f1d] border border-slate-800">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="text-slate-200 font-mono">{PORTFOLIO_DATA.profile.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-slate-400 hover:text-white"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0f1d] border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">{PORTFOLIO_DATA.profile.location}</span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0f1d] border border-slate-800">
                  <Shield className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-emerald-400 font-mono font-medium">{PORTFOLIO_DATA.profile.availability}</span>
                </div>
              </div>

              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Opportunity%20Inquiry`}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Directly</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-xl bg-[#0f172a] border border-slate-800">
              
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    Message Sent
                  </h3>
                  <p className="text-xs text-slate-400">
                    Thank you. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs text-blue-400 hover:underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block mb-1 text-slate-300 font-mono">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3 py-2 bg-[#0a0f1d] border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-slate-300 font-mono">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3 py-2 bg-[#0a0f1d] border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 text-slate-300 font-mono">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Project"
                      className="w-full px-3 py-2 bg-[#0a0f1d] border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-slate-300 font-mono">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message..."
                      className="w-full px-3 py-2 bg-[#0a0f1d] border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <div className="pt-1 flex justify-end">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex items-center gap-1.5 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors cursor-pointer disabled:opacity-60"
                    >
                      {submitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
