import { AppointmentScheduler } from "@/components/AppointmentScheduler";
import { ExperienceShowcase } from "@/components/ExperienceShowcase";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ProtocolTimeline } from "@/components/ProtocolTimeline";
import { Testimonials } from "@/components/Testimonials";
import { VitalsPanel } from "@/components/VitalsPanel";

export default function Home() {
  return (
    <main>
      <Hero />
      <VitalsPanel />
      <ExperienceShowcase />
      <ProtocolTimeline />
      <AppointmentScheduler />
      <Testimonials />
      <FAQ />
    </main>
  );
}
