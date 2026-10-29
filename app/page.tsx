import React from "react";
import { TopBar } from "@/components/top-bar";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { FoundrySection } from "@/components/sections/foundry-section";
import { AudienceSection } from "@/components/sections/audience-section";
import { ClassificationSection } from "@/components/sections/classification-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ProductsSection } from "@/components/sections/products-section";
import { WorldSection } from "@/components/sections/world-section";
import { ManufacturingSection } from "@/components/sections/manufacturing-section";
import { SpecsSection } from "@/components/sections/specs-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { MeasureSection } from "@/components/sections/measure-section";
import { ResourcesSection } from "@/components/sections/resources-section";
import { LocationsSection } from "@/components/sections/locations-section";
import { QuoteSection } from "@/components/sections/quote-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A] font-body text-[#0A0A0A]">
      <TopBar />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <FoundrySection />
        <AudienceSection />
        <ClassificationSection />
        <FeaturesSection />
        <ProductsSection />
        <WorldSection />
        <ManufacturingSection />
        <SpecsSection />
        <ProjectsSection />
        <ServicesSection />
        <MeasureSection />
        <ResourcesSection />
        <LocationsSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}

