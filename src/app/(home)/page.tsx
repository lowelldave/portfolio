import { Section } from "@/components";
import { Hero, ContactMe, ProjectHistory, TechStack, Training, WorkHistory } from './(sections)';

export default function Home() {
  return (
    <>
      <Section
        className="h-screen flex"
        settings={{
          bg: {
            src: "/hero-bg.jpg",
            isFill: true,
            objectPosition: "90% 0",
          },
          overlay: {
            style: "dotted",
          },
        }}
        id="hero"
      >
        <Hero />
      </Section>

      <Section title="Tech Stack" className="shadow-innerShadow" id="techstack">
        <TechStack />
      </Section>

      <Section title="Work History" variant="dark" id="work">
        <WorkHistory />
      </Section>

      <Section title="Project History" className="shadow-innerShadow" id="project">
        <ProjectHistory />
      </Section>

      <Section title="Trainings and Certifications" variant="dark" id="training">
        <Training />
      </Section>

      <Section className="shadow-innerShadow">
        <ContactMe />
      </Section>
    </>
  );
}
