import { ContactSection } from "@/components/contact-section";
import { EvolutionPath } from "@/components/evolution-path";
import { FieldMissions } from "@/components/field-missions";
import { HeroSection } from "@/components/hero-section";
import { LabNotes } from "@/components/lab-notes";
import { OperatingMode } from "@/components/operating-mode";
import { SignatureTechniques } from "@/components/signature-techniques";
import { SystemModules } from "@/components/system-modules";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OperatingMode />
      <SystemModules />
      <EvolutionPath />
      <FieldMissions />
      <SignatureTechniques />
      <LabNotes />
      <ContactSection />
    </>
  );
}
