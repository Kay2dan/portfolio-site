import React from "react";
import { SEO } from "../components/SEO";
import { HeroSection } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { PersonalProjects } from "../components/PersonalProjects";
import { ProfessionalHistory } from "../components/ProfessionalHistory";
import { Github } from "../components/Github";
import { Contact } from "../components/Contact";

// import css
import "../styles/main.scss";
import Helmet from "react-helmet";

export default function Home() {
  return (
    <div>
      <SEO />
      <Navbar />
      <HeroSection />
      <PersonalProjects />
      <ProfessionalHistory />
      <Github />
      <Contact />
    </div>
  );
}
