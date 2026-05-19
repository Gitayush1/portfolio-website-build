"use client";

import { useState } from "react";
import { SplashScreen } from "@/components/splash-screen";
import { HeroSection } from "@/components/hero-section";
import { ImpactHighlights } from "@/components/impact-highlights";
import { ExperienceSection } from "@/components/experience-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { FooterSection } from "@/components/footer-section";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { MobileNav } from "@/components/mobile-nav";
import { AccessibilityToggle } from "@/components/accessibility-toggle";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      {/* Accessibility Toggle */}
      <AccessibilityToggle />

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen 
          onComplete={() => setShowSplash(false)}
          duration={1.8}
        />
      )}

      {/* Hero Section */}
      <HeroSection />

      {/* Impact Highlights */}
      <ImpactHighlights />

      {/* Experience Timeline */}
      <ExperienceSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Projects Showcase */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
