import { Section } from "@/components";

import { Hero, ContactMe, ProjectHistory, TechStack, Training, WorkHistory } from "./sections";

export default function Home() {
  return (
    <>
      <Section
        id="hero"
        variant="ink"
        settings={{
          bg: { src: "/hero-bg.jpg", objectPosition: "85% 0" },
          overlay: { style: "gradient" },
        }}
      >
        <Hero />
      </Section>

      <Section id="techstack" eyebrow="01 — Stack" title="Tools I build with">
        <TechStack />
      </Section>

      <Section id="work" variant="muted" eyebrow="02 — Experience" title="Where I've worked">
        <WorkHistory />
      </Section>

      <Section id="project" eyebrow="03 — Projects" title="Selected projects">
        <ProjectHistory />
      </Section>

      <Section
        id="training"
        variant="muted"
        eyebrow="04 — Learning"
        title="Trainings & certifications"
      >
        <Training />
      </Section>

      <Section id="contact" variant="ink">
        <ContactMe />
      </Section>
    </>
  );
}
