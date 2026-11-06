import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ToolsAndLanguagesSection } from './components/ToolsAndLanguagesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [projectModalTab, setProjectModalTab] = useState<'architecture' | 'code'>('architecture');

  const handleOpenProject = (project: ProjectItem, tab: 'architecture' | 'code') => {
    setSelectedProject(project);
    setProjectModalTab(tab);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-200 flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Technical Skills (OS, Networking, Cloud, Security) */}
        <SkillsSection />

        {/* 4. Programming Languages & Tools (Customizable & Interactive) */}
        <ToolsAndLanguagesSection />

        {/* 5. Projects */}
        <ProjectsSection onSelectProject={handleOpenProject} />

        {/* 6. Education & Certifications */}
        <EducationSection />

        {/* 7. Achievements */}
        <AchievementsSection />

        {/* 8. Contact Me */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        initialTab={projectModalTab}
      />

    </div>
  );
}
