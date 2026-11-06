import { useState, useEffect, useMemo, FormEvent } from 'react';
import { 
  Code2, 
  ShieldAlert, 
  Cloud, 
  Activity, 
  Plus, 
  Search, 
  Trash2, 
  Check, 
  Copy, 
  X, 
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA, ToolOrLanguageItem } from '../data/portfolioData';

const LOCAL_STORAGE_KEY = 'cdac_portfolio_custom_tools_v1';

export function ToolsAndLanguagesSection() {
  const [items, setItems] = useState<ToolOrLanguageItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return PORTFOLIO_DATA.languagesAndTools;
  });

  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [copiedExport, setCopiedExport] = useState(false);

  // New item form state
  const [newItem, setNewItem] = useState<{
    name: string;
    type: 'language' | 'security-tool' | 'devops-tool' | 'monitoring-tool';
    proficiency: 'Advanced' | 'Proficient' | 'Intermediate';
    experienceYears: string;
    useCase: string;
    tagsInput: string;
  }>({
    name: '',
    type: 'language',
    proficiency: 'Proficient',
    experienceYears: '',
    useCase: '',
    tagsInput: ''
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const handleAddItem = (e: FormEvent) => {
    e.preventDefault();
    if (!newItem.name.trim()) return;

    const tags = newItem.tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const created: ToolOrLanguageItem = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: newItem.name.trim(),
      type: newItem.type,
      proficiency: newItem.proficiency,
      experienceYears: newItem.experienceYears.trim() || undefined,
      useCase: newItem.useCase.trim() || 'Technical stack component.',
      tags: tags.length > 0 ? tags : [newItem.name.trim()]
    };

    setItems((prev) => [created, ...prev]);
    setIsAddModalOpen(false);

    setNewItem({
      name: '',
      type: 'language',
      proficiency: 'Proficient',
      experienceYears: '',
      useCase: '',
      tagsInput: ''
    });
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleResetToDefault = () => {
    if (window.confirm('Reset tools list to default?')) {
      setItems(PORTFOLIO_DATA.languagesAndTools);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  const handleExportJson = () => {
    navigator.clipboard.writeText(JSON.stringify(items, null, 2));
    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2000);
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesTab = activeTab === 'all' || item.type === activeTab;
      if (!matchesTab) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.useCase.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [items, activeTab, searchQuery]);

  const getCategoryIcon = (type: ToolOrLanguageItem['type']) => {
    switch (type) {
      case 'language':
        return Code2;
      case 'security-tool':
        return ShieldAlert;
      case 'devops-tool':
        return Cloud;
      case 'monitoring-tool':
        return Activity;
      default:
        return Layers;
    }
  };

  return (
    <section id="tools" className="py-16 bg-[#090e1c] border-b border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
              03. Stack & Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight mt-1">
              Languages & Tools
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Tool</span>
            </button>

            <button
              onClick={handleExportJson}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono text-slate-400 hover:text-white bg-[#0e172e] border border-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Copy JSON configuration"
            >
              {copiedExport ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedExport ? 'Copied' : 'JSON'}</span>
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 bg-[#0d1426] border border-slate-800'
              }`}
            >
              All ({items.length})
            </button>
            <button
              onClick={() => setActiveTab('language')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'language'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 bg-[#0d1426] border border-slate-800'
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setActiveTab('security-tool')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'security-tool'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 bg-[#0d1426] border border-slate-800'
              }`}
            >
              Security
            </button>
            <button
              onClick={() => setActiveTab('devops-tool')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'devops-tool'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 bg-[#0d1426] border border-slate-800'
              }`}
            >
              DevOps & Cloud
            </button>
            <button
              onClick={() => setActiveTab('monitoring-tool')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'monitoring-tool'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 bg-[#0d1426] border border-slate-800'
              }`}
            >
              SIEM & Monitoring
            </button>
          </div>

          <div className="relative w-full sm:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#0c1427] border border-slate-800 rounded-lg text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
            />
          </div>
        </div>

        {/* Clean, Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredItems.map((item) => {
            const IconComp = getCategoryIcon(item.type);
            const isCustom = item.id.startsWith('custom-');

            return (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-[#0f172a] border border-slate-800/80 glow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {item.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                        {item.proficiency}
                      </span>
                      {isCustom && (
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          className="p-1 text-slate-500 hover:text-rose-400"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-snug line-clamp-2">
                    {item.useCase}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1 pt-3 mt-2 border-t border-slate-800/60">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-slate-500 bg-slate-900/60 px-1.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Footer */}
        <div className="mt-6 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>{filteredItems.length} items</span>
          <button
            onClick={handleResetToDefault}
            className="hover:text-slate-300 underline"
          >
            Reset defaults
          </button>
        </div>

      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-md bg-[#0c1326] border border-blue-500/30 rounded-xl shadow-2xl overflow-hidden text-slate-200">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#090e1c]">
              <h3 className="text-xs font-bold text-white font-heading uppercase tracking-wider">
                Add Tool or Language
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddItem} className="p-5 space-y-3.5 text-xs">
              <div>
                <label className="block mb-1 text-slate-300 font-mono">Name</label>
                <input
                  type="text"
                  required
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  placeholder="e.g. Rust, Kali Linux, Splunk"
                  className="w-full px-3 py-1.5 bg-[#090f21] border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-slate-300 font-mono">Type</label>
                  <select
                    value={newItem.type}
                    onChange={(e) => setNewItem({ ...newItem, type: e.target.value as any })}
                    className="w-full px-2.5 py-1.5 bg-[#090f21] border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="language">Language</option>
                    <option value="security-tool">Security Tool</option>
                    <option value="devops-tool">DevOps / Cloud</option>
                    <option value="monitoring-tool">SIEM / Monitoring</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-slate-300 font-mono">Proficiency</label>
                  <select
                    value={newItem.proficiency}
                    onChange={(e) => setNewItem({ ...newItem, proficiency: e.target.value as any })}
                    className="w-full px-2.5 py-1.5 bg-[#090f21] border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Advanced">Advanced</option>
                    <option value="Proficient">Proficient</option>
                    <option value="Intermediate">Intermediate</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-1 text-slate-300 font-mono">Use Case</label>
                <input
                  type="text"
                  required
                  value={newItem.useCase}
                  onChange={(e) => setNewItem({ ...newItem, useCase: e.target.value })}
                  placeholder="e.g. Network automation, threat hunting..."
                  className="w-full px-3 py-1.5 bg-[#090f21] border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-slate-300 font-mono">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={newItem.tagsInput}
                  onChange={(e) => setNewItem({ ...newItem, tagsInput: e.target.value })}
                  placeholder="Security, Automation, CLI"
                  className="w-full px-3 py-1.5 bg-[#090f21] border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
