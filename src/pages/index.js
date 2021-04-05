import React from "react";
import { SEO } from "../components/SEO";
import { HeroSection } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { PersonalProjects } from "../components/PersonalProjects";
import { ProfessionalHistory } from "../components/ProfessionalHistory";

// import css
import "../styles/main.scss";

export default function Home() {
  return (
    <div>
      <SEO />
      <Navbar />
      <HeroSection />
      <PersonalProjects />
      <ProfessionalHistory />
    </div>
  );
}
