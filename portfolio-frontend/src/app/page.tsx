"use client";

import { useEffect, useState } from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import GuildHallSection from "@/components/sections/GuildHallSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [xboxMode, setXboxMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedXboxMode = localStorage.getItem('xbox-mode') === 'true';
    setXboxMode(savedXboxMode);
  }, []);

  const toggleXboxMode = () => {
    const newXboxMode = !xboxMode;
    setXboxMode(newXboxMode);
    localStorage.setItem('xbox-mode', newXboxMode.toString());
  };

  if (!mounted) return null;

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      xboxMode 
        ? "bg-gradient-to-br from-black via-green-950 to-black" 
        : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950"
    }`}>
      <Header xboxMode={xboxMode} onToggleXboxMode={toggleXboxMode} />
      <HeroSection xboxMode={xboxMode} />
      <EducationSection xboxMode={xboxMode} />
      <ExperienceSection xboxMode={xboxMode} />
      <ProjectsSection xboxMode={xboxMode} />
      <SkillsSection xboxMode={xboxMode} />
      <CertificatesSection xboxMode={xboxMode} />
      <GuildHallSection xboxMode={xboxMode} />
      <ContactSection xboxMode={xboxMode} />
      <Footer />
    </div>
  );
}
