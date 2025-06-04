"use client";

import { ModernHeader } from "@/components/modern-header";
import { ModernHeroSection } from "@/components/modern-hero-section";
import { FeaturedSection } from "@/components/featured-section";
import { featuredSections } from "@/data/featured-data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <ModernHeader />

      {/* Hero Section */}
      <ModernHeroSection />

      {/* Main Content */}
      <main>
        {/* Featured Rules Section */}
        <FeaturedSection
          title={featuredSections.rules.title}
          description={featuredSections.rules.description}
          items={featuredSections.rules.items}
          type="rule"
          sectionId="featured-rules"
        />

        {/* Featured Prompts Section */}
        <FeaturedSection
          title={featuredSections.prompts.title}
          description={featuredSections.prompts.description}
          items={featuredSections.prompts.items}
          type="prompt"
          sectionId="featured-prompts"
        />

        {/* Featured Libraries Section */}
        <FeaturedSection
          title={featuredSections.libraries.title}
          description={featuredSections.libraries.description}
          items={featuredSections.libraries.items}
          type="library"
          sectionId="featured-libraries"
        />
      </main>
    </div>
  );
}
